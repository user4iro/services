export type Company = {
  id: number;
  name: string;
  category: string;
  region?: string;
};

export const companies: Company[] = [
  // Servicios públicos de Acueducto
  { id: 1, name: "Acuasur SA ESP", category: "Servicios Públicos de Acueducto" },
  { id: 2, name: "Acueducto Acuavalle SA ESP", category: "Servicios Públicos de Acueducto" },
  { id: 3, name: "Acueducto Agua Viva SA ESP", category: "Servicios Públicos de Acueducto" },
  { id: 4, name: "Acueducto Aguas De Buga", category: "Servicios Públicos de Acueducto" },
  { id: 5, name: "Acueducto Aguas De Cartagena", category: "Servicios Públicos de Acueducto" },
  { id: 6, name: "Acueducto Aguas Del Norte", category: "Servicios Públicos de Acueducto" },
  { id: 7, name: "Acueducto Alcantarillado Yopal", category: "Servicios Públicos de Acueducto" },
  { id: 8, name: "Acueducto Aquaterra", category: "Servicios Públicos de Acueducto" },
  { id: 9, name: "Acueducto Bucaramanga", category: "Servicios Públicos de Acueducto" },
  { id: 10, name: "Acueducto De Bogotá", category: "Servicios Públicos de Acueducto" },
  { id: 11, name: "Acueducto De Funza", category: "Servicios Públicos de Acueducto" },
  { id: 12, name: "Acueducto De Girardot Acuagyr", category: "Servicios Públicos de Acueducto" },
  { id: 13, name: "Acueducto Eaaamesp Madrid", category: "Servicios Públicos de Acueducto" },
  { id: 14, name: "Acueducto Edesa Meta", category: "Servicios Públicos de Acueducto" },
  { id: 15, name: "Acueducto Emdupar SA", category: "Servicios Públicos de Acueducto" },
  { id: 16, name: "Acueducto Emp Pub Puerto Boyacá", category: "Servicios Públicos de Acueducto" },
  { id: 17, name: "Acueducto Empopasto", category: "Servicios Públicos de Acueducto" },
  { id: 18, name: "Acueducto Empre Publicas De Armenia", category: "Servicios Públicos de Acueducto" },
  { id: 19, name: "Acueducto Empresa Pb De Sibate", category: "Servicios Públicos de Acueducto" },
  { id: 20, name: "Acueducto Empumelgar ESP", category: "Servicios Públicos de Acueducto" },
  
  // Servicios públicos de Energía
  { id: 39, name: "Cedenar Centrales Eléctricas De Nariño", category: "Servicios Públicos de Energía" },
  { id: 40, name: "Celsia Valle", category: "Servicios Públicos de Energía" },
  { id: 41, name: "Cens", category: "Servicios Públicos de Energía" },
  { id: 42, name: "Cetsa", category: "Servicios Públicos de Energía" },
  { id: 46, name: "Edeq Domicilizacion", category: "Servicios Públicos de Energía" },
  { id: 48, name: "Electrificadora Del Huila", category: "Servicios Públicos de Energía" },
  { id: 50, name: "Emcali", category: "Servicios Públicos de Energía" },
  { id: 56, name: "Energia Chec Caldas", category: "Servicios Públicos de Energía" },
  { id: 57, name: "Energia Electrificadora Boyaca", category: "Servicios Públicos de Energía" },
  { id: 58, name: "Energia Electrocaqueta", category: "Servicios Públicos de Energía" },
  { id: 59, name: "Energia Electrohuila SA", category: "Servicios Públicos de Energía" },
  { id: 60, name: "Energia Empresa De Pereira", category: "Servicios Públicos de Energía" },
  { id: 61, name: "Energia Emsa", category: "Servicios Públicos de Energía" },
  { id: 62, name: "Energia Enertotal S.A.E.S.P", category: "Servicios Públicos de Energía" },
  { id: 63, name: "Energia Ruitoque", category: "Servicios Públicos de Energía" },
  { id: 68, name: "Essa Factura", category: "Servicios Públicos de Energía" },
  { id: 45, name: "Compañía Energética De Occidente", category: "Servicios Públicos de Energía" },
  
  // Servicios públicos de Gas
  { id: 43, name: "Chilco Distr De Gas Y Energia ESP", category: "Servicios Públicos de Gas" },
  { id: 44, name: "Colgas SA ESP", category: "Servicios Públicos de Gas" },
  { id: 47, name: "Efigas Gas Natural", category: "Servicios Públicos de Gas" },
  { id: 70, name: "Gas Lidagas SA", category: "Servicios Públicos de Gas" },
  { id: 71, name: "Gas Natural Dom Enerca", category: "Servicios Públicos de Gas" },
  { id: 72, name: "Gas Natural Llanogas", category: "Servicios Públicos de Gas" },
  { id: 73, name: "Gas Natural Super De Narino", category: "Servicios Públicos de Gas" },
  { id: 74, name: "Gas Oriente", category: "Servicios Públicos de Gas" },
  { id: 75, name: "Gases De Occidente", category: "Servicios Públicos de Gas" },
  { id: 76, name: "Gases Del Cusiana", category: "Servicios Públicos de Gas" },
  { id: 77, name: "Gases Del Llano Llanogas", category: "Servicios Públicos de Gas" },
  { id: 78, name: "Gasguajira", category: "Servicios Públicos de Gas" },
  { id: 85, name: "Surtigas", category: "Servicios Públicos de Gas" },
  { id: 86, name: "Vanti", category: "Servicios Públicos de Gas" },
  
  // Telecomunicaciones
  { id: 87, name: "Claro", category: "Telecomunicaciones" },
  { id: 88, name: "Movistar", category: "Telecomunicaciones" },
  { id: 89, name: "Tigo", category: "Telecomunicaciones" },
  { id: 90, name: "WOM", category: "Telecomunicaciones" },
  { id: 91, name: "ETB", category: "Telecomunicaciones" },
  
  // Mi empresa no está en la lista
  { id: 999, name: "Mi empresa no está en la lista", category: "Otra Empresa" }
];
