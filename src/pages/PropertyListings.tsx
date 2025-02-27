import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Search, Filter, ChevronDown, X } from 'lucide-react';

// Property Card Component
interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  isHotDeal?: boolean;
  index: number;
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
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover"
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

// Filter Dropdown Component
interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <span>{value || label}</span>
        <ChevronDown className="h-4 w-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div 
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              onChange('');
              setIsOpen(false);
            }}
          >
            All {label}s
          </div>
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Component
const PropertyListings: React.FC = () => {
  // Filter states
  const [province, setProvince] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Properties data
  const [properties, setProperties] = useState<PropertyCardProps[]>([
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Modern Villa with Pool",
      price: "Rp 5.2 Billion",
      location: "Seminyak, Bali",
      bedrooms: 4,
      bathrooms: 3,
      area: "350m²",
      isHotDeal: true,
      index: 0
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Apartment",
      price: "Rp 3.8 Billion",
      location: "Menteng, Jakarta",
      bedrooms: 3,
      bathrooms: 2,
      area: "180m²",
      isHotDeal: false,
      index: 1
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Beachfront Residence",
      price: "Rp 7.5 Billion",
      location: "Nusa Dua, Bali",
      bedrooms: 5,
      bathrooms: 4,
      area: "420m²",
      isHotDeal: true,
      index: 2
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Modern Office Space",
      price: "Rp 12 Billion",
      location: "SCBD, Jakarta",
      bedrooms: 0,
      bathrooms: 4,
      area: "750m²",
      isHotDeal: false,
      index: 3
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Hillside Villa",
      price: "Rp 8.9 Billion",
      location: "Ubud, Bali",
      bedrooms: 6,
      bathrooms: 5,
      area: "520m²",
      isHotDeal: false,
      index: 4
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Modern Family Home",
      price: "Rp 2.7 Billion",
      location: "Bandung, West Java",
      bedrooms: 4,
      bathrooms: 3,
      area: "280m²",
      isHotDeal: true,
      index: 5
    }
  ]);
  
  // Filtered properties
  const [filteredProperties, setFilteredProperties] = useState<PropertyCardProps[]>(properties);
  const [visibleProperties, setVisibleProperties] = useState<number>(6);
  
  // Filter options
  const provinces = ["Bali", "Jakarta", "West Java", "East Java", "Yogyakarta"];
  const priceRanges = ["Under Rp 1 Billion", "Rp 1-3 Billion", "Rp 3-5 Billion", "Rp 5-10 Billion", "Above Rp 10 Billion"];
  const propertyTypes = ["Villa", "Apartment", "House", "Office", "Land"];
  
  // Apply filters
  useEffect(() => {
    let filtered = [...properties];
    
    // Filter by province
    if (province) {
      filtered = filtered.filter(property => property.location.includes(province));
    }
    
    // Filter by price range
    if (priceRange) {
      // This is a simplified example. In a real app, you'd parse the price values properly.
      if (priceRange === "Under Rp 1 Billion") {
        filtered = filtered.filter(property => parseFloat(property.price.replace("Rp ", "").replace(" Billion", "")) < 1);
      } else if (priceRange === "Rp 1-3 Billion") {
        filtered = filtered.filter(property => {
          const price = parseFloat(property.price.replace("Rp ", "").replace(" Billion", ""));
          return price >= 1 && price <= 3;
        });
      } else if (priceRange === "Rp 3-5 Billion") {
        filtered = filtered.filter(property => {
          const price = parseFloat(property.price.replace("Rp ", "").replace(" Billion", ""));
          return price > 3 && price <= 5;
        });
      } else if (priceRange === "Rp 5-10 Billion") {
        filtered = filtered.filter(property => {
          const price = parseFloat(property.price.replace("Rp ", "").replace(" Billion", ""));
          return price > 5 && price <= 10;
        });
      } else if (priceRange === "Above Rp 10 Billion") {
        filtered = filtered.filter(property => parseFloat(property.price.replace("Rp ", "").replace(" Billion", "")) > 10);
      }
    }
    
    // Filter by property type
    if (propertyType) {
      filtered = filtered.filter(property => property.title.includes(propertyType));
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Update index for animation
    filtered = filtered.map((property, index) => ({
      ...property,
      index
    }));
    
    setFilteredProperties(filtered);
  }, [province, priceRange, propertyType, searchQuery, properties]);
  
  // Reset filters
  const resetFilters = () => {
    setProvince('');
    setPriceRange('');
    setPropertyType('');
    setSearchQuery('');
  };
  
  // Load more properties
  const loadMore = () => {
    setVisibleProperties(prev => prev + 6);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', 
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
              Property Listings
            </h1>
            
            <div className="w-24 h-1 bg-gold mb-6"></div>
            
            <p className="text-xl text-sand mb-8 max-w-2xl">
              Discover your perfect property from our curated selection of premium listings across Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-gold focus:border-gold sm:text-sm"
                  placeholder="Search by location or property name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-3">
                <FilterDropdown 
                  label="Province" 
                  options={provinces} 
                  value={province} 
                  onChange={setProvince} 
                />
                
                <FilterDropdown 
                  label="Price Range" 
                  options={priceRanges} 
                  value={priceRange} 
                  onChange={setPriceRange} 
                />
                
                <FilterDropdown 
                  label="Property Type" 
                  options={propertyTypes} 
                  value={propertyType} 
                  onChange={setPropertyType} 
                />
                
                {/* Reset Filters Button */}
                {(province || priceRange || propertyType || searchQuery) && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-navy hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="py-12 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-bold text-navy">
              {filteredProperties.length} Properties Found
            </h2>
            
            <div className="flex items-center text-sm text-gray-600">
              <Filter className="h-4 w-4 mr-1" />
              <span>Filters Applied: {[province, priceRange, propertyType, searchQuery ? 'Search' : ''].filter(Boolean).length}</span>
            </div>
          </div>
          
          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.slice(0, visibleProperties).map((property, index) => (
                <PropertyCard
                  key={index}
                  {...property}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-md inline-block"
              >
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-2">No Properties Found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search filters to find more properties.</p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gold text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            </div>
          )}
          
          {/* Load More Button */}
          {filteredProperties.length > visibleProperties && (
            <div className="text-center mt-12">
              <motion.button
                onClick={loadMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-navy text-white px-8 py-3 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Load More Properties
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Regions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Explore Properties by Region</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover properties in Indonesia's most sought-after locations, from vibrant cities to tranquil beachfront destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Bali", count: 37, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Jakarta", count: 45, image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Bandung", count: 23, image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Yogyakarta", count: 18, image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden h-48 group cursor-pointer"
              >
                <img 
                  src={region.image} 
                  alt={region.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{region.name}</h3>
                  <p>{region.count} Properties</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-navy rounded-xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-sand mb-8">
                Let our property experts help you find your dream property. We have access to exclusive listings not available on our website.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gold text-white px-8 py-3 rounded-md font-poppins font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Contact Our Property Experts
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyListings;