import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

export default function Blog() {
  const blogPosts = [
    {
      title: "Cómo optimizar tus pagos de servicios mensuales",
      category: "Finanzas Personales",
      excerpt: "Descubre estrategias efectivas para gestionar tus pagos de servicios públicos y ahorrar dinero mientras mantienes tus cuentas al día.",
      author: "María Fernanda López",
      date: "10 agosto, 2025",
      image: "https://placehold.co/800x500?text=Pagos+Mensuales"
    },
    {
      title: "La transformación digital de los pagos en Colombia",
      category: "Tecnología",
      excerpt: "Un análisis profundo sobre cómo la tecnología está cambiando la forma en que los colombianos realizan sus transacciones financieras.",
      author: "Carlos Andrés Gutiérrez",
      date: "2 agosto, 2025",
      image: "https://placehold.co/800x500?text=Transformación+Digital"
    },
    {
      title: "¿Cómo proteger tus pagos en línea contra fraudes?",
      category: "Seguridad",
      excerpt: "Consejos y buenas prácticas para realizar pagos seguros en línea y protegerte contra estafas y fraudes electrónicos.",
      author: "Juliana Restrepo",
      date: "29 julio, 2025",
      image: "https://placehold.co/800x500?text=Seguridad"
    },
    {
      title: "El futuro de los pagos: tendencias emergentes",
      category: "Innovación",
      excerpt: "Exploramos las nuevas tecnologías que están moldeando el futuro de los pagos digitales en Latinoamérica y el mundo.",
      author: "Andrés Felipe Mora",
      date: "20 julio, 2025",
      image: "https://placehold.co/800x500?text=Tendencias"
    },
    {
      title: "Pagos inteligentes: cómo la IA está cambiando la industria",
      category: "Tecnología",
      excerpt: "Un análisis sobre el impacto de la inteligencia artificial en los sistemas de pago y cómo está mejorando la experiencia del usuario.",
      author: "Valentina Ochoa",
      date: "12 julio, 2025",
      image: "https://placehold.co/800x500?text=IA"
    },
    {
      title: "Claves para entender los recibos de servicios públicos",
      category: "Educación Financiera",
      excerpt: "Una guía detallada para comprender cada sección de tus facturas y entender por qué pagas lo que pagas.",
      author: "Daniel Ramírez",
      date: "5 julio, 2025",
      image: "https://placehold.co/800x500?text=Recibos"
    }
  ];

  const categories = ["Todos", "Finanzas Personales", "Tecnología", "Seguridad", "Innovación", "Educación Financiera"];

  return (
    <>
      <Helmet>
        <title>Blog - PagoMío</title>
        <meta name="description" content="Artículos, guías y consejos sobre pagos, finanzas personales y tecnología financiera" />
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
            <Link to="/about-us" className="text-slate-700 hover:text-blue-600 transition-colors">Sobre Nosotros</Link>
            <Link to="/careers" className="text-slate-700 hover:text-blue-600 transition-colors">Trabaja con Nosotros</Link>
            <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
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
        <section className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog PagoMío
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Artículos, guías y consejos sobre pagos, finanzas personales y tecnología financiera
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="relative flex-grow">
                <Input 
                  type="text" 
                  placeholder="Buscar artículos..." 
                  className="pr-10"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
              <Button>Buscar</Button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Categories */}
      <section className="container mx-auto py-8 px-4 md:px-6 lg:px-8 border-b">
        <div className="flex overflow-x-auto pb-4 space-x-2 no-scrollbar">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium ${
                index === 0 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 md:order-1">
            <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Artículo destacado</span>
            <h2 className="text-3xl font-bold mt-4 mb-4">Cómo optimizar tus pagos de servicios mensuales</h2>
            <p className="text-slate-600 mb-4">Descubre estrategias efectivas para gestionar tus pagos de servicios públicos y ahorrar dinero mientras mantienes tus cuentas al día. En este artículo, exploramos las mejores prácticas y herramientas disponibles.</p>
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://placehold.co/100x100?text=ML" 
                alt="María Fernanda López" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">María Fernanda López</p>
                <p className="text-sm text-slate-500">10 agosto, 2025</p>
              </div>
            </div>
            <Button>Leer artículo</Button>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://placehold.co/800x500?text=Pagos+Mensuales" 
              alt="Cómo optimizar tus pagos de servicios mensuales" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Artículos recientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden flex flex-col">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">{post.category}</span>
                    <h3 className="font-bold text-xl mt-3 mb-2">{post.title}</h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-medium">
                      {post.author.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-slate-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline">Cargar más artículos</Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="max-w-xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Suscríbete a nuestro newsletter</h2>
            <p className="text-blue-100 mb-8">Recibe nuestros artículos más recientes y consejos directamente en tu bandeja de entrada.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-white flex-grow"
              />
              <Button variant="secondary">Suscribirse</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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