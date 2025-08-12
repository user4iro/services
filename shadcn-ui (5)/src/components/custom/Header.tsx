import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Facebook, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.97]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const headerClass = isScrolled 
    ? "bg-white/95 backdrop-blur-md shadow-md" 
    : "bg-transparent";
  
  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/images/logos/pagomiologo.png" 
              alt="PagoMío" 
              className="h-10 md:h-12"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-5 mr-4">
              <a href="https://www.facebook.com/pagomio.latam/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/pagomio/?hl=es" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:info@pagomio.co" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">Inicio</Link>
              <a href="#benefits" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">Beneficios</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">Testimonios</a>
              <a href="#partners" className="text-gray-700 hover:text-[#FF6B35] font-medium transition-colors">Aliados</a>
            </nav>
            <a href="#payment-form">
              <Button className="bg-[#FF6B35] hover:bg-[#E85826] text-white rounded-full">
                Pagar Ahora
              </Button>
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Background.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Paga tus facturas <br />
                <span className="text-[#FFC14D]">más fácil y seguro</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
                Con PagoMío, olvidate de las filas y paga todas tus facturas desde casa en tan solo segundos
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <a href="#payment-form">
                  <Button className="bg-[#FF6B35] hover:bg-[#E85826] text-white text-lg py-6 px-8 rounded-full">
                    ¡Pagar Ahora!
                  </Button>
                </a>
                <a href="#benefits">
                  <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white text-lg py-6 px-8 rounded-full">
                    Cómo Funciona
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: "1/1", maxHeight: "350px" }}>
                {/* White background square area */}
                <div className="absolute inset-0 bg-white rounded-3xl"></div>
                
                {/* Original Animation SVG with styling */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <img 
                    src="/assets/images/payment-animation.svg" 
                    alt="Proceso de pago" 
                    className="w-4/5 h-4/5 mx-auto object-contain"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                
                {/* Company Logos positioned inside the white area but not covering the smiley face */}
                <motion.div 
                  className="absolute top-5 right-8 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="bg-white p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <img src="/assets/images/company-logos-wikipedia/directv.svg" alt="DirecTV" className="w-8 h-8 object-contain" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-20 left-5 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="bg-white p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <img src="/assets/images/company-logos-wikipedia/gases-occidente.svg" alt="Gases de Occidente" className="w-8 h-8 object-contain" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-32 left-12 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="bg-white p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <img src="/assets/images/company-logos-wikipedia/celsia.svg" alt="Celsia" className="w-8 h-8 object-contain" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-40 right-10 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <div className="bg-white p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <img src="/assets/images/company-logos-wikipedia/tigo.svg" alt="Tigo" className="w-8 h-8 object-contain" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-32 right-8 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="bg-white p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <img src="/assets/images/company-logos-wikipedia/epm.svg" alt="EPM" className="w-8 h-8 object-contain" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 left-5 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <div className="bg-white p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <img src="/assets/images/company-logos-wikipedia/movistar.svg" alt="Movistar" className="w-8 h-8 object-contain" />
                  </div>
                </motion.div>

                {/* Base SVG with phone */}
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" className="w-full">
                  {/* Background removed */}
                  
                  {/* Phone */}
                  <rect x="125" y="60" width="150" height="280" rx="20" fill="#4a5568" />
                  <rect x="130" y="70" width="140" height="260" rx="15" fill="#ffffff" />
                  
                  {/* Screen Content */}
                  <rect x="140" y="90" width="120" height="20" rx="4" fill="#FF6B35" />
                  <rect x="140" y="120" width="80" height="10" rx="2" fill="#e2e8f0" />
                  <rect x="140" y="140" width="100" height="10" rx="2" fill="#e2e8f0" />
                  <rect x="140" y="160" width="90" height="10" rx="2" fill="#e2e8f0" />
                  <rect x="140" y="180" width="120" height="40" rx="6" fill="#FF6B35" />
                  
                  {/* Company Logos in Phone */}
                  <g>
                    {/* Logo 1: EPM */}
                    <circle cx="155" cy="135" r="12" fill="#00953b" />
                    <text x="155" y="138" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">EPM</text>
                    
                    {/* Logo 2: GasesOccidente */}
                    <circle cx="185" cy="135" r="12" fill="#0076ce" />
                    <text x="185" y="138" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">GAS</text>
                    
                    {/* Logo 3: Celsia */}
                    <circle cx="215" cy="135" r="12" fill="#ff7800" />
                    <text x="215" y="138" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">CEL</text>
                    
                    {/* Logo 4: Movistar */}
                    <circle cx="155" cy="165" r="12" fill="#019df4" />
                    <text x="155" y="168" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">MOV</text>
                    
                    {/* Logo 5: Tigo */}
                    <circle cx="185" cy="165" r="12" fill="#003da6" />
                    <text x="185" y="168" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">TIGO</text>
                    
                    {/* Logo 6: DirecTV */}
                    <circle cx="215" cy="165" r="12" fill="#0076ce" />
                    <text x="215" y="168" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">DIRECTV</text>
                  </g>
                  
                  {/* Credit Card */}
                  <g>
                    <rect x="150" y="230" width="100" height="60" rx="8" fill="#3182ce" />
                    <rect x="160" y="240" width="40" height="5" rx="2" fill="#ffffff" opacity="0.8" />
                    <rect x="160" y="270" width="60" height="5" rx="2" fill="#ffffff" opacity="0.8" />
                  </g>
                  
                  {/* Receipt */}
                  <g>
                    <rect x="280" y="120" width="70" height="100" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                    <line x1="290" y1="140" x2="340" y2="140" stroke="#e2e8f0" strokeWidth="2" />
                    <line x1="290" y1="160" x2="340" y2="160" stroke="#e2e8f0" strokeWidth="2" />
                    <line x1="290" y1="180" x2="340" y2="180" stroke="#e2e8f0" strokeWidth="2" />
                    <line x1="290" y1="200" x2="330" y2="200" stroke="#FF6B35" strokeWidth="2" />
                  </g>
                  
                  {/* Coins */}
                  <g transform="translate(80, 200)">
                    <circle cx="0" cy="0" r="20" fill="#FFD700" />
                    <circle cx="0" cy="0" r="15" fill="#FFC700" />
                    <path d="M-5,-10 L5,-10 L5,10 L-5,10 Z" fill="#FFD700" />
                  </g>
                  
                  {/* Happy Person */}
                  <g transform="translate(320, 280)">
                    <circle cx="0" cy="0" r="40" fill="#FF6B35" />
                    <circle cx="-15" cy="-10" r="5" fill="#ffffff" />
                    <circle cx="15" cy="-10" r="5" fill="#ffffff" />
                    <path d="M-20,15 Q0,35 20,15" stroke="#ffffff" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                  </g>
                  
                  {/* Success Checkmark */}
                  <g transform="translate(200, 280)">
                    <circle cx="0" cy="0" r="30" fill="#48BB78" />
                    <path d="M-15,0 L-5,10 L15,-10" stroke="#ffffff" strokeWidth="6" fill="transparent" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-white z-50 lg:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} className="text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6 -mt-20">
            <Link 
              to="/" 
              className="text-2xl font-medium text-gray-800 hover:text-[#FF6B35]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <a 
              href="#benefits" 
              className="text-2xl font-medium text-gray-800 hover:text-[#FF6B35]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#testimonials" 
              className="text-2xl font-medium text-gray-800 hover:text-[#FF6B35]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#partners" 
              className="text-2xl font-medium text-gray-800 hover:text-[#FF6B35]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aliados
            </a>
            <div className="pt-6">
              <a 
                href="#payment-form"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="bg-[#FF6B35] hover:bg-[#E85826] text-white rounded-full px-8 py-6">
                  Pagar Ahora
                </Button>
              </a>
            </div>
            <div className="flex space-x-6 mt-10">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B35]">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B35]">
                <Instagram size={24} />
              </a>
              <a href="mailto:info@pagomio.co" className="text-gray-600 hover:text-[#FF6B35]">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
