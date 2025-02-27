import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Scale, 
  FileText, 
  Shield, 
  CheckCircle, 
  X, 
  MessageCircle,
  Gavel,
  BookOpen,
  Building,
  Users
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
        {stepNumber < 4 && (
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

// Service Card component
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-gold"
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

const LegalSupport: React.FC = () => {
  const processSteps = [
    {
      icon: <FileText size={36} />,
      title: "Document Review",
      description: "Our legal experts thoroughly examine all property-related documents to identify potential issues and ensure compliance with Indonesian property laws.",
      stepNumber: 1
    },
    {
      icon: <Scale size={36} />,
      title: "Legal Assessment",
      description: "We conduct a comprehensive legal assessment of the property transaction, identifying risks and providing clear guidance on legal requirements and obligations.",
      stepNumber: 2
    },
    {
      icon: <Shield size={36} />,
      title: "Compliance Assurance",
      description: "Our team ensures all aspects of your property transaction comply with local regulations, tax laws, and zoning requirements to prevent future legal complications.",
      stepNumber: 3
    },
    {
      icon: <Gavel size={36} />,
      title: "Transaction Security",
      description: "We secure your property rights through proper documentation, registration, and legal protection measures, safeguarding your investment for the long term.",
      stepNumber: 4
    }
  ];

  const comparisonFeatures = [
    { feature: "Property document verification", us: true, others: true },
    { feature: "Title search and certification", us: true, others: true },
    { feature: "Regulatory compliance review", us: true, others: false },
    { feature: "Tax optimization guidance", us: true, others: false },
    { feature: "Contract drafting and review", us: true, others: true },
    { feature: "Dispute resolution support", us: true, others: false },
    { feature: "Foreign ownership guidance", us: true, others: false },
    { feature: "Inheritance planning", us: true, others: false },
    { feature: "Ongoing legal support", us: true, others: false }
  ];

  const legalServices = [
    {
      icon: <Building size={32} />,
      title: "Property Acquisition",
      description: "Comprehensive legal support for buying property, including title verification, contract review, and regulatory compliance to ensure a secure purchase."
    },
    {
      icon: <FileText size={32} />,
      title: "Contract Management",
      description: "Expert drafting and review of all property-related contracts, from purchase agreements to leases, ensuring your interests are protected."
    },
    {
      icon: <Users size={32} />,
      title: "Foreign Ownership",
      description: "Specialized guidance for international investors navigating Indonesia's foreign ownership regulations and structuring compliant property investments."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Regulatory Compliance",
      description: "Ongoing support to ensure your property investments remain compliant with Indonesia's evolving property laws and regulations."
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
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
              Legal Support Services
            </h1>
            
            <div className="w-24 h-1 bg-gold mb-6"></div>
            
            <p className="text-xl text-sand mb-8 max-w-2xl">
              Navigate Indonesia's complex property laws with confidence through our comprehensive legal support services.
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

      {/* Legal Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Legal Services</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal support for all aspects of property ownership and transactions in Indonesia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalServices.map((service, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Legal Process</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic four-step approach ensures your property transactions are legally sound and your investments are protected.
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
              See how our legal support services compare to traditional property law firms across Indonesia.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Angkasa Jaya</th>
                  <th className="py-4 px-6 text-center">Other Firms</th>
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
              { value: "1,200+", label: "Transactions Secured", description: "Property transactions successfully completed with legal protection" },
              { value: "100%", label: "Compliance Rate", description: "All transactions fully compliant with Indonesian property laws" },
              { value: "15+", label: "Legal Specialists", description: "Dedicated property law experts on our team" },
              { value: "₹8T+", label: "Transaction Value", description: "Total value of legally secured property transactions" }
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
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  Need Legal Support for Your Property?
                </h2>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our legal experts today. We'll review your situation and provide clear guidance on your next steps.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free initial legal assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Clear explanation of legal requirements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Transparent fee structure with no hidden costs</span>
                  </li>
                </ul>
              </div>
              
              <motion.a
                href="https://wa.me/6285123456789?text=I'm%20interested%20in%20a%20free%20legal%20consultation%20for%20my%20property"
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
      <section className="py-20 bg-white">
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
              Hear from clients who have successfully navigated property legal challenges with our support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rudi Hartono",
                position: "Property Developer",
                quote: "Angkasa Jaya's legal team helped us resolve a complex land title dispute that had stalled our development project for months. Their expertise in Indonesian property law was invaluable.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Sarah Johnson",
                position: "Foreign Investor",
                quote: "As a foreign investor, navigating Indonesia's property ownership laws seemed daunting until I worked with Angkasa Jaya. They structured a legally compliant investment that protected my interests.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Budi Santoso",
                position: "Property Owner",
                quote: "When inheritance issues complicated my property ownership, Angkasa Jaya provided clear legal guidance and documentation that secured my rights and prevented potential family disputes.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sand p-8 rounded-lg shadow-md"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sand">
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
              Get answers to common questions about property legal matters in Indonesia.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What are the key legal documents needed for property transactions in Indonesia?",
                answer: "Essential documents include the Certificate of Land Ownership (SHM), Building Permit (IMB), Tax Object Sale Value (NJOP), Land and Building Tax (PBB) receipts, and identity documents of all parties. Our legal team verifies all these documents and identifies any additional requirements based on your specific transaction."
              },
              {
                question: "Can foreigners legally own property in Indonesia?",
                answer: "Indonesia has restrictions on foreign property ownership. Foreigners can obtain usage rights (Hak Pakai) for residential properties for up to 80 years, or utilize nominee structures with proper legal safeguards. Our legal team specializes in creating compliant ownership structures for foreign investors."
              },
              {
                question: "What legal issues should I be aware of when buying pre-construction property?",
                answer: "Pre-construction purchases involve additional legal considerations including developer credentials, construction permits, project financing, completion guarantees, and specification compliance. Our legal support includes thorough due diligence on the developer and project to protect your investment."
              },
              {
                question: "How do you handle property disputes?",
                answer: "We employ a strategic approach to property disputes, beginning with thorough document review and negotiation attempts. If necessary, we provide representation in mediation, arbitration, or court proceedings, always prioritizing efficient and cost-effective resolution strategies."
              },
              {
                question: "What legal services do you provide for commercial property transactions?",
                answer: "Our commercial property legal services include zoning and land use verification, environmental compliance assessment, commercial lease drafting and review, strata title arrangements, and complex ownership structure creation. We also provide ongoing compliance monitoring for commercial property owners."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
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

export default LegalSupport;