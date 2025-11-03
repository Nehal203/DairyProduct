import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { label: 'Milk & Dairies', path: 'milk-dairies', icon: 'images/dairy.png' },
  { label: 'Sweets', path: 'sweets', icon: '/images/sweets.png' },
  { label: 'Ice Cream', path: 'ice-cream', icon: '/images/icecream.png' },
  { label: 'Beverage', path: 'beverage', icon: '/images/beverages.png' },
  { label: 'Baby Nutrition', path: 'baby-nutrition', icon: '/images/babynutrition.png' },
  { label: 'Organic', path: 'organic', icon: '/images/organic.png' },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;
  const handleCategoryClick = (label) => {
    navigate(`/product?category=${encodeURIComponent(label)}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.main 
      id="home" 
      className="pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-start py-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {categories.map((c, index) => (
            <motion.div 
              key={c.label}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col text-black items-center text-center hover:scale-105 transition-transform duration-200"
              onClick={() => handleCategoryClick(c.label)}
            >
              <div className="cursor-pointer w-28 h-28 rounded-full border-2 border-black flex items-center justify-center bg-white hover:shadow-lg">
                <img 
                  src={c.icon} 
                  alt={c.label} 
                  className="w-22 h-22 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200" 
                />
              </div>
              <p className="mt-3 text-gray-700 font-medium text-sm sm:text-base hover:text-[#39251A] cursor-pointer">
                {c.label}
              </p>
            </motion.div>
          ))}
        </motion.section>
 
        <section className="relative overflow-hidden rounded-lg h-[420px] bg-gray-100">
          <div className="relative w-full h-full">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-300 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  backgroundImage: `url(/images/slider-${index + 1}.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10 md:px-16 max-w-2xl">
              <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl">
                Goodness of milk straight
                <br />
                from the source
              </h1>
              <p className="text-white mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a ultrices viverra congue
                massa nisi orci. Ac maecenas orci gravida lacus mi orci.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="/contact" className="group inline-flex items-center bg-[#E5C96C] hover:bg-white text-[#18555C] px-5 py-2 rounded-md text-sm font-semibold transition">
                  Visit Our Farm
                  <span className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] group-hover:text-[#18555C] group-hover:bg-[#E5C96C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a href="" className="inline-flex items-center border-2 border-white/70 text-white hover:bg-white/10 px-5 py-2 rounded-md text-sm font-semibold transition">
                  Subscribe Now
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src="/images/user1.png" alt="u1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/images/user2.png" alt="u2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/images/user3.png" alt="u3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <p className="text-white font-semibold">Our Happy Client</p>
                  <p className="text-white/80 text-sm">4.8 Review (14k+ clients)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default Home;
