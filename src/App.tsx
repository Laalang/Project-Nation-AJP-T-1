import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import IndonesiaMap from './components/IndonesiaMap';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './pages/Services';
import PropertySales from './pages/PropertySales';
import PropertyRentals from './pages/PropertyRentals';
import PropertyManagement from './pages/PropertyManagement';
import PropertyMarketing from './pages/PropertyMarketing';
import InvestmentConsulting from './pages/InvestmentConsulting';
import LegalSupport from './pages/LegalSupport';
import PropertyListings from './pages/PropertyListings';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main content */}
      <main className="flex-grow">
        {path === '/' && (
          <>
            <HeroSection />
            <WhyChooseUs />
            <FeaturedProperties />
            <IndonesiaMap />
          </>
        )}
        
        {path === '/services' && <Services />}
        {path === '/services/property-sales' && <PropertySales />}
        {path === '/services/rentals' && <PropertyRentals />}
        {path === '/services/property-management' && <PropertyManagement />}
        {path === '/services/marketing' && <PropertyMarketing />}
        {path === '/services/investment-consulting' && <InvestmentConsulting />}
        {path === '/services/legal-support' && <LegalSupport />}
        {path === '/listings' && <PropertyListings />}
        {path === '/about' && <AboutUs />}
        {path === '/contact' && <Contact />}
        
        {/* If no route matches, show a placeholder */}
        {path !== '/' && 
         path !== '/services' && 
         path !== '/services/property-sales' && 
         path !== '/services/rentals' && 
         path !== '/services/property-management' && 
         path !== '/services/marketing' && 
         path !== '/services/investment-consulting' && 
         path !== '/services/legal-support' && 
         path !== '/listings' && 
         path !== '/about' && 
         path !== '/contact' && (
          <div className="container mx-auto px-4 md:px-6 py-32 text-center">
            <h1 className="text-3xl font-bold text-navy mb-4">Page Under Construction</h1>
            <p className="text-gray-600">This page is coming soon. Please check back later.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;