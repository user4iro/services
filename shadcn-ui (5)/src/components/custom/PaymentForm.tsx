import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Building, Receipt, ArrowRight, Check } from "lucide-react";
import { companies } from "./companies-data";
import { useNavigate } from "react-router-dom";

export default function PaymentForm({ onSubmit }) {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [customCompanyName, setCustomCompanyName] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [isCustomCompany, setIsCustomCompany] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setIsValid(
      (selectedCompany !== null && (!isCustomCompany || (isCustomCompany && customCompanyName.trim() !== ""))) && 
      billNumber.length >= 6 && 
      amount.length > 0
    );
  }, [selectedCompany, billNumber, amount, customCompanyName, isCustomCompany]);

  const handleSubmit = () => {
    if (isValid) {
      if (currentStep === 1) {
        setCurrentStep(2);
      } else {
        setIsLoading(true);
        onSubmit({
          company: isCustomCompany ? customCompanyName : selectedCompany,
          billNumber,
          amount
        });
      }
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const formatAmount = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');
    
    // Format with thousand separators
    if (numericValue) {
      return new Intl.NumberFormat('es-CO').format(parseInt(numericValue));
    }
    return '';
  };

  const handleCompanySelect = (companyName) => {
    setSelectedCompany(companyName);
    setIsDropdownOpen(false);
    setSearchQuery("");
    
    // Check if this is the custom company option
    if (companyName === "Mi empresa no está en la lista") {
      setIsCustomCompany(true);
    } else {
      setIsCustomCompany(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="inline-block mb-4">
            <div className="h-2 w-20 bg-gradient-to-r from-[#FF6B35] via-[#FFC14D] to-[#004E89] rounded-full mx-auto"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Paga todas tus facturas en un solo lugar
          </h2>
          {/* Logo section removed as requested */}
          <p className="text-lg text-gray-600">
            Olvidate de las filas y los desplazamientos. En PagoMío puedes pagar todas tus facturas de servicios rápidamente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#004E89] p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-white">
                <Receipt className="w-5 h-5" />
                <span className="font-medium text-lg">Paga tu factura en segundos</span>
              </div>
              <div className="flex">
                <div className={`h-3 w-3 rounded-full mr-2 ${currentStep === 1 ? 'bg-white' : 'bg-white/50'}`}></div>
                <div className={`h-3 w-3 rounded-full ${currentStep === 2 ? 'bg-white' : 'bg-white/50'}`}></div>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Empresa de servicio</label>
                  <div className="relative">
                    <div 
                      className="border border-gray-300 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-[#FF6B35] transition-colors"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <div className="flex items-center">
                        {selectedCompany ? (
                          <>
                            <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-md flex items-center justify-center mr-3">
                              <Building className="w-5 h-5 text-[#FF6B35]" />
                            </div>
                            <span>{selectedCompany}</span>
                          </>
                        ) : (
                          <span className="text-gray-500">Selecciona una empresa</span>
                        )}
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-50 max-h-72 overflow-y-auto">
                        <div className="p-2 border-b border-gray-100 sticky top-0 bg-white">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input 
                              type="text"
                              placeholder="Buscar empresa..."
                              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-sm"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="py-1">
                          {filteredCompanies.length > 0 ? (
                            filteredCompanies.map((company) => (
                              <div
                                key={company.id}
                                className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center"
                                onClick={() => handleCompanySelect(company.name)}
                              >
                                <div className="w-8 h-8 bg-[#FF6B35]/10 rounded-md flex items-center justify-center mr-3">
                                  <span className="text-xs font-medium text-[#FF6B35]">{company.name.charAt(0)}</span>
                                </div>
                                <div>
                                  <p className={company.id === 999 ? "text-[#FF6B35] font-medium" : "text-gray-800"}>
                                    {company.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{company.category}</p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="px-3 py-3 text-center text-gray-500 text-sm">
                              No se encontraron empresas
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {isCustomCompany && (
                  <div className="mb-6">
                    <label htmlFor="customCompany" className="block text-gray-700 font-medium mb-2">Nombre de la empresa</label>
                    <input
                      type="text"
                      id="customCompany"
                      placeholder="Escribe el nombre de tu empresa"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] transition-all"
                      value={customCompanyName}
                      onChange={(e) => setCustomCompanyName(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Ingresa el nombre completo de la empresa
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="reference" className="block text-gray-700 font-medium mb-2">Número de convenio o de celular</label>
                  <input
                    type="text"
                    id="reference"
                    placeholder="Ingresa el número que aparece en tu factura"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] transition-all"
                    value={billNumber}
                    onChange={(e) => setBillNumber(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Este número se encuentra en la parte superior de tu factura física o PDF
                  </p>
                </div>

                <div className="mb-8">
                  <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Valor a pagar</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-medium">$</div>
                    <input
                      type="text"
                      id="amount"
                      placeholder="0"
                      className="w-full border border-gray-300 rounded-lg p-3 pl-7 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] transition-all"
                      value={amount}
                      onChange={(e) => setAmount(formatAmount(e.target.value))}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Puedes modificar este valor si deseas realizar un pago parcial
                  </p>
                </div>

                <div className="flex justify-center">
                  <button 
                    className={`${isValid ? 'bg-[#FF6B35] hover:bg-[#E85826]' : 'bg-gray-300 cursor-not-allowed'} text-white font-medium py-3 px-6 rounded-lg flex items-center transition-all w-full justify-center`}
                    onClick={handleSubmit}
                    disabled={!isValid}
                  >
                    Continuar
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-center mb-6">Verifica tu información</h3>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-600">Empresa:</span>
                      <span className="font-medium">{isCustomCompany ? customCompanyName : selectedCompany}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-600">Referencia:</span>
                      <span className="font-medium">{billNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Valor:</span>
                      <span className="font-medium">$ {amount}</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex justify-center gap-4 mb-4">
                        <img src="/assets/images/logos/pagomiologo.png" alt="PagoMío" className="h-10" />
                        <img src="/images/payment-logos/mercado-pago-logo.svg" alt="Mercado Pago" className="h-10" />
                      </div>
                      <div className="flex flex-wrap justify-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa" className="h-6" />
                        </div>
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" alt="Mastercard" className="h-6" />
                        </div>
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <img src="https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-m.svg" alt="American Express" className="h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button 
                        className="border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg flex items-center transition-all w-1/2 justify-center hover:bg-gray-50"
                        onClick={handleBack}
                      >
                        Volver
                      </button>
                      <a 
                        href="/payment" 
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-[#009ee3] hover:bg-blue-50 w-1/2"
                      >
                        Pagar con Mercado Pago
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Procesamos más de 100,000 pagos diarios de forma segura
            </p>
          </div>
        </motion.div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Empresas", value: "+300", icon: "📊" },
              { label: "Transacciones", value: "+5M", icon: "💳" },
              { label: "Usuarios", value: "+500K", icon: "👥" },
              { label: "Satisfacción", value: "99%", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 p-5 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-[#FF6B35]">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
