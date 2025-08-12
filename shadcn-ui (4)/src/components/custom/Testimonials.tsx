import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Carlos Morales",
      location: "Bogotá",
      text: "PagoMío me ha simplificado la vida enormemente. Antes perdía horas haciendo fila para pagar mis facturas, ahora lo hago desde mi celular en menos de un minuto. ¡Un servicio excepcional!",
      rating: 5,
      image: "/assets/images/people/happy-customer-1.svg"
    },
    {
      id: 2,
      name: "Ana María Gómez",
      location: "Medellín",
      text: "La plataforma es súper intuitiva y fácil de usar. El proceso es rápido y siempre recibo la confirmación al instante. Lo recomiendo a todos mis amigos y familiares.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 3,
      name: "Javier López",
      location: "Cali",
      text: "Lo que más me gusta es la variedad de empresas que puedo pagar. Servicios públicos, telefonía, internet, todo en un mismo lugar. Además, el servicio al cliente es excelente.",
      rating: 4,
      image: "/assets/images/people/happy-customer-3.svg"
    },
    {
      id: 4,
      name: "Valentina Torres",
      location: "Barranquilla",
      text: "Después de probar varias aplicaciones similares, PagoMío es la que mejor funciona. Nunca he tenido problemas con los pagos y la interfaz es muy clara.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 5,
      name: "Diego Ramírez",
      location: "Cartagena",
      text: "Como empresario, valoro mucho poder gestionar todos los pagos de servicios desde un solo lugar. Me ahorra tiempo y me permite tener un mejor control de los gastos.",
      rating: 5,
      image: "/assets/images/people/happy-customer-1.svg"
    },
    {
      id: 6,
      name: "Marcela Duque",
      location: "Pereira",
      text: "Las notificaciones de vencimiento son muy útiles. Gracias a ellas nunca más he pagado recargos por mora. La aplicación es realmente completa.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 7,
      name: "Andrés Gutiérrez",
      location: "Manizales",
      text: "El soporte técnico responde muy rápido. Tuve un problema con un pago duplicado y lo solucionaron en menos de una hora. Excelente servicio al cliente.",
      rating: 4,
      image: "/assets/images/people/happy-customer-3.svg"
    },
    {
      id: 8,
      name: "Carolina Martínez",
      location: "Bucaramanga",
      text: "Me encanta la opción de programar pagos recurrentes. Configuro mis facturas mensuales y me olvido de ellas. PagoMío se encarga del resto.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 9,
      name: "Roberto Sánchez",
      location: "Villavicencio",
      text: "Llevo más de 2 años usando PagoMío y cada actualización trae mejoras útiles. Se nota que escuchan a sus usuarios y trabajan para mejorar constantemente.",
      rating: 5,
      image: "/assets/images/people/happy-customer-1.svg"
    },
    {
      id: 10,
      name: "Mariana Vélez",
      location: "Santa Marta",
      text: "La variedad de empresas disponibles es impresionante. No he encontrado ningún servicio que no pueda pagar a través de PagoMío.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 11,
      name: "Santiago Osorio",
      location: "Pasto",
      text: "La interfaz es muy intuitiva. Mi madre, que no es muy tecnológica, aprendió a usarla sin problemas. Eso dice mucho de lo bien diseñada que está.",
      rating: 4,
      image: "/assets/images/people/happy-customer-3.svg"
    },
    {
      id: 12,
      name: "Lucía Fernández",
      location: "Cúcuta",
      text: "Los comprobantes de pago son muy claros y los guardo fácilmente. Es mucho mejor que tener que buscar recibos físicos.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 13,
      name: "Gabriel Hoyos",
      location: "Armenia",
      text: "La seguridad de la plataforma es excelente. Me siento tranquilo al realizar pagos y sé que mis datos están protegidos.",
      rating: 5,
      image: "/assets/images/people/happy-customer-1.svg"
    },
    {
      id: 14,
      name: "Natalia Restrepo",
      location: "Tunja",
      text: "El historial de pagos me ayuda mucho a la hora de hacer mi declaración de renta. Todo queda perfectamente registrado y organizado.",
      rating: 4,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 15,
      name: "Felipe Mendoza",
      location: "Neiva",
      text: "Las promociones y descuentos exclusivos para usuarios son un plus. He ahorrado bastante aprovechando estas ofertas.",
      rating: 5,
      image: "/assets/images/people/happy-customer-3.svg"
    },
    {
      id: 16,
      name: "Laura Castillo",
      location: "Ibagué",
      text: "Desde que uso PagoMío, nunca más he olvidado pagar una factura. El sistema de recordatorios funciona perfectamente.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 17,
      name: "Alejandro Vargas",
      location: "Popayán",
      text: "Como extranjero viviendo en Colombia, esta aplicación me ha facilitado mucho la vida. Es muy fácil de entender y usar.",
      rating: 5,
      image: "/assets/images/people/happy-customer-1.svg"
    },
    {
      id: 18,
      name: "Daniela Ortiz",
      location: "Montería",
      text: "El proceso de registro fue muy rápido y en minutos ya estaba pagando mi primera factura. No podría ser más sencillo.",
      rating: 4,
      image: "/assets/images/people/happy-customer-2.svg"
    },
    {
      id: 19,
      name: "Ricardo Molina",
      location: "Sincelejo",
      text: "La aplicación es muy estable, nunca se cuelga ni presenta errores. Eso es fundamental cuando estás haciendo pagos en línea.",
      rating: 5,
      image: "/assets/images/people/happy-customer-3.svg"
    },
    {
      id: 20,
      name: "Paula Jaramillo",
      location: "Riohacha",
      text: "PagoMío ha sido un salvavidas durante la pandemia. Poder pagar todos mis servicios sin salir de casa es invaluable.",
      rating: 5,
      image: "/assets/images/people/happy-customer-2.svg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-16 -left-8 text-[180px] font-serif text-[#FF6B35]/5 pointer-events-none select-none">
        "
      </div>
      
      <div className="flex justify-center mb-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-4">
              <MessageCircle className="h-8 w-8 text-[#FF6B35]" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden" ref={testimonialRef}>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={prevTestimonial}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={nextTestimonial}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="aspect-square w-48 h-48 mx-auto bg-gradient-to-br from-[#FF6B35]/20 to-[#004E89]/20 rounded-full flex items-center justify-center">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="h-36"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white rounded-full shadow-lg p-2">
                    <div className="flex items-center justify-center">
                      {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - testimonials[activeIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4">
                  "{testimonials[activeIndex].text}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-800">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`mx-1 w-2.5 h-2.5 rounded-full transition-all ${
              idx === activeIndex ? "bg-[#FF6B35] w-8" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Más de <span className="font-semibold text-[#004E89]">18,000 reseñas</span> con un promedio de
          <span className="font-semibold text-[#004E89]"> 4.8 estrellas</span>
        </p>
      </div>
    </div>
  );
}