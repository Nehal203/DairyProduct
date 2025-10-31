import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Ourexpertise = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const faqs = [
    {
      q: 'How is your milk different from store-bought milk?',
      a: 'Store-bought milk is typically pasteurized to kill harmful bacteria, while raw milk is not. The main differences are safety processing, processing methods, and, in some cases, fat content and other additives like vitamins.',
    },
    {
      q: 'How do you ensure the quality and safety of your milk?',
      a: 'Milk quality and safety are ensured through strict farm-level practices, processing standards, and careful handling. This includes hygiene, sanitization, and regular testing for contaminants.',
    },
    {
      q: 'What makes your dairy farm special?',
      a: 'We focus on sustainable farming, animal wellness, and transparent sourcing to deliver truly fresh, ethical dairy products.',
    },
    {
      q: 'Can I customize my delivery schedule?',
      a: 'Yes. Choose daily, alternate-day, or custom weekly schedules, and pause or resume anytime from your account.',
    },
    {
      q: 'How do you ensure milk quality and hygiene?',
      a: 'From on-farm hygiene to sealed, food-grade packaging, we follow rigorous protocols to ensure clean, high-quality milk.',
    },
    {
      q: 'Do you offer home delivery services?',
      a: 'Yes, we offer convenient home delivery with reliable time slots in supported areas.',
    },
    {
      q: 'Are your cows treated humanely?',
      a: 'Absolutely. Our cows have ample space, regular veterinary care, balanced nutrition, and no routine growth hormones.',
    },
  ];

  return (
    <motion.section 
      id="ourexpertise" 
      className="pt-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer(0.1, 0.1)}
    >
      <div className="w-full bg-[#FAF1EA]">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.div 
            className="flex items-center gap-2 text-amber-600 text-sm font-semibold"
            variants={fadeIn('up', 'spring', 0.2, 1)}
          >
            <span className="text-lg">✦</span>
            <span className="text-[#3F2C20]">Our Expertise</span>
          </motion.div>

          <motion.div 
            className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            variants={staggerContainer(0.1, 0.1)}
          >
            <motion.div 
              className="mt-6 grid grid-cols-1 gap-10 items-center"
              variants={staggerContainer(0.1, 0.1)}
            >
              <motion.div variants={fadeIn('right', 'spring', 0.2, 1)}>
                <motion.h2 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F1712] leading-tight"
                  variants={textVariant(0.2)}
                >
                  Our Expertise in Sustainable
                  <br /> and Ethical Dairy
                </motion.h2>
                <motion.p 
                  className="text-black mt-4 text-sm md:text-base max-w-xl"
                  variants={fadeIn('right', 'spring', 0.3, 1)}
                >
                  We bring deep expertise in sustainable farming, animal wellness, and nutritional science. Our dairy
                  practices deliver true health from farm to fridge.
                </motion.p>

                <motion.div 
                  className="mt-6 flex flex-wrap gap-4 text-sm font-semibold"
                  variants={fadeIn('right', 'spring', 0.4, 1)}
                >
                  <motion.div 
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-[#3F2C20] shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -3 }}
                  >
                    <span className="text-amber-600">✦</span>
                    <span>Ethical Dairy Farming</span>
                  </motion.div>
                  <motion.div 
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-[#3F2C20] shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -3 }}
                  >
                    <span className="text-amber-600">✦</span>
                    <span>Sustainable Agriculture</span>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="mt-8 space-y-6"
                  variants={fadeIn('right', 'spring', 0.5, 1)}
                >
                  <div>
                    <div className="flex items-center justify-between text-[#3F2C20] text-sm mb-2">
                      <span>Sustainable Agriculture</span>
                      <span className="font-semibold">94%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                      <motion.div 
                        className="h-1.5 rounded-full bg-amber-500" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '94%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-[#3F2C20] text-sm mb-2">
                      <span>Digestive Health</span>
                      <span className="font-semibold">76%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                      <motion.div 
                        className="h-1.5 rounded-full bg-amber-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '76%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative w-full"
              variants={fadeIn('left', 'spring', 0.4, 1)}
            >
              <motion.div 
                className="relative max-w-md ml-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  src="/images/expertise1.jpg"
                  alt="farmer main"
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />

                <motion.img
                  src="/images/expertise2.jpg"
                  alt="milk glass"
                  className="absolute -left-8 -top-6 w-36 h-28 object-cover rounded-xl border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                />

                <motion.img
                  src="/images/expertise3.jpg"
                  alt="meeting"
                  className="absolute -left-6 bottom-8 w-40 h-28 object-cover rounded-xl border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="w-full bg-[#39251A]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer(0.1, 0.1)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeIn('right', 'spring', 0.2, 1)}
            >
              <motion.div 
                className="flex items-center gap-2 text-amber-300 text-sm font-semibold"
                variants={fadeIn('up', 'spring', 0.3, 1)}
              >
                <span className="text-lg">✦</span>
                <span className='text-white'>FAQ</span>
              </motion.div>
              <motion.h3 
                className="text-white text-3xl md:text-4xl font-extrabold leading-tight mt-4 max-w-lg"
                variants={fadeIn('up', 'spring', 0.4, 1)}
              >
                Common questions about
                <br /> our fresh milk
              </motion.h3>
              <motion.p 
                className="text-[#E9E2DC] mt-4 text-md max-w-lg"
                variants={fadeIn('up', 'spring', 0.5, 1)}
              >
                Have questions about our dairy products? We've got answers. Here are some of the most common questions we receive about our fresh milk and farming practices.
              </motion.p>

              <motion.div 
                className="mt-8 w-full max-w-xs bg-[#FDC040] text-[#3F2C20] rounded-2xl p-6 shadow-lg"
                variants={fadeIn('up', 'spring', 0.6, 1)}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className="text-sm font-semibold">Need more information?</p>
                <p className="text-sm mt-1 font-medium">Call us at: (+1) 555-123-4567</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn('right', 'spring', 0.2, 1)}
            >
              <motion.ul 
                className="divide-y divide-white/15"
                variants={staggerContainer(0.05, 0.1)}
              >
                {faqs.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="py-4 overflow-hidden"
                    variants={fadeIn('up', 'spring', 0.1 * (i + 1), 0.5)}
                  >
                    <motion.button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      aria-expanded={openIndex === i}
                      className="w-full flex items-center justify-between text-left text-white/90 hover:text-white focus:outline-none"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-base font-bold">{item.q}</span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5 opacity-70"
                        animate={{ rotate: openIndex === i ? 90 : 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <path d="m9 6 6 6-6 6" />
                      </motion.svg>
                    </motion.button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === i ? 'auto' : 0,
                        opacity: openIndex === i ? 1 : 0,
                      }}
                      className="overflow-hidden"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="mt-2 text-[#E9E2DC] text-sm">{item.a}</div>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Ourexpertise;
