import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, CreditCard, ShieldCheck, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type PaymentDetails = {
  company: string;
  billNumber: string;
  amount: string;
};

export default function PaymentConfirmation({
  details,
  onBack,
}: {
  details: PaymentDetails;
  onBack: () => void;
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  
  // Format amount for display
  const displayAmount = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(Number(details.amount.replace(/[,.]/g, "")));
  
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    setIsProcessing(true);
    
    // Simulate a brief loading process before redirecting to Mercado Pago payment page
    const interval = setInterval(() => {
      setProgressValue(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // After a short delay, redirect to Mercado Pago external URL
          setTimeout(() => {
            window.location.href = "https://link.mercadopago.com.co/superservicio";
          }, 3000); // 3 seconds delay to show the message
          
          return 100;
        }
        return prev + 5; // Slow down progress to give time to read the message
      });
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#004E89]/10 to-white p-4">
      {!isProcessing ? (
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg border-t-4 border-t-[#FF6B35]">
            <CardContent className="pt-6 space-y-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <CreditCard className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Confirma tu pago
                </h2>
                <p className="text-gray-500 mt-1">
                  Verifica los detalles de tu pago antes de continuar
                </p>
              </div>

              <div className="space-y-4 border-t border-b py-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Empresa:</span>
                  <span className="font-medium">{details.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Número de referencia:</span>
                  <span className="font-medium">{details.billNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Valor a pagar:</span>
                  <span className="font-bold text-lg text-[#FF6B35]">{displayAmount}</span>
                </div>
              </div>

              <div className="bg-[#FFC14D]/10 border border-[#FFC14D]/30 rounded-md p-4">
                <div className="flex">
                  <ShieldCheck className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm text-gray-700">
                    <strong>Garantía de seguridad:</strong> Tu pago está protegido con encriptación de nivel bancario. Nunca almacenamos tus datos de tarjeta.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FFC14D] hover:from-[#E85826] hover:to-[#FFB52E] text-white font-medium py-6"
                onClick={handleProceedToPayment}
              >
                Proceder al pago
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={onBack}
              >
                <ArrowLeft size={16} className="mr-2" />
                Volver al formulario
              </Button>
            </CardFooter>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <img src="/assets/images/logos/payment-partners.svg" alt="Medios de pago" className="h-8" />
          </div>
        </motion.div>
      ) : !isSuccess ? (
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-lg">
            <CardContent className="pt-8 flex flex-col items-center justify-center space-y-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Redirigiendo a Mercado Pago
                </h2>
                <p className="text-gray-500 mt-1">
                  No olvides colocar el mismo monto de tu factura para efectuar tu pago con éxito
                </p>
                <p className="text-sm text-blue-600 mt-2 font-medium">
                  Si tienes Nequi, Daviplata u otro banco, selecciona PSE
                </p>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FFC14D] h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progressValue}%` }}
                ></div>
              </div>
              
              <div className="bg-[#009ee3]/10 border border-[#009ee3]/30 rounded-md p-4 mt-2">
                <div className="flex">
                  <img 
                    src="/images/payment-logos/mercado-pago-logo.svg" 
                    alt="Mercado Pago" 
                    className="h-5 flex-shrink-0 mt-0.5 mr-3" 
                  />
                  <p className="text-sm text-gray-700">
                    <strong>Nuestro aliado de pagos:</strong> Estás siendo redirigido a Mercado Pago, nuestra plataforma segura de pagos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg border-t-4 border-t-green-500">
            <CardContent className="pt-8 flex flex-col items-center justify-center space-y-6">
              <motion.div 
                className="text-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  ¡Pago Exitoso!
                </h2>
                <p className="text-gray-500 mt-1">
                  Tu pago ha sido procesado correctamente
                </p>
              </motion.div>
              
              <div className="w-full bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Referencia de pago:</span>
                  <span className="font-medium">PAGMIO-{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fecha:</span>
                  <span className="font-medium">{new Date().toLocaleDateString('es-CO')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado:</span>
                  <span className="font-medium text-green-600">Aprobado</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4 w-full">
                <p className="text-sm text-center text-gray-500 max-w-xs">
                  Hemos enviado un comprobante de tu pago a tu correo electrónico
                </p>
                <img 
                  src="/assets/images/people/happy-customer-1.svg" 
                  alt="Cliente feliz" 
                  className="h-24 my-2"
                />
                <Button
                  className="w-full bg-[#004E89] hover:bg-[#003b66] text-white"
                  onClick={onBack}
                >
                  Volver al inicio
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
