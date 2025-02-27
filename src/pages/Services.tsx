import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  ClipboardCheck, 
  TrendingUp, 
  BarChart4, 
  Scale 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group h-80 perspective"
    >
      <div className="relative preserve-3d w-full h-full duration-700 group-hover:rotate-y-180">
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-8 border-b-4 border-gold">
          <div className="text-gold mb-6">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-navy text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Learn More
          </motion.button>
        </div>
        
        {/* Back of card */}
        <div className="absolute backface-hidden w-full h-full bg-navy rounded-xl shadow-lg p-8 rotate-y-180 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-gold mb-4">{title}</h3>
          <p className="text-white text-center">{description}</p>
          <motion.a
            href={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 bg-gold text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Explore Service
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: "Property Sales",
      description: "Find your dream property with our extensive listings of residential and commercial properties across Indonesia. Our expert agents will guide you through every step of the purchase process."
    },
    {
      icon: <Building size={48} />,
      title: "Rentals",
      description: "Discover premium rental properties that match your lifestyle and budget. From short-term vacation rentals to long-term residential leases, we have options for every need."
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: "Property Management",
      description: "Let us handle the day-to-day operations of your property investment. Our comprehensive management services include tenant screening, maintenance, rent collection, and more."
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Marketing",
      description: "Maximize your property's visibility with our strategic marketing services. We leverage digital platforms, professional photography, and our extensive network to attract qualified buyers."
    },
    {
      icon: <BarChart4 size={48} />,
      title: "Investment Consulting",
      description: "Make informed investment decisions with guidance from our property investment experts. We analyze market trends, ROI potential, and help you build a profitable property portfolio."
    },
    {
      icon: <Scale size={48} />,
      title: "Legal Support",
      description: "Navigate Indonesia's property laws with confidence. Our legal team ensures all transactions comply with regulations and helps resolve any legal issues related to property ownership."
    }
  ];

  return (
    <main className="flex-grow pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gold mx-auto mb-6"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-sand"
            >
              Comprehensive property solutions tailored to your needs across Indonesia
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-navy rounded-xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need a Customized Solution?
              </h2>
              <p className="text-sand mb-8">
                Our team of experts is ready to create a tailored property solution that meets your specific requirements.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gold text-white px-8 py-3 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Schedule a Consultation
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;