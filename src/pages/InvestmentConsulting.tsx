import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart2, 
  TrendingUp, 
  PieChart, 
  CheckCircle, 
  X, 
  MessageCircle,
  DollarSign,
  LineChart,
  Building2,
  Briefcase
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

// Investment Strategy Card component
interface StrategyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ icon, title, description, delay }) => {
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

const InvestmentConsulting: React.FC = () => {
  const processSteps = [
    {
      icon: <BarChart2 size={36} />,
      title: "Market Analysis",
      description: "We conduct comprehensive market research to identify investment opportunities with the highest potential returns across Indonesia's diverse property markets.",
      stepNumber: 1
    },
    {
      icon: <Briefcase size={36} />,
      title: "Portfolio Assessment",
      description: "Our experts evaluate your existing investments and financial goals to create a personalized property investment strategy aligned with your objectives.",
      stepNumber: 2
    },
    {
      icon: <PieChart size={36} />,
      title: "Investment Strategy",
      description: "We develop a tailored investment plan with diversification recommendations, risk assessment, and projected returns for both short and long-term horizons.",
      stepNumber: 3
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Ongoing Optimization",
      description: "Our team continuously monitors market conditions and your portfolio performance, providing regular updates and strategic adjustments to maximize returns.",
      stepNumber: 4
    }
  ];

  const comparisonFeatures = [
    { feature: "Personalized investment strategy", us: true, others: false },
    { feature: "Comprehensive market analysis", us: true, others: true },
    { feature: "Risk assessment and mitigation", us: true, others: false },
    { feature: "Regular portfolio reviews", us: true, others: false },
    { feature: "Access to exclusive investment opportunities", us: true, others: false },
    { feature: "Tax optimization guidance", us: true, others: true },
    { feature: "ROI forecasting and modeling", us: true, others: false },
    { feature: "Exit strategy planning", us: true, others: false },
    { feature: "Cross-regional market insights", us: true, others: false }
  ];

  const investmentStrategies = [
    {
      icon: <Building2 size={32} />,
      title: "Residential Growth",
      description: "Strategic investments in emerging residential areas with high appreciation potential, focusing on Indonesia's rapidly developing urban centers."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Income Generation",
      description: "Portfolio optimization for consistent rental yields and cash flow, targeting properties with strong rental demand and minimal vacancy risks."
    },
    {
      icon: <LineChart size={32} />,
      title: "Value Appreciation",
      description: "Long-term capital growth strategy focusing on properties in locations with infrastructure development and economic expansion plans."
    },
    {
      icon: <PieChart size={32} />,
      title: "Diversification",
      description: "Balanced investment approach across multiple property types and locations to minimize risk and maximize overall portfolio performance."
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
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
              Investment Consulting Services
            </h1>
            
            <div className="w-24 h-1 bg-gold mb-6"></div>
            
            <p className="text-xl text-sand mb-8 max-w-2xl">
              Maximize your property investment returns with strategic guidance from Indonesia's leading real estate investment consultants.
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

      {/* Investment Strategies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Investment Strategies</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our tailored investment approaches designed to meet your financial goals and risk tolerance in Indonesia's dynamic property market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <StrategyCard
                key={index}
                icon={strategy.icon}
                title={strategy.title}
                description={strategy.description}
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Consulting Process</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic four-step approach ensures your property investments are strategically planned, executed, and optimized for maximum returns.
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
              See how our investment consulting services compare to traditional advisors across Indonesia.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Angkasa Jaya</th>
                  <th className="py-4 px-6 text-center">Other Advisors</th>
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
              { value: "18%", label: "Average ROI", description: "Annual return on investment for our client portfolios" },
              { value: "₹12T+", label: "Assets Advised", description: "Total value of property investments under our advisory" },
              { value: "350+", label: "Investors", description: "Active clients trusting our investment expertise" },
              { value: "14", label: "Years Experience", description: "Combined market expertise across Indonesia" }
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
                  Ready to Optimize Your Investment Strategy?
                </h2>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our investment experts today. We'll analyze your current portfolio and identify opportunities to maximize your returns.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Free portfolio assessment and analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Customized investment strategy proposal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Market insights and opportunity identification</span>
                  </li>
                </ul>
              </div>
              
              <motion.a
                href="https://wa.me/6285123456789?text=I'm%20interested%20in%20a%20free%20investment%20consultation"
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
              Hear from investors who have transformed their property portfolios with our strategic consulting services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Bambang Suryanto",
                position: "Real Estate Investor",
                quote: "Angkasa Jaya's investment consulting team helped me diversify my property portfolio across Jakarta and Bali. Their market insights and strategic guidance have increased my annual returns by over 20%.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Lina Wijaya",
                position: "Family Office Director",
                quote: "We've worked with Angkasa Jaya for three years to manage our family's property investments. Their analytical approach and deep market knowledge have been instrumental in optimizing our portfolio's performance.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Hadi Gunawan",
                position: "International Investor",
                quote: "As a foreign investor in Indonesia's property market, Angkasa Jaya's consulting services have been invaluable. They've helped me navigate regulatory complexities while identifying high-performing investment opportunities.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
              Get answers to common questions about our investment consulting services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is the minimum investment amount you work with?",
                answer: "We work with investors across various portfolio sizes, but typically our services are most beneficial for property investments starting from Rp 1 billion. However, we also offer specialized advisory packages for emerging investors with smaller portfolios who are looking to grow strategically."
              },
              {
                question: "How do you charge for your investment consulting services?",
                answer: "We offer several fee structures to suit different investor needs. These include fixed consulting fees for specific projects, retainer-based ongoing advisory services, and performance-based fees for certain investment strategies. During your initial consultation, we'll recommend the most appropriate structure based on your portfolio size and objectives."
              },
              {
                question: "Do you provide advice on international property investments?",
                answer: "Yes, while our primary expertise is in Indonesia's property market, we also offer consulting services for international property investments, particularly in Southeast Asia and select global markets. Our international advisory team has experience in cross-border transactions and can help optimize your global property portfolio."
              },
              {
                question: "How often will I receive updates on my investment strategy?",
                answer: "Clients receive quarterly comprehensive portfolio reviews and performance reports. Additionally, we provide monthly market updates and immediate notifications for time-sensitive opportunities or market changes that might impact your investment strategy. Our client portal also offers real-time access to your portfolio performance metrics."
              },
              {
                question: "Can you help with financing and tax optimization for property investments?",
                answer: "Yes, our comprehensive consulting services include guidance on optimal financing structures for property acquisitions and tax-efficient investment strategies. We work with a network of financial institutions and tax specialists to ensure your property investments are structured for maximum after-tax returns while maintaining compliance with all regulations."
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

export default InvestmentConsulting;