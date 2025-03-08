
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { User, Package, Heart, CreditCard, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
      
      if (!data.user) {
        navigate('/');
      }
    };
    
    getUser();
    
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_OUT') {
          navigate('/');
        } else if (session?.user) {
          setUser(session.user);
        }
      }
    );
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);
  
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account."
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive"
      });
    }
  };
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h1 className="h2 mb-8">My Account</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
              {/* Sidebar */}
              <div className="bg-white rounded-2xl shadow-card p-4">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                      activeTab === 'profile' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                      activeTab === 'orders' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    <Package size={18} />
                    <span>Orders</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                      activeTab === 'wishlist' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    <Heart size={18} />
                    <span>Wishlist</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('payment')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                      activeTab === 'payment' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    <CreditCard size={18} />
                    <span>Payment Methods</span>
                  </button>
                  
                  <hr className="my-3 border-border" />
                  
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-muted-foreground hover:bg-secondary"
                  >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </button>
                </nav>
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Profile Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email</label>
                        <input
                          type="email"
                          value={user?.email || ''}
                          readOnly
                          className="w-full h-11 py-2 px-4 bg-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/30"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Full Name</label>
                        <input
                          type="text"
                          defaultValue={user?.user_metadata?.full_name || ''}
                          className="w-full h-11 py-2 px-4 bg-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/30"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button>
                          Update Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'orders' && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Order History</h2>
                    <div className="text-center py-10 text-muted-foreground">
                      <Package size={40} className="mx-auto mb-4 opacity-40" />
                      <p>You haven't placed any orders yet.</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'wishlist' && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">My Wishlist</h2>
                    <div className="text-center py-10 text-muted-foreground">
                      <Heart size={40} className="mx-auto mb-4 opacity-40" />
                      <p>Your wishlist is empty.</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'payment' && (
                  <div>
                    <h2 className="text-xl font-medium mb-6">Payment Methods</h2>
                    <div className="text-center py-10 text-muted-foreground">
                      <CreditCard size={40} className="mx-auto mb-4 opacity-40" />
                      <p>You haven't added any payment methods yet.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountPage;
