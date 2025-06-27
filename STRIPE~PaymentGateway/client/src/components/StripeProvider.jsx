import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51RdSK4DAn4ZVr3y9YMht0zO9cBvDL6PttwzV2FYnLf2ukHaV9Ir2JNcozsxYx0rzmER4Xx0W1bFytzwf9970OHhN00VEQ8rTSq');

const StripeProvider = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
