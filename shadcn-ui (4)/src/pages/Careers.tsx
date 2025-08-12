import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Desarrollador Frontend Senior",
      department: "Tecnología",
      location: "Bogotá (Híbrido)",
      description: "Buscamos un desarrollador frontend experimentado con conocimientos sólidos en React, TypeScript y experiencia en el desarrollo de aplicaciones web modernas y responsivas."
    },
    {
      title: "Especialista en Ciberseguridad",
      department: "Tecnología",
      location: "Remoto",
      description: "Se busca profesional en seguridad informática con experiencia en protección de aplicaciones financieras, detección de fraudes y configuración de sistemas de seguridad."
    },
    {
      title: "Gerente de Atención al Cliente",
      department: "Operaciones",
      location: "Medellín",
      description: "Responsable de liderar el equipo de soporte técnico y atención al cliente, asegurando altos niveles de satisfacción y resolución efectiva de problemas."
    },
    {
      title: "Analista de Datos",
      department: "Business Intelligence",
      location: "Bogotá / Remoto",
      description: "Profesional con experiencia en análisis de datos y creación de dashboards, capaz de extraer insights valiosos para la toma de decisiones estratégicas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trabaja con Nosotros - PagoMío</title>
        <meta name="description" content="Únete a nuestro equipo en PagoMío y forma parte de la revolución fintech en Colombia" />
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
            <Link to="/careers" className="text-blue-600 font-medium">Trabaja con Nosotros</Link>
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
            Construye el futuro con nosotros
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            En PagoMío estamos buscando talento apasionado para transformar la forma en que los colombianos realizan sus pagos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <a href="#openings">Ver vacantes disponibles</a>
            </Button>
          </motion.div>
        </section>
      </div>

      {/* Why Work With Us */}
      <section className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Por qué trabajar en PagoMío?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Innovación constante",
              description: "Trabaja con tecnologías de punta y participa en proyectos que están transformando el sector financiero en Colombia.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              )
            },
            {
              title: "Desarrollo profesional",
              description: "Planes de carrera personalizados, mentorías y capacitaciones continuas para impulsar tu crecimiento.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.63 48.63 0 0 1 12 20.904a48.63 48.63 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              )
            },
            {
              title: "Ambiente inclusivo",
              description: "Valoramos la diversidad y creamos un entorno donde cada persona puede ser auténtica y sentirse respetada.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              )
            },
            {
              title: "Impacto real",
              description: "Tu trabajo mejora la vida de millones de colombianos, facilitando su acceso a servicios esenciales.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              )
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-600 flex-grow">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Conoce a nuestro equipo
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Trabajar en PagoMío me ha permitido crecer tanto profesional como personalmente. El ambiente colaborativo y los desafíos constantes hacen que cada día sea una oportunidad de aprendizaje.",
                name: "Carolina Ramírez",
                position: "Product Manager",
                image: "https://placehold.co/100x100?text=CR"
              },
              {
                quote: "Lo que más valoro es la cultura de innovación. Aquí realmente se nos anima a proponer ideas y probar nuevas soluciones, con un enfoque en mejorar la experiencia del usuario.",
                name: "Juan Diego Mejía",
                position: "Senior Developer",
                image: "https://placehold.co/100x100?text=JD"
              },
              {
                quote: "La flexibilidad y el balance entre vida personal y trabajo es excepcional. La empresa realmente se preocupa por nuestro bienestar y eso se refleja en un equipo motivado y comprometido.",
                name: "Valentina Torres",
                position: "Customer Success",
                image: "https://placehold.co/100x100?text=VT"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-slate-600 mb-4 italic">"{testimonial.quote}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-slate-500">{testimonial.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="container mx-auto py-16 px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Vacantes disponibles
        </motion.h2>
        <motion.p 
          className="text-center text-slate-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Únete a nuestro equipo y ayúdanos a transformar la manera en que los colombianos pagan sus servicios
        </motion.p>

        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="hover:bg-slate-50 rounded-lg px-4 py-2">
                    <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center text-left gap-2">
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">{job.department}</span>
                        <span className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">{job.location}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="pt-2 pb-4">
                      <p className="text-slate-600 mb-4">{job.description}</p>
                      <div className="mt-4">
                        <Button>Aplicar ahora</Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Proceso de selección
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Aplicación",
                description: "Envía tu CV y completa un breve formulario para que podamos conocerte mejor."
              },
              {
                step: 2,
                title: "Entrevista inicial",
                description: "Conversaremos contigo para entender tu experiencia, expectativas y responder tus dudas."
              },
              {
                step: 3,
                title: "Evaluación técnica",
                description: "Dependiendo del rol, podrás participar en pruebas prácticas o casos de estudio."
              },
              {
                step: 4,
                title: "Entrevista final",
                description: "Conocerás a tu futuro equipo y conversarás sobre aspectos más específicos del rol."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center mb-4">
                  <div className="bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-slate-600 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ¿No encuentras el rol adecuado para ti?
          </motion.h2>
          <motion.p 
            className="text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Siempre estamos buscando talento excepcional. Envíanos tu CV y te contactaremos cuando tengamos una oportunidad que se adapte a tu perfil.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:careers@pagomio.co">Envía tu CV</a>
            </Button>
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