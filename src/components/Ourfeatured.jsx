import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const Ourfeatured = () => {
  return (
    <motion.section
      id="ourfeatured"
      className="pt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="w-full bg-[#FFF4ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            className="flex justify-center items-center gap-2 text-amber-600 text-sm font-semibold"
            variants={item}
          >
            <span className="text-lg">✦</span>
            <span className="text-[#3F2C20] font-bold">Our Feature</span>
          </motion.div>
          <motion.h2
            className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1F1712] mt-3"
            variants={item}
          >
            Discover the features that
            <br className="hidden md:block" /> define our dairy
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-sm border border-amber-100 bg-transparent"
              variants={item}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <img
                src="/images/dairy.jpg"
                alt="Dairy plant"
                className="w-full h-64 object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-transparent rounded-2xl p-6 flex flex-col justify-between"
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="flex items-start justify-between">
                <motion.p
                  className="text-6xl font-bold text-[#111827]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                >
                  94%
                </motion.p>
                <motion.div
                  className="text-amber-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />
                  </svg>
                </motion.div>
              </div>
              <div className="mt-4">
                <motion.h3
                  className="text-lg font-bold text-[#111827]"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Education Support
                </motion.h3>
                <motion.p
                  className="text-base text-[#6B7280] text-black mt-1"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Provide essential healthcare services and resources to communities
                </motion.p>
              </div>

            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-sm border border-amber-100 bg-transparent"
              variants={item}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <img
                src="/images/cows.jpg"
                alt="cows"
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div
              className="bg-transparent rounded-2xl p-6 flex flex-col justify-between"
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="flex items-start justify-between">
                <motion.p
                  className="text-6xl font-bold text-[#111827]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring' }}
                >
                  95%
                </motion.p>
                <motion.div
                  className="text-amber-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <img src="/images/leaves.png" alt="leaves" />
                </motion.div>
              </div>
              <div className="mt-4">
                <motion.h3
                  className="text-lg font-bold text-[#111827]"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Food Support
                </motion.h3>
                <motion.p
                  className="text-base text-[#6B7280] text-black mt-1"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Provide essential healthcare services and resources to communities
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-sm border border-amber-100 bg-transparent"
              variants={item}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <img
                src="/images/farm.jpg"
                alt="Farm"
                className="w-full h-64 object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-transparent rounded-2xl p-6"
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="flex items-start justify-between">
                <motion.p
                  className="text-6xl font-bold text-[#111827]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  96%
                </motion.p>
                <motion.div
                  className="text-amber-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <img src="/images/star.png" alt="star" />
                </motion.div>
              </div>
              <div className="mt-4">
                <motion.h3
                  className="text-lg font-bold text-[#111827]"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Naturally Raised, Happy Cows
                </motion.h3>
                <motion.p
                  className="text-base text-[#6B7280] text-black mt-1"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Provide essential healthcare services and resources to communities
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div >

      <motion.div
        className="w-full bg-[#2C1E16]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              className="flex items-center gap-2 text-amber-400 text-sm font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="text-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
              <span>Why Choose Us</span>
            </motion.div>
            <motion.h3
              className="text-white text-2xl md:text-3xl font-bold mt-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Where freshness and trust
              <br /> come together daily
            </motion.h3>
            <motion.p
              className="text-[#D6CEC8] mt-4 text-sm leading-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We go beyond just delivering milk — we deliver trust, purity, and a
              promise of health. Every drop of milk comes from well-cared-for cows,
              raised in a clean and natural environment.
            </motion.p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="flex items-center gap-3 bg-[#3A2A21] rounded-xl px-4 py-3 text-[#E8E1DB]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.span
                  className="text-amber-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M20 6 9 17l-5-5" /></svg>
                </motion.span>
                <span>100% Pure and Fresh Milk</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-[#3A2A21] rounded-xl px-4 py-3 text-[#E8E1DB]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.span
                  className="text-amber-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M20 6 9 17l-5-5" /></svg>
                </motion.span>
                <span>Ethically Raised, Grass-Fed Cows</span>
              </motion.div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="flex items-center gap-3 bg-[#2A1E17] rounded-xl px-4 py-3 text-[#E8E1DB] border border-[#4A382D]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.span
                  className="text-[#F59E0B]"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.001 10h2v5h-2z" /><path d="M12 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z" /></svg>
                </motion.span>
                <span>Inconsistent Milk Quality</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-[#2A1E17] rounded-xl px-4 py-3 text-[#E8E1DB] border border-[#4A382D]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.span
                  className="text-[#F59E0B]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2V7h2Zm-1 4a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 21Z" /></svg>
                </motion.span>
                <span>Lack of Trust in Local Vendors</span>
              </motion.div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src="/images/user1.png" alt="avatar" />
                <div>
                  <p className="text-white text-sm font-semibold">Sarah Mitchell</p>
                  <p className="text-[#D6CEC8] text-xs">Marketing Director</p>
                </div>
              </div>


              <motion.a
                href="#"
                className="group inline-flex items-center bg-[#E5C96C] hover:bg-white text-[#18555C] px-5 py-2 rounded-md text-sm font-bold transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Join Our Milk Dairy
                <motion.span
                  className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] group-hover:text-[#18555C] group-hover:bg-[#E5C96C] text-white"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </motion.a>


            </div>
          </div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="col-span-2 bg-[#3A2A21] rounded-2xl overflow-hidden p-2"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <img
                src="/images/farmer.jpg"
                alt="Processing milk"
                className="w-full h-80 object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              className="bg-[#3A2A21] rounded-2xl overflow-hidden p-2 flex flex-col gap-4"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <img
                src="/images/farmer1.jpg"
                alt="Farmer"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              className="col-span-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/10 rounded-2xl p-2 w-fit ml-auto">
                <img
                  src="/images/team.jpg"
                  alt="Team"
                  className="w-64 h-20 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

    </motion.div >

    </motion.section >
  );
};

export default Ourfeatured;