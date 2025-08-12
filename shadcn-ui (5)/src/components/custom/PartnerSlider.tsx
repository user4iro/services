import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Building, ChevronLeft, ChevronRight } from 'lucide-react';
import { companies } from './companies-data';

export default function PartnerSlider() {
  const [visibleCompanies, setVisibleCompanies] = useState<number[]>([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update displayCount based on screen width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount(2);
      } else if (window.innerWidth < 768) {
        setDisplayCount(3);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(4);
      } else {
        setDisplayCount(5);
      }
    };

    // Initial setup
    handleResize();
    
    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Update visible companies when display count or current index changes
    const visibleIndices: number[] = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % companies.length;
      visibleIndices.push(index);
    }
    setVisibleCompanies(visibleIndices);
  }, [currentIndex, displayCount]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
  };

  // Auto scroll partners
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Group companies by category for the accordion
  const companiesByCategory = companies.reduce((acc, company) => {
    const category = company.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(company);
    return acc;
  }, {} as Record<string, typeof companies>);

  const categoryOrder = [
    "Servicios Públicos",
    "Telecomunicaciones",
    "Servicios Financieros",
    "Impuestos",
    "Salud",
    "Educación",
    "Caja de Compensación",
    "Tránsito y Transporte"
  ];

  // Sort categories
  const sortedCategories = Object.keys(companiesByCategory).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <div className="py-6">
      {/* Partners Slider */}
      <div className="relative mb-16" ref={containerRef}>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous partners"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        <div className="overflow-hidden px-12">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            {visibleCompanies.map((index) => (
              <motion.div
                key={companies[index].id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="min-w-0 flex-1"
              >
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-24 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mb-2">
                    <Building className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <p className="text-center font-medium text-gray-800 truncate w-full">
                    {companies[index].name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next partners"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Company Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {sortedCategories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#004E89] to-[#003366] px-4 py-3 text-white font-medium">
              {category}
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {companiesByCategory[category].slice(0, 6).map((company) => (
                  <div key={company.id} className="text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-2"></div>
                    {company.name}
                  </div>
                ))}
              </div>
              {companiesByCategory[category].length > 6 && (
                <div className="mt-2 text-right">
                  <span className="text-xs text-[#FF6B35]">
                    +{companiesByCategory[category].length - 6} más
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <p className="text-gray-600">
          ¿No encuentras la empresa que buscas? <a href="#" className="text-[#FF6B35] hover:underline">Solicítala aquí</a>
        </p>
      </div>
    </div>
  );
}