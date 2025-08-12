import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function AboutUs() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - PagoMío</title>
        <meta name="description" content="Conoce más sobre PagoMío, tu plataforma confiable para pagos de servicios en Colombia" />
      </Helmet>
      
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="container mx-auto py-4 px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/assets/images/logos/pagomiologo.png" 
              alt="PagoMío Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/200x80?text=PagoMío";
              }}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-slate-700 hover:text-blue-600 transition-colors">Inicio</Link>
            <Link to="/about-us" className="text-blue-600 font-medium">Sobre Nosotros</Link>
            <Link to="/careers" className="text-slate-700 hover:text-blue-600 transition-colors">Trabaja con Nosotros</Link>
            <Link to="/blog" className="text-slate-700 hover:text-blue-600 transition-colors">Blog</Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/">Realizar Pago</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menú</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4 md:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simplificando los pagos en Colombia
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            En PagoMío, creemos que pagar tus servicios debe ser fácil, rápido y seguro. Nuestra misión es simplificar tu vida financiera.
          </motion.p>
        </section>
      </div>

      {/* Our Story */}
      <section className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Nuestra Historia
          </motion.h2>
          
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-semibold">2018</span>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Los inicios</h3>
                <p className="text-slate-600">
                  PagoMío nace como una idea para solucionar los problemas de pagos que enfrentaban los colombianos. Con un equipo de tres emprendedores, comenzamos a construir la visión de una plataforma que pudiera integrar múltiples servicios.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-semibold">2020</span>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Expansión nacional</h3>
                <p className="text-slate-600">
                  Tras dos años de desarrollo intenso y pruebas, lanzamos oficialmente la plataforma con conexión a los principales proveedores de servicios en Colombia. La aceptación fue inmediata y comenzamos a crecer rápidamente.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-semibold">2022</span>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Innovación continua</h3>
                <p className="text-slate-600">
                  Implementamos nuevas tecnologías para mejorar la seguridad y experiencia de usuario. Nuestra plataforma ahora procesa millones de transacciones mensualmente, convirtiéndonos en un referente en el sector fintech colombiano.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-semibold">Hoy</span>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Liderando el mercado</h3>
                <p className="text-slate-600">
                  Actualmente, PagoMío es reconocida como la plataforma líder en Colombia para el pago de servicios. Seguimos innovando y expandiendo nuestras ofertas para brindar cada día un mejor servicio a los colombianos.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/assets/images/logos/pagomiologo.png" 
                alt="PagoMío Logo" 
                className="h-8 w-auto mb-4"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/200x80?text=PagoMío";
                }}
              />
              <p className="mb-4">Simplificando los pagos de servicios en Colombia</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link to="/about-us" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Trabaja con Nosotros</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} PagoMío. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}