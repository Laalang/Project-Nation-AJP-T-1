import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Users, 
  Award, 
  MapPin, 
  Calendar, 
  TrendingUp,
  Briefcase,
  GraduationCap,
  Globe
} from 'lucide-react';

// Timeline Item Component
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft, delay }) => {
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
    <div className="relative flex items-center justify-center">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/50"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { 
            opacity: 0, 
            x: isLeft ? -50 : 50 
          },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration: 0.6, 
              delay: delay * 0.2,
              ease: [0.25, 0.1, 0.25, 1.0]
            } 
          }
        }}
        className={`relative w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
      >
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gold">
          <div className="absolute top-6 -mt-1.5 w-6 h-6 rounded-full bg-gold border-4 border-white shadow-md z-10 hidden md:block"
               style={{ [isLeft ? 'right' : 'left']: '-12px' }}></div>
          <span className="inline-block px-4 py-1 bg-navy text-white text-sm rounded-full mb-3">{year}</span>
          <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

// Team Member Card Component
interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  bio: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, bio, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-1">{name}</h3>
        <p className="text-gold font-medium mb-4">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

// Partner Logo Component
interface PartnerLogoProps {
  logo: string;
  name: string;
  delay: number;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ logo, name, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32 hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05, opacity: 1 }}
    >
      <img 
        src={logo} 
        alt={name} 
        className="max-h-16 max-w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  );
};

// Value Card Component
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
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

const AboutUs: React.FC = () => {
  const timelineEvents = [
    {
      year: "2010",
      title: "Humble Beginnings in Jember",
      description: "Angkasa Jaya Propertindo was founded in Jember, East Java, with a small team of 3 passionate property consultants focused on local residential sales.",
      isLeft: true
    },
    {
      year: "2012",
      title: "Expansion to Surabaya",
      description: "Following early success, we opened our second office in Surabaya, expanding our services to East Java's capital and growing our team to 15 professionals.",
      isLeft: false
    },
    {
      year: "2014",
      title: "Jakarta Headquarters Established",
      description: "We established our national headquarters in Jakarta, marking our entry into Indonesia's primary property market and introducing commercial property services.",
      isLeft: true
    },
    {
      year: "2016",
      title: "Bali Office & Tourism Properties",
      description: "Our expansion to Bali introduced specialized services for tourism properties and luxury villas, catering to both domestic and international investors.",
      isLeft: false
    },
    {
      year: "2018",
      title: "Developer Partnerships Program",
      description: "We launched our formal Developer Partnerships Program, creating strategic alliances with Indonesia's leading property developers to offer exclusive opportunities.",
      isLeft: true
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapting to changing market conditions, we implemented comprehensive digital solutions including virtual property tours and online consultation services.",
      isLeft: false
    },
    {
      year: "2023",
      title: "National Reach Achievement",
      description: "Angkasa Jaya reached a significant milestone with presence in 12 major Indonesian cities and a network of over 14 developer partners nationwide.",
      isLeft: true
    },
    {
      year: "2025",
      title: "Looking to the Future",
      description: "Today, we continue our mission to be Indonesia's most trusted property partner, with plans for further expansion and innovation in property services.",
      isLeft: false
    }
  ];

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Budi Santoso",
      position: "Founder & CEO",
      bio: "With over 20 years of experience in Indonesia's property market, Budi founded Angkasa Jaya with a vision to transform property consultation through transparency and client-focused service."
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Siti Rahayu",
      position: "Chief Operations Officer",
      bio: "Siti oversees all operational aspects of Angkasa Jaya, ensuring excellence in service delivery across all regions and implementing innovative processes to enhance client experience."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Arief Wijaya",
      position: "Head of Property Investment",
      bio: "Arief leads our investment consulting division, bringing expertise from his background in finance and real estate economics to help clients maximize their property investment returns."
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Maya Indah",
      position: "Legal Affairs Director",
      bio: "With a specialization in Indonesian property law, Maya ensures all transactions are legally sound and compliant, protecting our clients' interests throughout the property journey."
    }
  ];

  const developerPartners = [
    {
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Sinar Mas Land"
    },
    {
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Ciputra Group"
    },
    {
      logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Agung Podomoro"
    },
    {
      logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Summarecon"
    },
    {
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Pakuwon Group"
    },
    {
      logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Intiland"
    },
    {
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Lippo Group"
    },
    {
      logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Paramount Land"
    }
  ];

  const coreValues = [
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, continuously raising standards to exceed client expectations."
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centered",
      description: "Our clients' needs and goals are at the heart of everything we do, guiding our recommendations and actions."
    },
    {
      icon: <Building2 size={32} />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty, building trust through ethical business practices and accountability."
    },
    {
      icon: <Globe size={32} />,
      title: "Innovation",
      description: "We embrace innovation and continuously evolve our services to address the changing needs of Indonesia's property market."
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
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
              About Angkasa Jaya
            </h1>
            
            <div className="w-24 h-1 bg-gold mb-6"></div>
            
            <p className="text-xl text-sand mb-8 max-w-2xl">
              From our humble beginnings in Jember to becoming Indonesia's trusted property partner, discover the story behind our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Indonesia's Trusted Property Partner</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Angkasa Jaya Propertindo has grown from a small local agency in East Java to one of Indonesia's leading property consultation firms, with a presence in 12 major cities across the archipelago.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been defined by a commitment to excellence, integrity, and client satisfaction. We've helped thousands of clients find their ideal properties, make sound investments, and navigate Indonesia's complex property landscape.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center">
                  <MapPin className="text-gold h-8 w-8 mr-3" />
                  <div>
                    <p className="font-bold text-navy">12 Cities</p>
                    <p className="text-gray-600 text-sm">Nationwide Presence</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="text-gold h-8 w-8 mr-3" />
                  <div>
                    <p className="font-bold text-navy">120+ Experts</p>
                    <p className="text-gray-600 text-sm">Professional Team</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-gold h-8 w-8 mr-3" />
                  <div>
                    <p className="font-bold text-navy">15 Years</p>
                    <p className="text-gray-600 text-sm">Industry Experience</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="text-gold h-8 w-8 mr-3" />
                  <div>
                    <p className="font-bold text-navy">8,500+</p>
                    <p className="text-gray-600 text-sm">Successful Transactions</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Angkasa Jaya Office" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <Building2 className="text-gold h-10 w-10 mr-4" />
                    <div>
                      <p className="font-bold text-navy text-xl">Jakarta HQ</p>
                      <p className="text-gray-600">Established 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline Section */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings in Jember to becoming a nationwide property leader, explore the key milestones that have shaped Angkasa Jaya Propertindo.
            </p>
          </motion.div>

          <div className="relative space-y-12 md:space-y-0 md:py-8">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                isLeft={event.isLeft}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our approach to business and define the Angkasa Jaya experience for our clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead Angkasa Jaya Propertindo with vision, expertise, and a commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                position={member.position}
                bio={member.bio}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Developer Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Developer Partners</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with Indonesia's leading property developers to bring exclusive opportunities to our clients across the archipelago.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {developerPartners.map((partner, index) => (
              <PartnerLogo
                key={index}
                logo={partner.logo}
                name={partner.name}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-sand max-w-2xl mx-auto">
              Recognition of our commitment to excellence and innovation in Indonesia's property industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: "2023",
                award: "Best Property Consultancy Indonesia",
                organization: "Asia Pacific Property Awards"
              },
              {
                year: "2022",
                award: "Excellence in Customer Service",
                organization: "Indonesia Property & Real Estate Awards"
              },
              {
                year: "2021",
                award: "Most Innovative Property Agency",
                organization: "Indonesia Digital Innovation Awards"
              },
              {
                year: "2020",
                award: "Top Property Investment Consultancy",
                organization: "Indonesia Investment Forum"
              },
              {
                year: "2019",
                award: "Best Property Marketing Campaign",
                organization: "Marketing Excellence Awards Indonesia"
              },
              {
                year: "2018",
                award: "Property Agency of the Year",
                organization: "Indonesia Property Awards"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy/50 p-6 rounded-lg border border-gold/30"
              >
                <div className="flex items-center mb-4">
                  <Award className="text-gold h-10 w-10 mr-4" />
                  <span className="text-xl font-bold text-gold">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.award}</h3>
                <p className="text-sand">{achievement.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Join Our Journey
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking for your dream property, seeking investment opportunities, or interested in career possibilities, we invite you to be part of the Angkasa Jaya story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-navy text-white px-8 py-3 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="/careers"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-white px-8 py-3 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Careers
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;