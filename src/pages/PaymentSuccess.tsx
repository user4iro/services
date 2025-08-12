import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Home } from "lucide-react";

export default function PaymentSuccess() {
  // Mock payment data - in a real app, this would come from the payment response
  // or be stored in state during navigation
  const paymentData = {
    transactionId: "MP-" + Math.floor(Math.random() * 10000000),
    date: new Date().toLocaleDateString("es-CO"),
    time: new Date().toLocaleTimeString("es-CO"),
    amount: "150,000.00",
    service: "Agua de Bogotá",
    reference: "REF-89076543",
    paymentMethod: "Tarjeta de crédito",
    cardLastDigits: "****4321"
  };

  return (
    <>
      <Helmet>
        <title>¡Pago Exitoso! | PagoMío</title>
        <meta name="description" content="Tu pago ha sido procesado exitosamente" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="border-green-100 overflow-hidden">
          <div className="bg-green-600 h-2" />
          <CardHeader className="text-center pt-8">
            <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-700">
              ¡Pago Exitoso!
            </CardTitle>
            <p className="text-green-600">
              Tu pago ha sido procesado correctamente.
            </p>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              <div className="border-t border-b border-gray-100 py-4 px-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">ID de transacción</p>
                    <p className="font-medium">{paymentData.transactionId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fecha y hora</p>
                    <p className="font-medium">
                      {paymentData.date} - {paymentData.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-3">Detalles del pago</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Servicio</span>
                    <span className="font-medium">{paymentData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Referencia</span>
                    <span className="font-medium">{paymentData.reference}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Método de pago</span>
                    <span className="font-medium">{paymentData.paymentMethod}</span>
                  </div>
                  {paymentData.cardLastDigits && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tarjeta</span>
                      <span className="font-medium">{paymentData.cardLastDigits}</span>
                    </div>
                  )}
                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-700">Total pagado</span>
                      <span className="font-bold text-green-700">$ {paymentData.amount} COP</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm">
                  Hemos enviado el comprobante de pago a tu correo electrónico registrado.
                  También puedes descargarlo aquí.
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col md:flex-row gap-4 pt-2 pb-8">
            <Button className="w-full md:w-auto" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Descargar comprobante
            </Button>
            <Link to="/" className="w-full md:w-auto">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Si tienes alguna pregunta sobre este pago, por favor{" "}
            <Link to="/contact" className="text-primary hover:underline">
              contáctanos
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}