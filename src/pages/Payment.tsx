import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { MercadoPago } from "@/types/mercadopago";

// Mock data for the payment information
const paymentInfo = {
  service: "Agua de Bogotá",
  amount: 150000,
  reference: "REF-89076543",
  date: new Date().toLocaleDateString(),
};

export default function Payment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentBrickLoaded, setPaymentBrickLoaded] = useState(false);

  useEffect(() => {
    // Load Mercado Pago SDK
    const script = document.createElement('script');
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.onload = () => {
      initMercadoPago();
    };
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const initMercadoPago = () => {
    if (window.MercadoPago) {
      // Replace with your actual Mercado Pago public key
      const mp = new window.MercadoPago('TEST-123456789abcdef-123456', {
        locale: 'es-CO'
      });
      
      const bricksBuilder = mp.bricks();
      renderPaymentBrick(bricksBuilder);
    }
  };

  const renderPaymentBrick = async (bricksBuilder: MercadoPago.BricksBuilder) => {
    try {
      const settings: MercadoPago.BrickSettings = {
        initialization: {
          amount: paymentInfo.amount / 100, // Convert to the appropriate format
          preferenceId: "<PREFERENCE_ID>", // Replace with actual preference ID from backend
          payer: {
            firstName: "",
            lastName: "",
            email: "",
          },
        },
        customization: {
          visual: {
            style: {
              theme: "default",
            },
          },
          paymentMethods: {
            creditCard: "all",
            debitCard: "all",
            ticket: "all",
            bankTransfer: "all",
            maxInstallments: 1
          },
        },
        callbacks: {
          onReady: () => {
            setPaymentBrickLoaded(true);
            setLoading(false);
          },
          onSubmit: ({ selectedPaymentMethod, formData }) => {
            setLoading(true);
            
            return new Promise<void>((resolve, reject) => {
              // In a real implementation, you would call your backend API endpoint
              // that processes the payment with Mercado Pago's API
              
              // For demo purposes without a backend, we simulate success
              setTimeout(() => {
                navigate("/payment-success");
                resolve();
                setLoading(false);
              }, 2000);
              
              /* In a production environment with a backend:
              fetch("/process_payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              })
                .then((response) => response.json())
                .then((response) => {
                  // Handle successful payment
                  navigate("/payment-success");
                  resolve();
                })
                .catch((error) => {
                  setError("Error processing payment. Please try again.");
                  reject();
                })
                .finally(() => {
                  setLoading(false);
                });
              */
            });
          },
          onError: (error) => {
            console.error(error);
            setError(`Error: ${error.message || "Unknown error occurred"}`);
            setLoading(false);
          },
        },
      };

      const paymentBrickContainer = document.getElementById("paymentBrick_container");
      if (paymentBrickContainer) {
        const controller = await bricksBuilder.create(
          "payment",
          "paymentBrick_container",
          settings
        );
        
        // Store the controller globally to access it later if needed
        window.paymentBrickController = controller;
      }
    } catch (error) {
      console.error("Error rendering payment brick:", error);
      setError("Failed to load payment options. Please refresh and try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Procesar pago | PagoMío</title>
        <meta
          name="description"
          content="Procesa tu pago de servicios de manera segura con PagoMío"
        />
      </Helmet>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="flex items-center text-primary mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la página principal
        </Link>

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Procesar pago</CardTitle>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div id="paymentBrick_container" className="min-h-[400px]">
                  {!paymentBrickLoaded && (
                    <div className="flex justify-center items-center h-[400px]">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Resumen de pago</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Servicio:</span>
                    <span className="font-medium">{paymentInfo.service}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Referencia:</span>
                    <span className="font-medium">{paymentInfo.reference}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Fecha:</span>
                    <span className="font-medium">{paymentInfo.date}</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-lg font-bold">
                        ${paymentInfo.amount.toLocaleString("es-CO")} COP
                      </span>
                    </div>
                  </div>

                  <Alert className="bg-green-50 text-green-800 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Transacción Segura</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Todos los pagos son procesados de forma segura por Mercado Pago.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="mt-6">
                  <Button
                    disabled={loading || !paymentBrickLoaded}
                    className="w-full"
                    onClick={() => {
                      if (window.paymentBrickController) {
                        window.paymentBrickController.submit();
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">◌</span> Procesando...
                      </>
                    ) : (
                      "Confirmar Pago"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}