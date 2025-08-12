import { useEffect, useState } from 'react';

/**
 * Component that dynamically loads Mercado Pago SDK if not already loaded
 */
export default function MercadoPagoScript() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Expose a global function to check if SDK is properly loaded
    window.checkMercadoPagoSDK = () => {
      return !!window.mercadopago;
    };

    // Check if the SDK is already loaded
    if (window.mercadopago) {
      console.log('Mercado Pago SDK already loaded in MercadoPagoScript');
      setScriptLoaded(true);
      return;
    }

    // Remove any existing scripts to prevent duplicates
    const existingScript = document.querySelector('script[src="https://sdk.mercadopago.com/js/v2"]');
    if (existingScript) {
      existingScript.parentNode?.removeChild(existingScript);
    }

    try {
      console.log('Loading Mercado Pago SDK from MercadoPagoScript component');
      
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.async = false; // Set to false to ensure it loads before other scripts
      script.defer = false; // Set to false to load immediately
      
      script.onload = () => {
        console.log('Mercado Pago SDK loaded successfully from MercadoPagoScript');
        setScriptLoaded(true);
        
        // Configure Mercado Pago global settings if needed
        if (window.mercadopago) {
          window.mercadopago.setPublishableKey('TEST-f04b2479-e31e-47e7-ab53-5c5f25e9efd3');
        }
      };
      
      script.onerror = () => {
        console.error('Failed to load Mercado Pago SDK from MercadoPagoScript');
      };
      
      // Append to the document head as first script to prioritize loading
      const head = document.head || document.getElementsByTagName('head')[0];
      head.insertBefore(script, head.firstChild);
      
      // Don't remove the script on component unmount as we want it to persist
      return () => {};
    } catch (error) {
      console.error('Error loading Mercado Pago SDK:', error);
    }
  }, []);

  return null;
}