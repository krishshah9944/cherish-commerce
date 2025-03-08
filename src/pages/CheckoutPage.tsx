
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useCart } from '@/contexts/CartContext';

const CheckoutPage = () => {
  const [status, setStatus] = useState<'success' | 'cancel' | null>(null);
  const navigate = useNavigate();
  const { clearCart } = useCart();
  
  useEffect(() => {
    // Check for query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const checkoutStatus = queryParams.get('status');
    
    if (checkoutStatus === 'success') {
      setStatus('success');
      clearCart();
    } else if (checkoutStatus === 'cancel') {
      setStatus('cancel');
    }
  }, [clearCart]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom max-w-md mx-auto">
          {status === 'success' ? (
            <div className="text-center p-8 rounded-xl bg-white shadow-card">
              <div className="w-16 h-16 mx-auto mb-4 text-green-500">
                <CheckCircle className="w-full h-full" />
              </div>
              <h1 className="text-2xl font-medium mb-2">Order Successful!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your purchase. Your order has been received and is being processed.
              </p>
              <button
                onClick={() => navigate('/')}
                className="w-full py-3 bg-primary text-primary-foreground rounded-full"
              >
                Continue Shopping
              </button>
            </div>
          ) : status === 'cancel' ? (
            <div className="text-center p-8 rounded-xl bg-white shadow-card">
              <div className="w-16 h-16 mx-auto mb-4 text-red-500">
                <XCircle className="w-full h-full" />
              </div>
              <h1 className="text-2xl font-medium mb-2">Payment Cancelled</h1>
              <p className="text-muted-foreground mb-6">
                Your payment was not completed. Your cart items are still saved.
              </p>
              <button
                onClick={() => navigate('/')}
                className="w-full py-3 bg-primary text-primary-foreground rounded-full"
              >
                Return to Store
              </button>
            </div>
          ) : (
            <div className="text-center p-8">
              <p>Redirecting to checkout...</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
