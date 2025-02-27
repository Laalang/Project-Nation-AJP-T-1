import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Coins, Scale, Building } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

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
      className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="bg-navy/10 p-4 rounded-full mb-6">
        <div className="text-navy">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Coins size={32} />,
      title: "Zero Consultation Fees",
      description: "Get expert property advice without any consultation charges. We believe in building relationships before business.",
    },
    {
      icon: <Scale size={32} />,
      title: "Legal & Transparent Process",
      description: "Every transaction is handled with complete legal compliance and transparency, ensuring your peace of mind.",
    },
    {
      icon: <Building size={32} />,
      title: "14+ Trusted Partners",
      description: "Access exclusive properties from our network of 14+ trusted developer partners across Indonesia.",
    }
  ];

  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Angkasa Jaya</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience in Indonesia's property market, we offer unmatched expertise and service that puts your needs first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;