import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, CreditCard, Clock, CheckCircle } from "lucide-react";

export default function MercadoPagoSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Paga tus servicios con Mercado Pago
          </h2>
          <p className="text-blue-800 max-w-2xl mx-auto">
            Utilizamos la plataforma de pago más confiable de Latinoamérica para
            garantizar que tus transacciones sean seguras y rápidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <CreditCard className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Múltiples métodos de pago</h3>
              <p className="text-gray-600">
                Tarjetas de crédito/débito, transferencia bancaria, PSE y más opciones disponibles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Seguridad garantizada</h3>
              <p className="text-gray-600">
                Plataforma certificada con los más altos estándares de seguridad en el mercado.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Procesamiento inmediato</h3>
              <p className="text-gray-600">
                Tus pagos se procesan al instante y recibes confirmación inmediata.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sin comisiones adicionales</h3>
              <p className="text-gray-600">
                No cobramos cargos extras por utilizar nuestro servicio de pago.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Link to="/payment">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              Pagar mis servicios ahora
            </Button>
          </Link>
        </div>

        <div className="mt-10 text-center">
          <img
            src="/assets/images/payment-icons/mercado-pago-logo.png"
            alt="Mercado Pago"
            className="h-12 mx-auto"
            onError={(e) => {
              e.currentTarget.src = "https://www.mercadopago.com/org-img/MP3/API/logos/mp-logo.svg";
            }}
          />
          <p className="text-sm text-gray-500 mt-2">
            Integración oficial con Mercado Pago para procesar tus pagos de manera segura.
          </p>
        </div>
      </div>
    </section>
  );
}