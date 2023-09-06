'use client'

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

export default function PayPalConfig({ children }) {
    return (
        <PayPalScriptProvider
            options={{ "client-id": PAYPAL_CLIENT_ID }}
        >
            {children}
        </PayPalScriptProvider>
    )
}