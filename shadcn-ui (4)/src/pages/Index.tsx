import { useState } from 'react';
import Header from '@/components/custom/Header';
import PaymentForm from '@/components/custom/PaymentForm';
import PartnerSlider from '@/components/custom/PartnerSlider';
import Testimonials from '@/components/custom/Testimonials';
import Benefits from '@/components/custom/Benefits';
import SecuritySeals from '@/components/custom/SecuritySeals';
import Footer from '@/components/custom/Footer';
import PaymentConfirmation from '@/components/custom/PaymentConfirmation';
import MercadoPagoSection from '@/components/custom/MercadoPagoSection';
import { PaymentNotifications } from '@/components/PaymentNotifications';

export default function LandingPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<{
    company: string;
    billNumber: string;
    amount: string;
  } | null>(null);

  const handlePaymentSubmit = (details: {
    company: string;
    billNumber: string;
    amount: string;
  }) => {
    setPaymentDetails(details);
    setShowConfirmation(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToForm = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!showConfirmation ? (
        <>
          <Header />
          <main className="flex-1">
            <section id="payment-form" className="container mx-auto px-4 py-12 md:py-20">
              <PaymentForm onSubmit={handlePaymentSubmit} />
            </section>
            
            <section id="partners" className="bg-blue-50 py-12 md:py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
                  Nuestros Aliados
                </h2>
                <PartnerSlider />
              </div>
            </section>

            <section id="testimonials" className="py-12 md:py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
                  Lo que dicen nuestros usuarios
                </h2>
                <Testimonials />
              </div>
            </section>

            <section id="benefits" className="bg-gradient-to-br from-blue-50 to-yellow-50 py-12 md:py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
                  Beneficios de nuestro servicio
                </h2>
                <Benefits />
              </div>
            </section>

            <section id="security" className="py-12 md:py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
                  Paga con total seguridad
                </h2>
                <SecuritySeals />
              </div>
            </section>
            
            <MercadoPagoSection />
          </main>
          <Footer />
          <PaymentNotifications />
        </>
      ) : (
        <PaymentConfirmation details={paymentDetails!} onBack={handleBackToForm} />
      )}
    </div>
  );
}