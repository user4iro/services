import { type PreferenceCreateData } from "@mercadopago/sdk-react";

export interface PaymentDetails {
  company?: string;
  billNumber?: string;
  amount: string;
  description?: string;
  paymentMethod?: string;
}

// Configuration with the provided credentials
const MERCADO_PAGO_PUBLIC_KEY = "APP_USR-48632aac-2b61-4af6-8b2b-2edb51f807f9";
const MERCADO_PAGO_ACCESS_TOKEN = "APP_USR-49134505917126-081115-77648b99324e0c26b3ac1a2b86629310-755272174";

/**
 * Creates a Mercado Pago preference via client side
 * In a production environment, this should be done server-side
 */
export const createPreference = async (paymentDetails: PaymentDetails): Promise<{ preferenceId: string }> => {
  try {
    // For demo purposes we're creating the preference on the client side
    // In production, this should be done on your server for security
    
    // Convert amount from formatted string to number
    const numericAmount = parseFloat(paymentDetails.amount.replace(/[^\d]/g, ''));
    
    // This endpoint would be your backend API in production
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        items: [
          {
            title: paymentDetails.company 
              ? `Pago a ${paymentDetails.company}` 
              : "Pago de factura",
            description: paymentDetails.description || `Referencia: ${paymentDetails.billNumber || ""}`,
            quantity: 1,
            currency_id: "COP",
            unit_price: numericAmount
          }
        ],
        payment_methods: {
          excluded_payment_types: [],
          installments: 1,
          // Don't set a default payment method since it conflicts with exclusions
          excluded_payment_methods: [
            { id: "efecty" },
            { id: "baloto" },
            { id: "pagar_referencias" }
          ]
        },
        back_urls: {
          success: `${window.location.origin}/payment/success`,
          failure: `${window.location.origin}/payment`,
          pending: `${window.location.origin}/payment`
        },
        auto_return: "approved",
        statement_descriptor: "PagoMío",
        external_reference: paymentDetails.billNumber || "",
        expires: true,
        expiration_date_to: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString()
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error creating preference");
    }

    const data = await response.json();
    return { preferenceId: data.id };
  } catch (error) {
    console.error("Error creating Mercado Pago preference:", error);
    throw error;
  }
};

export default {
  MERCADO_PAGO_PUBLIC_KEY,
  createPreference
};