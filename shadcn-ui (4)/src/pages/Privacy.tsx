import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
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

          <h1 className="text-3xl font-bold mb-6 text-blue-800">
            Política de Privacidad
          </h1>

          <div className="prose prose-blue max-w-none">
            <p>
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>1. Introducción</h2>
            <p>
              PagaFácil Colombia (en adelante, "la Empresa", "nosotros", "nuestro") se compromete a
              proteger la privacidad de los datos personales que recopilamos de nuestros usuarios.
              Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos
              su información cuando utiliza nuestro servicio de pago de facturas en línea.
            </p>

            <h2>2. Información que Recopilamos</h2>
            <p>
              Podemos recopilar los siguientes tipos de información:
            </p>
            <ul>
              <li><strong>Información de Identificación Personal:</strong> Nombre, correo electrónico, número de teléfono, dirección.</li>
              <li><strong>Información de Pago:</strong> Datos de tarjetas de crédito/débito, información bancaria necesaria para procesar los pagos.</li>
              <li><strong>Información de Facturas:</strong> Datos relacionados con los servicios que paga, incluyendo números de referencia, montos y empresas prestadoras.</li>
              <li><strong>Información de Uso:</strong> Datos sobre cómo interactúa con nuestro servicio, incluyendo dirección IP, tipo de navegador, páginas visitadas, tiempo de acceso.</li>
            </ul>

            <h2>3. Cómo Usamos su Información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul>
              <li>Procesar y completar las transacciones de pago solicitadas.</li>
              <li>Proporcionar, mantener y mejorar nuestro servicio.</li>
              <li>Comunicarnos con usted sobre su cuenta o transacciones.</li>
              <li>Enviar notificaciones técnicas, actualizaciones o alertas de seguridad.</li>
              <li>Proteger contra actividades fraudulentas o ilegales.</li>
              <li>Cumplir con las obligaciones legales aplicables.</li>
            </ul>

            <h2>4. Compartición de Información</h2>
            <p>
              Podemos compartir su información con:
            </p>
            <ul>
              <li><strong>Empresas de Servicios:</strong> Para procesar los pagos a las empresas prestadoras de servicios.</li>
              <li><strong>Procesadores de Pagos:</strong> Para facilitar las transacciones financieras.</li>
              <li><strong>Proveedores de Servicios:</strong> Que nos ayudan a operar nuestro negocio (alojamiento web, análisis de datos, servicio al cliente).</li>
              <li><strong>Autoridades Legales:</strong> Cuando sea requerido por ley, orden judicial o proceso legal.</li>
            </ul>

            <h2>5. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su
              información contra acceso no autorizado, pérdida, alteración o destrucción. Estas incluyen
              encriptación SSL, firewalls, acceso restringido a datos personales y auditorías de seguridad.
            </p>

            <h2>6. Retención de Datos</h2>
            <p>
              Conservamos su información personal mientras sea necesario para cumplir con los propósitos
              descritos en esta política, a menos que se requiera o permita un período de retención más
              largo por ley.
            </p>

            <h2>7. Sus Derechos</h2>
            <p>
              De acuerdo con las leyes colombianas de protección de datos, usted tiene derecho a:
            </p>
            <ul>
              <li>Acceder a sus datos personales.</li>
              <li>Corregir datos inexactos o incompletos.</li>
              <li>Eliminar sus datos personales en determinadas circunstancias.</li>
              <li>Oponerse o limitar el procesamiento de sus datos.</li>
              <li>Presentar una queja ante la autoridad de protección de datos.</li>
            </ul>

            <h2>8. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para recopilar información sobre cómo interactúa
              con nuestro servicio. Esto nos ayuda a mejorar la experiencia del usuario, analizar el uso
              del sitio y personalizar el contenido.
            </p>

            <h2>9. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier
              cambio material publicando la nueva política en esta página y, cuando sea apropiado,
              notificándole por correo electrónico.
            </p>

            <h2>10. Contacto</h2>
            <p>
              Si tiene preguntas o inquietudes sobre esta Política de Privacidad o nuestras prácticas
              de datos, contáctenos a través de los canales de atención al cliente disponibles en
              nuestro sitio web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}