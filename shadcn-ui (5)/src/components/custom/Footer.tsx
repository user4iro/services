import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Shield, CreditCard } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/assets/images/logos/pagomiologo.png" 
                alt="PagoMío" 
                className="h-10"
              />
            </Link>
            <p className="text-gray-600 mb-6">
              La forma más rápida y segura de pagar tus facturas de servicios en Colombia.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#FF6B35] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#FF6B35] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@pagomio.co" className="text-gray-500 hover:text-[#FF6B35] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Pago de Facturas</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Recargas Móviles</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Consulta de Saldos</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Programación de Pagos</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Pagos Recurrentes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Trabaja con Nosotros</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-[#FF6B35] transition-colors">Política de Privacidad</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">018000 112115</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">soporte@pagomio.co</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Calle 100 #15-09, Edificio Torre Empresarial, Bogotá, Colombia
                </span>
              </li>
            </ul>
            
            <div className="mt-6 flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600">Sitio 100% Seguro</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © {currentYear} PagoMío. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500 text-sm mr-4">
                Medios de pago aceptados:
              </p>
              <div className="flex">
                <CreditCard className="h-6 w-6 text-gray-400 mr-1" />
                <img src="/assets/images/logos/payment-partners.svg" alt="Medios de pago" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#004E89] py-3">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-center text-sm">
            PagoMío es un facilitador de pagos y no está afiliado directamente a ninguna de las empresas mencionadas.
          </p>
        </div>
      </div>
    </footer>
  );
}