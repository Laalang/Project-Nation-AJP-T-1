import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  UserCheck, 
  Home, 
  CheckCircle, 
  X, 
  MessageCircle
} from 'lucide-react';

// Process Step component
interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, stepNumber, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: delay * 0.2,
            ease: [0.25, 0.1, 0.25, 1.0]
          } 
        }
      }}
      className="relative flex flex-col md:flex-row items-center md:items-start gap-6"
    >
      {/* Step number and connector line */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gold text-white text-2xl font-bold">
          {stepNumber}
        </div>
        {stepNumber < 3 && (
          <div className="hidden md:block h-24 w-0.5 bg-gray-300 my-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gold">
          <div className="text-gold mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Comparison table row component
interface ComparisonRowProps {
  feature: string;
  us: boolean;
  others: boolean;
  delay: number;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ feature, us, others, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.tr
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.4, 
            delay: delay * 0.1,
            ease: "easeOut"
          } 
        }
      }}
      className="border-b border-gray-200"
    >
      <td className="py-4 px-6 text-left">{feature}</td>
      <td className="py-4 px-6 text-center">
        {us ? (
          <CheckCircle className="inline-block text-green-500 h-6 w-6" />
        ) : (
          <X className="inline-block text-red-500 h-6 w-6" />
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {others ? (
          <CheckCircle className="inline-block text-green-500 h-6 w-6" />
        ) : (
          <X className="inline-block text-red-500 h-6 w-6" />
        )}
      </td>
    </motion.tr>
  );
};

const PropertySales: React.FC = () => {
  const processSteps = [
    {
      icon: <Search size={36} />,
      title: "Property Discovery",
      description: "We help you identify your needs and preferences, then match you with properties that meet your criteria from our extensive database across Indonesia.",
      stepNumber: 1
    },
    {
      icon: <UserCheck size={36} />,
      title: "Guided Viewings",
      description: "Our agents arrange and accompany you on property viewings, providing expert insights on location, property condition, and investment potential.",
      stepNumber: 2
    },
    {
      icon: <Home size={36} />,
      title: "Seamless Closing",
      description: "We handle all paperwork, legal requirements, and negotiations to ensure a smooth transaction from offer acceptance to key handover.",
      stepNumber: 3
    }
  ];

  const comparisonFeatures = [
    { feature: "Free property consultation", us: true, others: false },
    { feature: "Transparent fee structure", us: true, others: false },
    { feature: "Legal document verification", us: true, others: true },
    { feature: "Post-sale support", us: true, others: false },
    { feature: "Access to exclusive listings", us: true, others: false },
    { feature: "Negotiation on your behalf", us: true, others: true },
    { feature: "Property inspection assistance", us: true, others: false },
    { feature: "Financing assistance", us: true, others: true }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Property Sales Services
            </h1>
            
            <div className="w-24 h-1 bg-gold mb-6"></div>
            
            <p className="text-xl text-sand mb-8 max-w-2xl">
              Your journey to property ownership made simple, transparent, and rewarding with Indonesia's most trusted property partner.
            </p>
            
            <motion.a
              href="#how-we-work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gold text-white px-8 py-3 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Discover Our Process
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How We Work</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined three-step process ensures you find and secure your ideal property with minimal stress and maximum satisfaction.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={step.stepNumber}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our property sales services compare to traditional agencies across Indonesia.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Angkasa Jaya</th>
                  <th className="py-4 px-6 text-center">Other Agencies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <ComparisonRow
                    key={index}
                    feature={feature.feature}
                    us={feature.us}
                    others={feature.others}
                    delay={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  Ready to Find Your Dream Property?
                </h2>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our property experts today. No obligations, just professional advice tailored to your needs.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Personalized property recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Market insights and investment advice</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Transparent process and pricing</span>
                  </li>
                </ul>
              </div>
              
              <motion.a
                href="https://wa.me/6285123456789?text=I'm%20interested%20in%20a%20free%20property%20sales%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-gold text-white px-8 py-4 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Free WhatsApp Consultation
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Client Success Stories</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from clients who found their perfect property with our sales services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                location: "Jakarta",
                quote: "Angkasa Jaya helped me find the perfect apartment in Jakarta. Their team was professional, responsive, and made the entire process stress-free.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Siti Rahayu",
                location: "Bali",
                quote: "After struggling with other agencies, Angkasa Jaya found us our dream villa in just two weeks. Their market knowledge and negotiation skills saved us millions of rupiah.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Arief Wijaya",
                location: "Surabaya",
                quote: "The legal support provided by Angkasa Jaya was invaluable. They caught issues in the property documents that I would have missed, potentially saving me from a bad investment.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertySales;