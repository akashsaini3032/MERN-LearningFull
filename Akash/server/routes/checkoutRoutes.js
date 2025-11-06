const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');
const bodyParser = require('body-parser');

// Normal JSON route to create session
router.post('/create-session', express.json(), checkoutController.createCheckoutSession);

// Webhook route: must receive raw body
router.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  // attach rawBody to req for controller
  req.rawBody = req.body;
  checkoutController.handleWebhook(req, res);
});

module.exports = router;
