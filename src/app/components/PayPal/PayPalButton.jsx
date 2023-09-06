'use client'

import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({ amount }) {
    return (
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
                currency_code: 'USD',
              },
            }],
          });
        }}
      />
    );
  };