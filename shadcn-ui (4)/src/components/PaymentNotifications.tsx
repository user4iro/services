import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Define types
type Notification = {
  id: string;
  name: string;
  company: string;
  amount: string;
};

// List of random first names
const firstNames = [
  "María", "Juan", "Ana", "Carlos", "Laura", "Andrés", "Sofía", "Diego", 
  "Valentina", "Alejandro", "Camila", "José", "Isabella", "Santiago", "Gabriela",
  "Daniel", "Paula", "Miguel", "Lucía", "Javier", "Mariana", "Felipe", "Daniela",
  "Eduardo", "Carolina"
];

// List of random last initials
const lastInitials = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", 
                     "N", "O", "P", "R", "S", "T", "V", "Z"];

// Companies from the service providers list
const companies = [
  "Acueducto De Bogotá", "Celsia Valle", "Claro", "Movistar", "Tigo", 
  "DirecTV", "EMPOPASTO", "EMCALI", "Acueducto De Bogotá", "Enel-Codensa"
];

// Function to generate a random amount between 20,000 and 500,000
const generateRandomAmount = () => {
  const amount = Math.floor(Math.random() * (500000 - 20000 + 1)) + 20000;
  return amount.toLocaleString('es-CO');
};

// Generate 50 unique random notifications
const generateNotifications = (): Notification[] => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: `notification-${i}`,
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastInitials[Math.floor(Math.random() * lastInitials.length)]}`,
    company: companies[Math.floor(Math.random() * companies.length)],
    amount: generateRandomAmount()
  }));
};

export function PaymentNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(generateNotifications());
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (notifications.length === 0) {
      return;
    }

    // Initialize with a random notification
    const randomIndex = Math.floor(Math.random() * notifications.length);
    const nextNotification = notifications[randomIndex];
    
    // Show a notification every 5-10 seconds
    const timer = setTimeout(() => {
      setCurrentNotification(nextNotification);
      setShowNotification(true);
      
      // Hide notification after 4 seconds
      const hideTimer = setTimeout(() => {
        setShowNotification(false);
        
        // Remove used notification and prepare for next cycle
        setNotifications(prevNotifications => 
          prevNotifications.filter(n => n.id !== nextNotification.id)
        );
      }, 4000);
      
      return () => clearTimeout(hideTimer);
    }, Math.random() * 5000 + 5000); // Random time between 5-10 seconds
    
    return () => clearTimeout(timer);
  }, [notifications, showNotification]);
  
  // If we run out of notifications, generate new ones
  useEffect(() => {
    if (notifications.length === 0) {
      setNotifications(generateNotifications());
    }
  }, [notifications]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {showNotification && currentNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-4 max-w-xs border-l-4 border-[#FF6B35]"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-[#FF6B35]/10 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6B35]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-[#FF6B35]">
                  {currentNotification.name} acaba de pagar su factura de {currentNotification.company}
                </p>
                <p className="text-sm text-gray-500">
                  Por ${currentNotification.amount} pesos
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}