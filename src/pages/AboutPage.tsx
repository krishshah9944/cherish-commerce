
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Users, Award, Heart, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Customer-First Approach',
    description: 'We prioritize your satisfaction and strive to exceed your expectations with every purchase.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Quality Guaranteed',
    description: 'Every product in our collection is carefully selected and quality tested.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Handpicked Selection',
    description: 'Our products are thoughtfully curated to bring you the best in every category.'
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Eco-Conscious',
    description: 'We're committed to sustainability and promoting eco-friendly products.'
  }
];

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Hero section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="chip mb-4">About Us</span>
            <h1 className="h1 mb-4">Crafting Better Living</h1>
            <p className="text-muted-foreground text-lg">
              We're passionate about bringing you thoughtfully designed products that enhance your everyday life while caring for our planet.
            </p>
          </div>
          
          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="space-y-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Our workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Our products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="self-center space-y-6 md:pl-8">
              <h2 className="text-2xl font-medium">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, we set out to create a shopping experience that combines beautiful design, functionality, and sustainability. Our journey began with a simple idea: to make it easier for people to find products that not only look good but also do good.
                </p>
                <p>
                  We work directly with artisans and manufacturers who share our values of quality craftsmanship and environmental responsibility. Every item in our collection is carefully selected to ensure it meets our high standards for design, durability, and eco-consciousness.
                </p>
                <p>
                  Today, we're proud to offer a curated selection of products that help our customers create spaces they love while making choices that benefit our planet.
                </p>
              </div>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-secondary/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Values section */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-4">Our Values</h2>
            <p className="text-muted-foreground mb-8">
              We believe in creating positive change through thoughtful consumption. Every product we offer is selected with these core values in mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">We never compromise on quality and craftsmanship</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Sustainable Impact</h3>
                <p className="text-sm text-muted-foreground">Making eco-friendly choices accessible to everyone</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.388 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.512 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.90831 3.57831 8.50903 2.99871 7.05 2.99871C5.59097 2.99871 4.19169 3.57831 3.16 4.61C2.12831 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.12831 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.938 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.062 22.0329 6.39462C21.7564 5.72724 21.351 5.12084 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Community Focus</h3>
                <p className="text-sm text-muted-foreground">Building relationships with customers and artisans</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
