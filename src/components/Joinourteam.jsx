<<<<<<< HEAD
import React, { useState } from 'react';
=======
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Joinourteam = () => {
  const teamMembers = [
    {
      name: 'Nguyen, Shane',
      role: 'Farm Manager',
      img: '/images/team1.jpg',
      socials: {
        twitter: 'https://twitter.com/shane',
        instagram: 'https://instagram.com/shane',
        facebook: 'https://facebook.com/shane'
      }
    },
    {
      name: 'Cooper, Kristin',
      role: 'Quality Head',
      img: '/images/team2.jpg',
      socials: {
        twitter: 'https://twitter.com/kristin',
        instagram: 'https://instagram.com/kristin',
        facebook: 'https://facebook.com/kristin'
      }
    },
    {
      name: 'Henry, Arthur',
      role: 'Nutrition Expert',
      img: '/images/team3.jpg',
      socials: {
        twitter: 'https://twitter.com/arthur',
        instagram: 'https://instagram.com/arthur',
        facebook: 'https://facebook.com/arthur'
      }
    },
    {
      name: 'Flores, Juanita',
      role: 'Client Manager',
      img: '/images/team4.jpg',
      socials: {
        twitter: 'https://twitter.com/juanita',
        instagram: 'https://instagram.com/juanita',
        facebook: 'https://facebook.com/juanita'
      }
    }
  ];

<<<<<<< HEAD
  const testimonials = [
    {
      text:
        '"Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a duis viverra congue massa nisi arcu. Ac maecenas orci auctor gravida lacus mi sit."',
      name: 'Floyd Miles',
      role: 'Dairy Enthusiast',
      avatar: '/images/user2.png',
      rating: 4,
    },
    {
      text:
        '"Absolutely love the freshness! Delivery is always on time and the taste is unmatched. My kids love the ice cream too!"',
      name: 'Savannah Nguyen',
      role: 'Nutrition Blogger',
      avatar: '/images/user1.png',
      rating: 5,
    },
    {
      text:
        '"High quality milk and dairy products. The customer support is very responsive and helpful. Highly recommended."',
      name: 'Jacob Jones',
      role: 'Chef',
      avatar: '/images/user3.png',
      rating: 5,
    },
    {
      text:
        '"Consistency and purity are top-notch. Packaging is great and eco-friendly. Will keep buying!"',
      name: 'Courtney Henry',
      role: 'Food Reviewer',
      avatar: '/images/user1.png',
      rating: 4,
    },
  ];

  const [tIndex, setTIndex] = useState(0);
  const activeTestimonial = testimonials[tIndex] || testimonials[0];
  const handlePrev = () => setTIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setTIndex((i) => (i + 1) % testimonials.length);

=======
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
  return (
    <motion.section
      id="joinourteam"
      className="pt-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <motion.div
        className="w-full bg-[#FFF4ED]"
        variants={item}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            className="flex justify-center items-center gap-2 text-amber-600 text-sm font-semibold"
            variants={item}
          >
            <span className="text-lg">✦</span>
            <motion.span
              className="text-[#3F2C20] font-bold"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Team
            </motion.span>
          </motion.div>

          <motion.h2
            className="text-center text-xl md:text-3xl lg:text-4xl font-semibold text-[#1F1712] mt-3"
            variants={item}
          >
            Meet The Passionate People
            <br className="hidden md:block" /> Behind Our Dairy
          </motion.h2>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                variants={item}
              >
                <motion.div
                  className="bg-white rounded-3xl shadow-sm overflow-hidden h-full"
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <div className="relative">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-64 object-cover" 
                    />
                    <motion.div
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-md px-4 py-3 flex items-center gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {['twitter', 'instagram', 'facebook'].map((social) => {
                        const href = member.socials?.[social];
                        if (!href) return null;
                        
                        return (
                          <motion.a
                            key={social}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social}
                            className="text-amber-500 hover:text-amber-600"
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {social === 'twitter' && (
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="w-5 h-5"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8.09v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              </svg>
                            )}
                            {social === 'instagram' && (
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1.8" 
                                className="w-5 h-5"
                              >
                                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1.3" />
                              </svg>
                            )}
                            {social === 'facebook' && (
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="w-5 h-5"
                              >
                                <path d="M22 12a10 10 0 1 0-11.56 9.9v-7h-2.3V12h2.3V9.8c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12" />
                              </svg>
                            )}
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  </div>
                  <motion.div
                    className="pt-8 pb-5 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="text-[#1F1712] font-semibold">{member.name}</p>
                    <p className="text-[#6B7280] text-sm">{member.role}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="w-full relative"
        variants={item}
      >
        <div className="absolute inset-0 bg-[#39251A] opacity-90">
          <img
            src="/images/testimonial.jpg"
            alt="cows field"
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
            <span className="text-lg">✦</span>
            <span className="text-white">Our Testimonials</span>
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                What Our Happy Customers
                <br /> say About us
              </h3>
              <p className="text-[#E9E2DC] mt-4 text-sm max-w-xl">
                Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a duis viverra congue massa nisi orci. Ac maecenas orci auctor gravida lacus mi sit.
              </p>
              <div className="mt-10 flex items-end gap-6">
                <p className="text-5xl font-extrabold">94%</p>
                <p className="text-lg">Pure Milk, Happy Customers Always.</p>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 md:p-20 border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 text-amber-300">
<<<<<<< HEAD
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <svg
                      key={`star-${i}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
=======
                  {[...Array(4)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                      className="w-5 h-5"
                    >
                      <path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mt-4 text-sm leading-6">
<<<<<<< HEAD
                  {activeTestimonial.text}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{activeTestimonial.name}</p>
                      <p className="text-white/70 text-xs">{activeTestimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white"
                      aria-label="Previous testimonial"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
=======
                  "Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a duis viverra congue massa nisi arcu.
                  Ac maecenas orci auctor gravida lacus mi sit. Ac maecenas orci auctor gravida lacus mi sit."
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      className="w-10 h-10 rounded-full object-cover" 
                      src="/images/user2.png" 
                      alt="Floyd Miles" 
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">Floyd Miles</p>
                      <p className="text-white/70 text-xs">Dairy Enthusiast</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white"
                      aria-label="Previous testimonial"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                        className="w-4 h-4"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
<<<<<<< HEAD
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white"
                      aria-label="Next testimonial"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
=======
                    <button 
                      className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white"
                      aria-label="Next testimonial"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                        className="w-4 h-4"
                      >
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Joinourteam;