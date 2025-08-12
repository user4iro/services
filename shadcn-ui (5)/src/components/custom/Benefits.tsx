import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, CreditCard, Heart, Smartphone, Gift, XCircle, CheckCircle, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-[#FF6B35]" />,
      title: "Rápido y sencillo",
      description: "Paga tus facturas en menos de 1 minuto sin complicaciones ni registros extensos."
    },
    {
      icon: <Shield className="w-10 h-10 text-[#FF6B35]" />,
      title: "100% seguro",
      description: "Utilizamos tecnología de encriptación bancaria para proteger tus datos y transacciones."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-[#FF6B35]" />,
      title: "Múltiples medios de pago",
      description: "Tarjetas de crédito, débito, PSE, Nequi, transferencias y más opciones disponibles."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#FF6B35]" />,
      title: "Desde cualquier dispositivo",
      description: "Paga tus facturas desde tu celular, tablet o computadora, a cualquier hora y en cualquier lugar."
    },
    {
      icon: <Heart className="w-10 h-10 text-[#FF6B35]" />,
      title: "Servicio al cliente",
      description: "Contamos con un equipo de soporte listo para ayudarte en cada paso del proceso."
    },
    {
      icon: <Gift className="w-10 h-10 text-[#FF6B35]" />,
      title: "Programa de beneficios",
      description: "Acumula puntos por tus pagos y canjéalos por premios y descuentos exclusivos."
    },
  ];

  // Animation state for bill payment
  const [animationState, setAnimationState] = useState("unpaid");

  // Animation cycle
  useEffect(() => {
    const animationCycle = () => {
      // Start with unpaid bill
      setAnimationState("unpaid");
      
      // After delay, show the bill with X (unpaid)
      const timer1 = setTimeout(() => {
        setAnimationState("showingUnpaid");
      }, 1000);
      
      // Then show animation of payment being processed
      const timer2 = setTimeout(() => {
        setAnimationState("processing");
      }, 3000);
      
      // Finally show paid bill with checkmark
      const timer3 = setTimeout(() => {
        setAnimationState("paid");
      }, 4500);
      
      // Reset animation cycle
      const timer4 = setTimeout(() => {
        animationCycle();
      }, 7000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    };
    
    animationCycle();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="bg-[#FF6B35]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 bg-gradient-to-r from-[#004E89] to-[#003366] rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¡Dile adiós a las filas y los desplazamientos!</h3>
            <p className="text-blue-100 mb-6">
              Con PagoMío ahorras tiempo y dinero. Paga todas tus facturas desde la comodidad de tu hogar u oficina.
            </p>
            
            {/* Bill payment animation */}
            <div className="flex justify-center mb-6 h-40 relative">
              <div className="relative w-32 h-40">
                {/* Base bill that stays in place */}
                <motion.div 
                  className="absolute inset-0 bg-white rounded-lg shadow-lg p-3 flex flex-col"
                  style={{ zIndex: 1 }}
                >
                  <div className="border-b border-gray-200 pb-2 mb-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Animated status icons */}
                <AnimatePresence>
                  {animationState === "showingUnpaid" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ zIndex: 2 }}
                    >
                      <XCircle size={50} className="text-red-500" />
                    </motion.div>
                  )}
                  
                  {animationState === "processing" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ zIndex: 2 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                      </motion.div>
                    </motion.div>
                  )}
                  
                  {animationState === "paid" && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ zIndex: 2 }}
                    >
                      <CheckCircle size={50} className="text-green-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="flex items-center">
              <img src="/assets/images/people/happy-customer-2.svg" alt="Cliente feliz" className="h-20 mr-6" />
              <div>
                <p className="text-white font-medium">María Rodríguez</p>
                <p className="text-blue-200 text-sm">Ahorra 4 horas semanales</p>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-8 bg-[#003366]">
            <div className="max-w-xs">
              <div className="mb-4 text-center">
                <div className="inline-block bg-green-500 text-white text-xs py-1 px-3 rounded-full">
                  AHORRA HASTA
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">15<span className="text-yellow-400">%</span></div>
                <p className="text-blue-200 mb-4">en el valor de tus facturas al pagarlas a tiempo</p>
                <button className="bg-[#FF6B35] hover:bg-[#E85826] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Comenzar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}