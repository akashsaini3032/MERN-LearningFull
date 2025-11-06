const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');
const orderService = require('../services/orderService');

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

// Create checkout session
async function createCheckoutSession(req, res) {
  /*
    Expected body:
    {
      email: "customer@example.com",
      items: [{ productId, title, price, quantity }]
    }
    price expected in cents on items.price
  */
  const { email, items } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Cart items required' });
  }

  // Calculate amount_total (cents)
  const amount_total = items.reduce((sum, it) => sum + (it.price * (it.quantity || 1)), 0);

  // Create line_items for Stripe
  const line_items = items.map(it => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: it.title,
      },
      unit_amount: it.price, // cents
    },
    quantity: it.quantity || 1,
  }));

  try {
    // Create session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      customer_email: email,
      success_url: `${CLIENT_URL}/payment-status?session_id={CHECKOUT_SESSION_ID}&status=success`,
      cancel_url: `${CLIENT_URL}/payment-status?session_id={CHECKOUT_SESSION_ID}&status=canceled`,
    });

    // Save order as pending with session id
    await orderService.createOrder({
      email,
      items,
      amount_total,
      currency: 'usd',
      stripeSessionId: session.id,
    });

    // Return session url so client can redirect
    return res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error('createCheckoutSession error', err);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
}

// Stripe webhook handler (raw body required)
async function handleWebhook(req, res) {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      // Payment successful — update order
      const sessionId = session.id;
      const payment_intent = session.payment_intent;
      await orderService.updateOrderBySession(sessionId, {
        status: 'paid',
        stripePaymentIntentId: payment_intent,
      });
      break;
    }
    case 'payment_intent.payment_failed': {
      const pi = event.data.object;
      const paymentIntentId = pi.id;
      // Try to find order by payment_intent -> find session via stripe API
      try {
        const sessions = await stripe.checkout.sessions.list({ payment_intent: paymentIntentId, limit: 1 });
        const session = sessions.data[0];
        if (session) {
          await orderService.updateOrderBySession(session.id, {
            status: 'failed',
            stripePaymentIntentId: paymentIntentId,
          });
        }
      } catch (err) {
        console.error('Error updating failed payment', err);
      }
      break;
    }
    case 'checkout.session.expired': {
      const session = event.data.object;
      await orderService.updateOrderBySession(session.id, { status: 'canceled' });
      break;
    }
    default:
      // unhandled event
      break;
  }

  res.json({ received: true });
}

module.exports = {
  createCheckoutSession,
  handleWebhook,
};
