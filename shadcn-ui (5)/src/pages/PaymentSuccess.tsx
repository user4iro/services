import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Share2 } from "lucide-react";

const PaymentSuccess = () => {
  const [transactionId, setTransactionId] = useState<string>("");
  const location = useLocation();
  
  useEffect(() => {
    // Extract payment details from URL query parameters (Mercado Pago returns these)
    const params = new URLSearchParams(location.search);
    const paymentId = params.get("payment_id") || "";
    const status = params.get("status") || "";
    const merchantOrderId = params.get("merchant_order_id") || "";
    const externalReference = params.get("external_reference") || "";
    
    // Set a transaction ID based on Mercado Pago response or generate one
    setTransactionId(paymentId || `MP-${Math.floor(Math.random() * 1000000)}`);
    
    // In a real app, you would validate this payment with your backend
    console.log("Payment successful:", { paymentId, status, merchantOrderId, externalReference });
    
    // Analytics, clear cart, etc. could be done here
  }, [location]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'PagoMío - Pago Exitoso',
        text: `Mi pago con PagoMío fue exitoso. Número de transacción: ${transactionId}`,
        url: window.location.href,
      });
    } else {
      alert('Tu navegador no soporta la función de compartir');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#004aad] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-md w-full">
        <div className="bg-gradient-to-r from-[#003366] to-[#004aad] p-6 text-center">
          <img 
            src="/assets/images/logos/pagomio-logo-white.svg" 
            alt="PagoMío" 
            className="h-10 mx-auto mb-3 filter drop-shadow-md"
          />
        </div>
        
        <div className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 className="h-20 w-20 text-green-500" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Pago exitoso!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Tu transacción ha sido procesada correctamente por <strong>Mercado Pago</strong>. 
            Recibirás un correo electrónico con los detalles de tu pago.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <img 
              src="/assets/images/payment-partners/mercadopago.svg" 
              alt="Mercado Pago" 
              className="h-8 mx-auto mb-2"
            />
            <p className="text-[#004aad] font-medium">
              Número de Transacción:
              <span className="block font-bold mt-1">{transactionId}</span>
            </p>
            <div className="mt-3 flex justify-center gap-3">
              <button 
                onClick={() => window.print()} 
                className="flex items-center text-sm text-[#004aad]"
              >
                <Download className="h-4 w-4 mr-1" />
                Guardar
              </button>
              <button 
                onClick={handleShare} 
                className="flex items-center text-sm text-[#004aad]"
              >
                <Share2 className="h-4 w-4 mr-1" />
                Compartir
              </button>
            </div>
          </div>
          
          <Button asChild className="bg-[#004aad] hover:bg-[#003688] text-white w-full py-6">
            <Link to="/">
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;