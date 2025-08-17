import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, CreditCard, ShieldCheck, Clock, Lock } from "lucide-react";
import { useState, useEffect } from "react";
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
          
          // After a longer delay, redirect to Mercado Pago external URL
          setTimeout(() => {
            window.location.href = "https://link.mercadopago.com.co/superservicio";
          }, 1000); // 8 seconds delay to show the message
          
          return 100;
        }
        return prev + 2; // Slow down progress to give time to read the message
      });
    }, 150);
  };

  // Bank logo animation states
  const [currentBankIndex, setCurrentBankIndex] = useState(0);
  const banks = [
    { name: "Nequi", logo: "https://logosenvector.com/logo/img/nequi-37254.png" },
    { name: "Daviplata", logo: "https://logosenvector.com/logo/img/daviplata-37317.png" },
    { name: "Bancolombia", logo: "https://i.pinimg.com/originals/b8/cd/c1/b8cdc1ad498fe080bc21bb5a03c24f83.png" },
    { name: "PSE", logo: "https://www.cootransmede.com/wp-content/uploads/2022/02/logo-pse-300x300-1.png" },
  ];
  
  useEffect(() => {
    if (isProcessing) {
      const bankInterval = setInterval(() => {
        setCurrentBankIndex((prev) => (prev + 1) % banks.length);
      }, 1500);
      
      return () => clearInterval(bankInterval);
    }
  }, [isProcessing]);
  
  // Lock animation
  const [isLocked, setIsLocked] = useState(true);
  
  useEffect(() => {
    if (isProcessing) {
      const lockInterval = setInterval(() => {
        setIsLocked(prev => !prev);
      }, 2000);
      
      return () => clearInterval(lockInterval);
    }
  }, [isProcessing]);

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
            <img src="https://llanotourscolombia.com/wp-content/uploads/2021/12/logo-mercado-pago-png-7-1024x312-1.png" alt="Medios de pago" className="h-8" />
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
                  <motion.div
                    animate={{ 
                      rotateY: isLocked ? 0 : 180,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotateY: { duration: 0.5 },
                      scale: { duration: 0.5, repeat: Infinity, repeatType: "loop" }
                    }}
                    className="relative"
                  >
                    {isLocked ? (
                      <Lock className="w-8 h-8 text-blue-600" />
                    ) : (
                      <ShieldCheck className="w-8 h-8 text-green-600" />
                    )}
                  </motion.div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Redirigiendo a Mercado Pago
                </h2>
                <p className="text-gray-500 mt-1">
                  No olvides colocar el mismo monto de tu factura para efectuar tu pago con éxito
                </p>
                
                <div className="mt-4">
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    Si tienes Nequi, Daviplata u otro banco, selecciona PSE
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 my-2">
                    {banks.map((bank, index) => (
                      <motion.div 
                        key={bank.name}
                        animate={{ 
                          scale: currentBankIndex === index ? 1.1 : 0.9,
                          opacity: currentBankIndex === index ? 1 : 0.6,
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-8 w-12 flex items-center justify-center"
                      >
                        <img 
                          src={bank.logo} 
                          alt={bank.name} 
                          className="h-full object-contain" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FFC14D] h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progressValue}%` }}
                ></div>
              </div>
              
              <div className="bg-[#009ee3]/10 border border-[#009ee3]/30 rounded-md p-4 mt-2">
                <div className="flex">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0, -2, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex-shrink-0 mt-0.5 mr-3"
                  >
                    <img 
                      src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp" 
                      alt="Mercado Pago" 
                      className="h-5" 
                    />
                  </motion.div>
                  <p className="text-sm text-gray-700">
                    <strong>Nuestro aliado de pagos:</strong> Estás siendo redirigido a Mercado Pago, nuestra plataforma segura de pagos.
                  </p>
                </div>
              </div>
              
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="flex items-center gap-2 mt-2 text-green-600"
              >
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-medium">Conexión segura y encriptada</span>
              </motion.div>
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
                  src="https://cdn-icons-png.flaticon.com/512/1933/1933691.png" 
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
