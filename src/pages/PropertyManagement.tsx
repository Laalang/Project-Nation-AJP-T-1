import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ClipboardList, 
  Users, 
  BarChart2, 
  CheckCircle, 
  X, 
  MessageCircle,
  Shield,
  Wrench,
  Calendar,
  DollarSign
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
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-gold"
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

const PropertyManagement: React.FC = () => {
  const processSteps = [
    {
      icon: <ClipboardList size={36} />,
      title: "Property Assessment",
      description: "We conduct a thorough evaluation of your property, identifying opportunities for improvement and creating a customized management plan.",
      stepNumber: 1
    },
    {
      icon: <Users size={36} />,
      title: "Tenant Management",
      description: "Our team handles tenant screening, lease agreements, rent collection, and addressing tenant concerns promptly and professionally.",
      stepNumber: 2
    },
    {
      icon: <Wrench size={36} />,
      title: "Maintenance & Upkeep",
      description: "We coordinate regular maintenance, emergency repairs, and property improvements with our network of trusted contractors.",
      stepNumber: 3
    },
    {
      icon: <BarChart2 size={36} />,
      title: "Financial Reporting",
      description: "Receive detailed monthly reports on property performance, income, expenses, and recommendations for maximizing your investment returns.",
      stepNumber: 4
    }
  ];

  const comparisonFeatures = [
    { feature: "24/7 emergency response", us: true, others: false },
    { feature: "Dedicated property manager", us: true, others: true },
    { feature: "Online owner portal", us: true, others: false },
    { feature: "Tenant screening & verification", us: true, others: true },
    { feature: "Regular property inspections", us: true, others: false },
    { feature: "Detailed financial reporting", us: true, others: false },
    { feature: "Preventive maintenance program", us: true, others: false },
    { feature: "Legal compliance management", us: true, others: true },
    { feature: "Transparent fee structure", us: true, others: false }
  ];

  const services = [
    {
      icon: <Users size={32} />,
      title: "Tenant Relations",
      description: "Professional tenant screening, lease management, and responsive communication to ensure quality tenants and minimize vacancies."
    },
    {
      icon: <Wrench size={32} />,
      title: "Maintenance Management",
      description: "Coordinated property maintenance, emergency repairs, and improvement projects with trusted contractors."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Financial Management",
      description: "Rent collection, expense tracking, and detailed financial reporting to maximize your property's profitability."
    },
    {
      icon: <Calendar size={32} />,
      title: "Inspection Services",
      description: "Regular property inspections to identify and address issues before they become costly problems."
    },
    {
      icon: <Shield size={32} />,
      title: "Legal Compliance",
      description: "Ensuring your property meets all local regulations and legal requirements to avoid potential liabilities."
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Performance Optimization",
      description: "Strategic recommendations to enhance property value and increase rental income over time."
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
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
              Property Management Services
            </h1>
            
            <div className="w-24 h-1 bg-gold mb-6"></div>
            
            <p className="text-xl text-sand mb-8 max-w-2xl">
              Maximize your property's potential with our comprehensive management solutions. Let us handle the details while you enjoy the returns.
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Comprehensive Management Services</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our full-service property management solutions are designed to protect your investment and maximize returns.
            </p>
          </motion.div>

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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Management Process</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures your property is managed efficiently and professionally at every stage.
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
              See how our property management services compare to other providers across Indonesia.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Angkasa Jaya</th>
                  <th className="py-4 px-6 text-center">Other Providers</th>
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
              { value: "98%", label: "Occupancy Rate", description: "Average occupancy rate across our managed properties" },
              { value: "24h", label: "Response Time", description: "Maximum response time for maintenance requests" },
              { value: "15%", label: "Higher Returns", description: "Average increase in rental income for our clients" },
              { value: "500+", label: "Properties Managed", description: "Across Indonesia's major cities and regions" }
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
                  Ready to Optimize Your Property Investment?
                </h2>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our property management experts today. We'll analyze your property's potential and create a customized management plan.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free property assessment and valuation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Customized management proposal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Transparent fee structure with no hidden costs</span>
                  </li>
                </ul>
              </div>
              
              <motion.a
                href="https://wa.me/6285123456789?text=I'm%20interested%20in%20a%20free%20property%20management%20consultation"
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
              Hear from property owners who have transformed their investment experience with our management services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Hendra Wijaya",
                location: "Jakarta",
                quote: "Since Angkasa Jaya took over management of my apartment building, occupancy has increased by 20% and my rental income has grown significantly. Their team is professional and proactive.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Rina Hartono",
                location: "Bali",
                quote: "As an overseas investor, I needed a reliable team to manage my villa in Bali. Angkasa Jaya has exceeded my expectations with their detailed reporting and excellent tenant selection.",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Agus Santoso",
                location: "Surabaya",
                quote: "Their preventive maintenance program has saved me thousands in potential repair costs. The online owner portal gives me complete visibility into my property's performance.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sand p-6 rounded-lg shadow-md"
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
              Get answers to common questions about our property management services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What are your management fees?",
                answer: "Our management fees typically range from 8-12% of the monthly rental income, depending on the property type, size, and specific services required. We provide a transparent fee structure with no hidden costs."
              },
              {
                question: "How do you screen potential tenants?",
                answer: "We conduct thorough background checks including credit history, employment verification, previous rental history, and criminal background checks to ensure we select reliable, responsible tenants."
              },
              {
                question: "How quickly do you respond to maintenance issues?",
                answer: "We respond to all maintenance requests within 24 hours. Emergency issues are addressed immediately through our 24/7 emergency response system."
              },
              {
                question: "What areas of Indonesia do you service?",
                answer: "We currently provide property management services in Jakarta, Bali, Surabaya, Bandung, Yogyakarta, and surrounding areas. We're continuously expanding to new regions."
              },
              {
                question: "How often will I receive reports about my property?",
                answer: "Property owners receive detailed monthly financial reports and property performance updates. We also provide quarterly inspection reports and annual investment performance reviews."
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

export default PropertyManagement;