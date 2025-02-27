import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Camera, 
  BarChart2, 
  Globe, 
  CheckCircle, 
  X, 
  MessageCircle,
  Target,
  TrendingUp,
  Smartphone,
  Users,
  Eye,
  Award
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
        {stepNumber < 5 && (
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

// Marketing Channel Card component
interface MarketingChannelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const MarketingChannelCard: React.FC<MarketingChannelCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-navy/10 rounded-full">
          <div className="text-navy">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-navy mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

// Portfolio Item component
interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  result: string;
  delay: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category, result, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gold text-sm mb-2">{category}</p>
        <p className="text-white text-sm">{result}</p>
      </div>
    </motion.div>
  );
};

const PropertyMarketing: React.FC = () => {
  const processSteps = [
    {
      icon: <Target size={36} />,
      title: "Market Analysis",
      description: "We conduct thorough market research to identify your property's unique selling points and target audience for maximum impact.",
      stepNumber: 1
    },
    {
      icon: <Camera size={36} />,
      title: "Professional Content Creation",
      description: "Our team creates stunning photography, videography, and virtual tours that showcase your property in the best possible light.",
      stepNumber: 2
    },
    {
      icon: <Globe size={36} />,
      title: "Multi-Channel Distribution",
      description: "We leverage our extensive network of online and offline channels to ensure maximum visibility for your property.",
      stepNumber: 3
    },
    {
      icon: <Users size={36} />,
      title: "Lead Management",
      description: "Our dedicated team qualifies and nurtures leads, ensuring only serious prospects are connected with you.",
      stepNumber: 4
    },
    {
      icon: <BarChart2 size={36} />,
      title: "Performance Analysis",
      description: "We continuously monitor campaign performance and make data-driven adjustments to optimize results and maximize ROI.",
      stepNumber: 5
    }
  ];

  const comparisonFeatures = [
    { feature: "Professional photography & videography", us: true, others: true },
    { feature: "Virtual 3D property tours", us: true, others: false },
    { feature: "Drone aerial photography", us: true, others: false },
    { feature: "Social media marketing campaigns", us: true, others: true },
    { feature: "Premium listing on major property portals", us: true, others: true },
    { feature: "SEO-optimized property descriptions", us: true, others: false },
    { feature: "Targeted digital advertising", us: true, others: false },
    { feature: "Email marketing to qualified database", us: true, others: false },
    { feature: "Performance analytics & reporting", us: true, others: false },
    { feature: "Lead qualification & management", us: true, others: false }
  ];

  const marketingChannels = [
    {
      icon: <Globe size={32} />,
      title: "Online Property Portals",
      description: "Premium listings on Indonesia's top property websites including Rumah.com, 99.co, and PropertyGuru."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Social Media Marketing",
      description: "Targeted campaigns across Instagram, Facebook, and YouTube to reach potential buyers where they spend time online."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Search Engine Marketing",
      description: "SEO and paid search strategies to ensure your property appears when potential buyers search online."
    },
    {
      icon: <Eye size={32} />,
      title: "Virtual Tours & 3D Imaging",
      description: "Immersive virtual experiences that allow prospects to explore properties remotely with stunning detail."
    }
  ];

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Villa in Bali",
      category: "Residential Property",
      result: "Sold within 45 days at 8% above market value"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Commercial Space in Jakarta",
      category: "Office Building",
      result: "Fully leased within 60 days"
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Beachfront Residence",
      category: "Luxury Home",
      result: "Generated 28 qualified leads in first week"
    },
    {
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Modern Apartment Complex",
      category: "Multi-Unit Development",
      result: "70% of units sold pre-construction"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
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
              Property Marketing Services
            </h1>
            
            <div className="w-24 h-1 bg-gold mb-6"></div>
            
            <p className="text-xl text-sand mb-8 max-w-2xl">
              Showcase your property to the right audience with our comprehensive marketing strategies designed to maximize visibility and attract qualified buyers.
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

      {/* Marketing Channels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Multi-Channel Marketing Approach</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage a diverse range of marketing channels to ensure your property reaches the widest possible audience of qualified prospects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingChannels.map((channel, index) => (
              <MarketingChannelCard
                key={index}
                icon={channel.icon}
                title={channel.title}
                description={channel.description}
                delay={index}
              />
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Marketing Process</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive five-step process ensures your property is marketed effectively to attract the right buyers and achieve optimal results.
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

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Success Stories</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successfully marketed properties across Indonesia. Hover over each image to see the results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                image={item.image}
                title={item.title}
                category={item.category}
                result={item.result}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-sand">
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
              See how our property marketing services compare to traditional agencies across Indonesia.
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

      {/* Stats Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "35%", label: "Faster Sales", description: "Average reduction in days on market compared to industry standard" },
              { value: "12%", label: "Higher Value", description: "Average increase in final sale price for marketed properties" },
              { value: "3x", label: "More Leads", description: "Average increase in qualified leads compared to traditional marketing" },
              { value: "98%", label: "Client Satisfaction", description: "Percentage of clients who would recommend our marketing services" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-navy/50 rounded-lg border border-gold/30"
              >
                <h3 className="text-4xl font-bold text-gold mb-2">{stat.value}</h3>
                <p className="text-xl font-semibold text-white mb-2">{stat.label}</p>
                <p className="text-sand text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-navy rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Market Your Property?
                </h2>
                <p className="text-sand mb-6">
                  Schedule a free consultation with our marketing experts today. We'll analyze your property's potential and create a customized marketing strategy.
                </p>
                <ul className="space-y-2 mb-8 text-white">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold mr-2" />
                    <span>Free property assessment and valuation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold mr-2" />
                    <span>Customized marketing proposal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold mr-2" />
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                </ul>
              </div>
              
              <motion.a
                href="https://wa.me/6285123456789?text=I'm%20interested%20in%20a%20free%20property%20marketing%20consultation"
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from property owners who have achieved exceptional results with our marketing services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Surya Wijaya",
                position: "Property Developer",
                quote: "The marketing campaign created by Angkasa Jaya for our luxury apartment complex exceeded all expectations. Their multi-channel approach and stunning visuals helped us sell 70% of units before construction was even completed.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Dewi Sartika",
                position: "Homeowner",
                quote: "I was struggling to sell my villa for months with another agency. Angkasa Jaya's marketing team completely transformed the presentation with professional photography and virtual tours. The property sold within 45 days at a price above my expectations.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Budi Santoso",
                position: "Commercial Property Owner",
                quote: "The targeted digital marketing campaign for my office building generated high-quality leads from day one. Their analytics and reporting gave me complete visibility into the marketing performance, and the space was fully leased in record time.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-navy text-lg">{testimonial.name}</h4>
                    <p className="text-gold">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-gold">
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our property marketing services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What marketing packages do you offer?",
                answer: "We offer three tiers of marketing packages: Essential, Premium, and Elite. Each package includes a different level of services, from professional photography and online listings to comprehensive multi-channel campaigns with virtual tours and targeted digital advertising."
              },
              {
                question: "How long does a typical marketing campaign run?",
                answer: "Our standard marketing campaigns run for 90 days, but we can customize the duration based on your property type and market conditions. We continuously monitor performance and make adjustments to optimize results throughout the campaign."
              },
              {
                question: "Do you handle inquiries from potential buyers?",
                answer: "Yes, our dedicated lead management team qualifies all inquiries and connects serious prospects directly with you or your designated representative. This ensures you only spend time with genuinely interested parties."
              },
              {
                question: "What types of properties do you market?",
                answer: "We market all types of properties across Indonesia, including residential homes, luxury villas, apartments, commercial spaces, office buildings, retail units, and land development opportunities."
              },
              {
                question: "How do you measure marketing success?",
                answer: "We provide comprehensive analytics and reporting on key metrics including impressions, engagement, inquiries, viewings, and ultimately, sale price and time on market. Our transparent reporting gives you complete visibility into campaign performance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sand rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyMarketing;