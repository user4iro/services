declare global {
  interface Window {
    mercadopago: {
      bricks: () => Promise<{
        create: (
          type: string,
          elementId: string, 
          settings: MercadoPagoSettings
        ) => Promise<{
          unmount: () => void;
        }>;
      }>;
    };
    paymentBrickController: {
      unmount: () => void;
    };
  }
}

export interface MercadoPagoSettings {
  initialization: {
    preferenceId: string;
  };
  callbacks: {
    onReady: () => void;
    onError: (error: { message: string }) => void;
    onSubmit: () => Promise<void>;
  };
  customization?: {
    visual?: {
      hideValueProp?: boolean;
    };
    paymentMethods?: {
      creditCard?: string | string[];
      debitCard?: string | string[];
      bankTransfer?: string | string[];
      maxInstallments?: number;
    };
  };
}

export type { MercadoPagoSettings };