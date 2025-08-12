import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import mercadoPago, { createPreference, type PaymentDetails } from "@/services/mercadoPago";
import type { MercadoPagoSettings } from "@/types/mercadopago";

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [showPaymentProcessor, setShowPaymentProcessor] = useState(false);
  const [isLoadingPreference, setIsLoadingPreference] = useState(false);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [sdkInitialized, setSdkInitialized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const paymentDetails: PaymentDetails = location.state?.paymentDetails || {
    amount: "99.900"
  };

  // Initialize MercadoPago SDK
  useEffect(() => {
    try {
      // Check if window.mercadopago already exists
      if (window.mercadopago) {
        console.log("Mercado Pago SDK already loaded");
        setSdkInitialized(true);
        return;
      }

      // If SDK is not available, load it dynamically
      const loadMercadoPagoScript = () => {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.async = true;
        script.onload = () => {
          console.log("Mercado Pago SDK loaded dynamically from Payment.tsx");
          setSdkInitialized(true);
        };
        script.onerror = () => {
          console.error("Failed to load Mercado Pago SDK from Payment.tsx");
        };
        document.head.appendChild(script);
      };

      loadMercadoPagoScript();

      return () => {
        // No cleanup needed, script stays loaded
      };
    } catch (error) {
      console.error("Error loading Mercado Pago SDK:", error);
    }
  }, []);

  // This function creates a preference and shows Mercado Pago Checkout
  const handleCheckout = async () => {
    if (!selectedPaymentMethod) {
      alert("Por favor selecciona un método de pago");
      return;
    }
    
    try {
      setIsLoadingPreference(true);
      
      // Create a preference with Mercado Pago
      const { preferenceId: prefId } = await createPreference({
        ...paymentDetails,
        paymentMethod: selectedPaymentMethod
      });
      
      setPreferenceId(prefId);
      setShowPaymentProcessor(true);
    } catch (error) {
      console.error('Error creating preference:', error);
      alert('Hubo un error al procesar tu pago. Por favor intenta nuevamente.');
    } finally {
      setIsLoadingPreference(false);
    }
  };
  
  // PSE and cards as requested
  const paymentMethods = [
    { id: 'pse', name: 'PSE - Transferencia Bancaria', icon: '/assets/images/payment-icons/logo-pse.png' },
    { id: 'credit_card', name: 'Tarjeta de Crédito', icon: '/images/CreditCard.jpg' },
    { id: 'debit_card', name: 'Tarjeta de Débito', icon: '/assets/images/payment-icons/debito.png' },
  ];

  // Format the amount for display
  const formattedAmount = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' })
    .format(parseFloat(paymentDetails.amount.replace(/[^\d]/g, '')));

  // Initialize the payment brick when preferenceId is available and showPaymentProcessor is true
  useEffect(() => {
    if (preferenceId && showPaymentProcessor) {
      const renderPaymentBrick = async () => {
        try {
          // Make sure the container exists
          const paymentBrickContainer = document.getElementById("payment-brick-container");
          if (!paymentBrickContainer) {
            console.error("Payment brick container not found");
            return;
          }

          // If SDK is not already initialized, try to load it directly
          if (!window.mercadopago) {
            console.log("Attempting to load Mercado Pago SDK directly before rendering brick");
            const script = document.createElement('script');
            script.src = 'https://sdk.mercadopago.com/js/v2';
            
            // Wait for script to load before continuing
            await new Promise((resolve, reject) => {
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            });
            
            console.log("Mercado Pago SDK loaded just-in-time");
            // Small delay to ensure SDK is initialized
            await new Promise(resolve => setTimeout(resolve, 1000));
          }

          // Double check if SDK is available now
          if (!window.mercadopago) {
            console.error("Mercado Pago SDK could not be loaded");
            alert("Error loading payment processor. Please refresh and try again.");
            return;
          }

          console.log("Creating payment settings with preference ID:", preferenceId);
          
          // Create the settings object for the brick
          const settings: MercadoPagoSettings = {
            initialization: {
              preferenceId: preferenceId,
            },
            callbacks: {
              onError: (error: { message: string }) => {
                console.error("Payment error:", error);
                alert("Hubo un error al procesar tu pago. Por favor intenta nuevamente.");
              },
              onReady: () => {
                console.log("Payment brick ready");
              },
              onSubmit: () => {
                // This is called when the user submits the payment
                return new Promise<void>((resolve) => {
                  setTimeout(() => {
                    // Simulate navigation to success page after payment processing
                    navigate("/payment-success");
                    resolve();
                  }, 1000);
                });
              },
            },
            customization: {
              visual: {
                hideValueProp: true,
              },
              paymentMethods: {
                creditCard: "all",
                debitCard: "all",
                bankTransfer: "all", // For PSE
                maxInstallments: 1
              },
            },
          };

          console.log("Creating bricks builder");
          const bricksBuilder = await window.mercadopago.bricks();
          
          console.log("Creating payment brick");
          const paymentBrickController = await bricksBuilder.create(
            "payment",
            "payment-brick-container",
            settings
          );

          console.log("Payment brick controller created successfully");
          // Store the controller in window for global access if needed
          window.paymentBrickController = paymentBrickController;
        } catch (error) {
          console.error("Error rendering payment brick:", error);
          alert("Error loading payment processor. Please refresh and try again.");
        }
      };

      console.log("Starting payment brick rendering process");
      // Use a slightly longer delay to ensure SDK is fully loaded
      setTimeout(() => {
        renderPaymentBrick();
      }, 1500);
    }
  }, [preferenceId, showPaymentProcessor, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#004aad] py-10 px-4">
      <div className="container mx-auto max-w-lg">
        {!showPaymentProcessor ? (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#003366] to-[#004aad] p-6 text-center">
              <button 
                className="absolute top-6 left-6 text-white"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <img 
                src="/images/Logo.jpg" 
                alt="PagoMío" 
                className="h-10 mx-auto mb-3 filter drop-shadow-md"
              />
              <p className="text-white/80 text-sm flex items-center justify-center">
                <Shield className="h-4 w-4 mr-2" />
                Pagos protegidos con tecnología segura
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="flex flex-col items-center justify-center gap-1">
                  <img src="/images/Payment.jpg" alt="PagoMío" className="h-8 mb-2" />
                  <p className="text-[#004aad] font-semibold text-lg">
                    Total a pagar:
                  </p>
                  <p className="text-[#004aad] font-bold text-2xl">
                    {formattedAmount}
                  </p>
                  {paymentDetails.company && (
                    <p className="text-gray-600 text-sm mt-1">
                      Pago a: {paymentDetails.company}
                    </p>
                  )}
                  {paymentDetails.billNumber && (
                    <p className="text-gray-600 text-sm">
                      Referencia: {paymentDetails.billNumber}
                    </p>
                  )}
                </div>
              </div>
              
              <h2 className="text-center text-gray-800 text-xl font-medium mb-5">
                Elige tu método de pago
              </h2>
              
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div 
                    key={method.id}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                      ${selectedPaymentMethod === method.id 
                        ? 'border-[#004aad] bg-blue-50' 
                        : 'border-gray-200 hover:border-[#004aad] hover:bg-blue-50'
                      }`}
                  >
                    <img 
                      src={method.icon} 
                      alt={method.name} 
                      className="w-8 h-8 object-contain mr-4"
                    />
                    <span className="text-gray-800 font-medium flex-1">{method.name}</span>
                    {selectedPaymentMethod === method.id && (
                      <ChevronRight className="h-5 w-5 text-[#004aad]" />
                    )}
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full mt-6 bg-[#004aad] hover:bg-[#003688] text-white py-6 rounded-xl text-lg"
                onClick={handleCheckout}
                disabled={!selectedPaymentMethod || isLoadingPreference}
              >
                {isLoadingPreference ? "Procesando..." : "Continuar al Pago"}
              </Button>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Tus datos están protegidos con cifrado SSL</span>
                </div>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span>Con tecnología</span>
                  <img 
                    src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" 
                    alt="Visa" 
                    className="h-6" 
                  />
                  <img 
                    src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" 
                    alt="Mastercard" 
                    className="h-6" 
                  />
                  <img 
                    src="/assets/images/payment-partners/mercadopago.svg" 
                    alt="Mercado Pago" 
                    className="h-6" 
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#003366] to-[#004aad] p-6 text-center">
              <button 
                className="absolute top-6 left-6 text-white"
                onClick={() => setShowPaymentProcessor(false)}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <img 
                src="/images/Logo.jpg" 
                alt="PagoMío" 
                className="h-10 mx-auto mb-3 filter drop-shadow-md"
              />
              <p className="text-white/80 text-sm flex items-center justify-center">
                <Shield className="h-4 w-4 mr-2" />
                Procesando tu pago de forma segura
              </p>
            </div>
            
            <div className="p-6">
              {preferenceId && (
                <div id="payment-brick-container" className="min-h-[400px]"></div>
              )}
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Pago protegido por Mercado Pago</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;