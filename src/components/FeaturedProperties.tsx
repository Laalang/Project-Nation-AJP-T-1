import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  isHotDeal?: boolean;
  delay: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  isHotDeal = false,
  delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover"
          loading="lazy"
          width="400"
          height="224"
        />
        {isHotDeal && (
          <div className="absolute top-4 right-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: [0.8, 1.1, 0.9, 1], opacity: [0.8, 1, 0.9, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              className="bg-gold text-white font-bold py-1 px-3 rounded-full text-sm shadow-lg"
            >
              Hot Deal
            </motion.div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-navy/80 to-transparent h-20"></div>
        <div className="absolute bottom-3 left-4">
          <p className="text-white font-bold text-xl">{price}</p>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg text-navy mb-2 line-clamp-1">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 text-gold mr-1" />
          <p className="text-sm line-clamp-1">{location}</p>
        </div>
        
        <hr className="my-3 border-gray-200" />
        
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Home className="h-4 w-4 text-gold mr-1" />
            <span>{bedrooms} Beds</span>
          </div>
          <div>
            <span>{bathrooms} Baths</span>
          </div>
          <div>
            <span>{area}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Modern Villa with Pool",
      price: "Rp 5.2 Billion",
      location: "Seminyak, Bali",
      bedrooms: 4,
      bathrooms: 3,
      area: "350m²",
      isHotDeal: true
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Apartment",
      price: "Rp 3.8 Billion",
      location: "Menteng, Jakarta",
      bedrooms: 3,
      bathrooms: 2,
      area: "180m²",
      isHotDeal: false
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Beachfront Residence",
      price: "Rp 7.5 Billion",
      location: "Nusa Dua, Bali",
      bedrooms: 5,
      bathrooms: 4,
      area: "420m²",
      isHotDeal: true
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Modern Office Space",
      price: "Rp 12 Billion",
      location: "SCBD, Jakarta",
      bedrooms: 0,
      bathrooms: 4,
      area: "750m²",
      isHotDeal: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Properties</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across Indonesia's most desirable locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              price={property.price}
              location={property.location}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              isHotDeal={property.isHotDeal}
              delay={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            href="/listings"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-navy text-white px-8 py-3 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            View All Properties
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;