import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, ShieldCheck } from "lucide-react";

const MercadoPagoSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#009ee3] to-[#32bcad] py-14 md:py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ahora con Mercado Pago
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Realiza tus pagos directamente con Mercado Pago. Más rápido, más seguro y con todas tus tarjetas y métodos de pago favoritos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Pagos seguros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Múltiples medios de pago</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-white text-[#009ee3] hover:bg-blue-50">
                <Link to="/payment" state={{ paymentDetails: { amount: "99900" } }}>
                  Pagar con Mercado Pago
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="md:w-2/5 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="/images/Payment.jpg" 
                  alt="Mercado Pago" 
                  className="h-16 mx-auto mb-4"
                />
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <img 
                      src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" 
                      alt="Visa" 
                      className="h-6" 
                    />
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <img 
                      src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" 
                      alt="Mastercard" 
                      className="h-6" 
                    />
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <img 
                      src="https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-m.svg" 
                      alt="American Express" 
                      className="h-6" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MercadoPagoSection;