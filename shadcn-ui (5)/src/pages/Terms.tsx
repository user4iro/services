import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          <h1 className="text-3xl font-bold mb-6 text-blue-800">Términos y Condiciones</h1>
          
          <div className="prose prose-blue max-w-none">
            <p>
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2>1. Introducción</h2>
            <p>
              Estos Términos y Condiciones regulan el uso del servicio de pago de facturas en línea
              ofrecido a través de este sitio web (en adelante, "el Servicio"), operado por PagaFácil
              Colombia (en adelante, "la Empresa", "nosotros", "nuestro"). Al acceder y utilizar nuestro 
              Servicio, usted acepta estar sujeto a estos Términos y Condiciones.
            </p>
            
            <h2>2. Descripción del Servicio</h2>
            <p>
              PagaFácil Colombia ofrece un servicio de intermediación para el pago de facturas de 
              servicios públicos y privados en Colombia. Actuamos como facilitadores en el proceso de
              pago, conectando a los usuarios con las empresas prestadoras de servicios a través de 
              pasarelas de pago seguras.
            </p>
            
            <h2>3. Elegibilidad</h2>
            <p>
              Para utilizar nuestros servicios, usted debe:
            </p>
            <ul>
              <li>Ser mayor de 18 años o tener la edad legal para realizar transacciones financieras en Colombia.</li>
              <li>Tener capacidad legal para contratar.</li>
              <li>Aceptar estos Términos y Condiciones y nuestra Política de Privacidad.</li>
            </ul>
            
            <h2>4. Registro y Cuenta</h2>
            <p>
              Al utilizar nuestro Servicio, usted garantiza que la información proporcionada es precisa,
              completa y actualizada. Usted es responsable de mantener la confidencialidad de sus datos
              de acceso y de todas las actividades realizadas desde su cuenta.
            </p>
            
            <h2>5. Proceso de Pago</h2>
            <p>
              Al realizar un pago a través de nuestro Servicio, usted acepta:
            </p>
            <ul>
              <li>Proporcionar información precisa y completa sobre la factura a pagar.</li>
              <li>Autorizar el cargo por el monto de la factura más las comisiones de servicio aplicables.</li>
              <li>Entender que una vez procesado el pago, este podría no ser reembolsable, según las políticas de la empresa prestadora del servicio.</li>
            </ul>
            
            <h2>6. Comisiones y Cargos</h2>
            <p>
              Por cada transacción realizada, PagaFácil Colombia cobra una comisión de servicio que será
              informada claramente antes de confirmar el pago. Estas comisiones pueden variar según el
              tipo de servicio y el monto de la factura.
            </p>
            
            <h2>7. Confirmación de Pagos</h2>
            <p>
              Una vez realizado el pago, se enviará una confirmación electrónica a la dirección de correo
              proporcionada. Este comprobante sirve como prueba de la transacción realizada a través de 
              nuestra plataforma.
            </p>
            
            <h2>8. Limitación de Responsabilidad</h2>
            <p>
              PagaFácil Colombia no se hace responsable por:
            </p>
            <ul>
              <li>Errores en la información de pago proporcionada por el usuario.</li>
              <li>Interrupciones del servicio debido a fallos técnicos ajenos a nuestro control.</li>
              <li>Retrasos en la aplicación del pago por parte de la empresa prestadora del servicio.</li>
              <li>Problemas derivados del servicio prestado por las empresas a las cuales se dirigen los pagos.</li>
            </ul>
            
            <h2>9. Propiedad Intelectual</h2>
            <p>
              Todo el contenido presente en el sitio web, incluyendo pero no limitado a textos, gráficos,
              logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es 
              propiedad de PagaFácil Colombia o sus proveedores de contenido y está protegido por las 
              leyes colombianas e internacionales de propiedad intelectual.
            </p>
            
            <h2>10. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              Es responsabilidad del usuario revisar periódicamente los Términos y Condiciones para estar
              informado de cualquier cambio.
            </p>
            
            <h2>11. Ley Aplicable</h2>
            <p>
              Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la 
              República de Colombia. Cualquier disputa derivada de estos Términos será sometida a la 
              jurisdicción exclusiva de los tribunales de Colombia.
            </p>
            
            <h2>12. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través
              de los canales de atención al cliente disponibles en nuestro sitio web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}