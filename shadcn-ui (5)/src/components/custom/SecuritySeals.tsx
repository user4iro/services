import { motion } from "framer-motion";
import { ShieldCheck, Lock, CreditCard, CheckCircle, AlertTriangle, Eye } from "lucide-react";

export default function SecuritySeals() {
  const securityFeatures = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#004E89]" />,
      title: "Certificados de Seguridad",
      description: "Contamos con certificaciones SSL de 256 bits para proteger toda tu información."
    },
    {
      icon: <Lock className="w-8 h-8 text-[#004E89]" />,
      title: "Encriptación Bancaria",
      description: "Utilizamos los mismos estándares de seguridad que los bancos internacionales."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#004E89]" />,
      title: "Protección de Datos",
      description: "No almacenamos datos sensibles de tus tarjetas ni información financiera."
    },
    {
      icon: <Eye className="w-8 h-8 text-[#004E89]" />,
      title: "Monitoreo 24/7",
      description: "Nuestro sistema detecta y previene actividades sospechosas en tiempo real."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex"
          >
            <div className="bg-[#004E89]/10 p-3 rounded-full h-fit mr-4">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden"
      >
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">¿Cómo garantizamos la seguridad de tus pagos?</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-gray-700">
                    <span className="font-medium">Verificación en dos pasos</span> para todas las transacciones que realizas
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-gray-700">
                    <span className="font-medium">Notificaciones instantáneas</span> de cada movimiento en tu cuenta
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-gray-700">
                    <span className="font-medium">Comprobantes electrónicos</span> enviados directamente a tu correo
                  </p>
                </li>
                <li className="flex">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-gray-700">
                    <span className="font-medium">Auditorías de seguridad</span> regulares de nuestros sistemas
                  </p>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                <div className="flex">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">Recuerda:</span> Nunca te pediremos contraseñas por correo electrónico o llamadas telefónicas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#FF6B35]/10 rounded-full animate-pulse"></div>
                <div className="relative bg-white p-4 rounded-xl border-2 border-[#004E89] shadow-lg">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <Lock className="w-5 h-5 text-[#004E89] mr-2" />
                      <span className="text-sm font-medium text-[#004E89]">Conexión Segura</span>
                    </div>
                    <div className="bg-green-100 px-2 py-0.5 rounded text-xs font-medium text-green-800">
                      Verificado
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Encriptación:</span>
                      <span className="text-xs font-medium">SSL/TLS 256-bit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Certificado:</span>
                      <span className="text-xs font-medium">Válido hasta 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Cumplimiento:</span>
                      <span className="text-xs font-medium">PCI DSS Nivel 1</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-100 p-2 rounded">
                      <img src="/assets/images/logos/payment-partners.svg" alt="Certificación de seguridad" className="h-6 mx-auto" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded col-span-2">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs font-medium text-gray-700">Pasarela certificada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#004E89] py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-white text-sm mb-3 sm:mb-0">
            Todos nuestros pagos están respaldados por la mejor tecnología en seguridad
          </p>
          <div className="flex space-x-4">
            <img src="/assets/images/logos/payment-partners.svg" alt="Certificados de seguridad" className="h-6" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}