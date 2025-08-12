declare namespace MercadoPago {
  interface MercadoPagoInstance {
    bricks(): BricksBuilder;
  }

  interface BricksBuilder {
    create(
      brickType: string,
      containerId: string,
      settings: BrickSettings
    ): Promise<BrickController>;
  }

  interface BrickController {
    unmount(): void;
    submit(): void;
  }

  interface BrickSettings {
    initialization: {
      amount?: number;
      preferenceId?: string;
      payer?: {
        firstName?: string;
        lastName?: string;
        email?: string;
      };
    };
    customization?: {
      visual?: {
        hideValueProp?: boolean;
        theme?: "default" | "dark" | "light";
      };
      paymentMethods?: {
        creditCard?: string | string[];
        debitCard?: string | string[];
        ticket?: string | string[];
        bankTransfer?: string | string[];
        maxInstallments?: number;
      };
    };
    callbacks?: {
      onReady?: () => void;
      onSubmit?: (data: { selectedPaymentMethod: string; formData: Record<string, unknown> }) => Promise<void>;
      onError?: (error: { message: string; [key: string]: unknown }) => void;
    };
  }
}

interface Window {
  mercadopago: {
    bricks(): Promise<{
      create(
        brickType: string, 
        containerId: string, 
        settings: MercadoPago.BrickSettings
      ): Promise<MercadoPago.BrickController>
    }>;
  };
  paymentBrickController: MercadoPago.BrickController;
}

export {};