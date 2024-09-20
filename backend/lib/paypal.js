
import paypal from 'paypal-rest-sdk';
import dotenv from 'dotenv';
dotenv.config();

// Configure PayPal with environment variables
paypal.configure({
  // sandbox or live
  'mode': process.env.PAYPAL_MODE,
  'client_id': process.env.PAYPAL_CLIENT_ID,
  'client_secret': process.env.PAYPAL_SECRET
});
export default paypal;
