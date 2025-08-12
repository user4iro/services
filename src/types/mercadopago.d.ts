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
      amount: number;
      preferenceId?: string;
      payer?: {
        firstName?: string;
        lastName?: string;
        email?: string;
      };
    };
    customization: {
      visual?: {
        style?: {
          theme?: "default" | "dark" | "light";
        };
      };
      paymentMethods?: {
        creditCard?: string | string[];
        debitCard?: string | string[];
        ticket?: string | string[];
        bankTransfer?: string | string[];
        maxInstallments?: number;
      };
    };
    callbacks: {
      onReady?: () => void;
      onSubmit?: (data: { selectedPaymentMethod: any; formData: any }) => Promise<void>;
      onError?: (error: any) => void;
    };
  }
}

interface Window {
  MercadoPago: {
    new (publicKey: string, options?: { locale: string }): MercadoPago.MercadoPagoInstance;
  };
  paymentBrickController: MercadoPago.BrickController;
}

export {};