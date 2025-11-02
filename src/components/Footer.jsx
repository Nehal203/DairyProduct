import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Footer = () => {
  return (
    <footer className="w-full">
      <motion.section 
        className="w-full bg-[#f7e9df]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">Subscribe Newsletter</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Sign up for newsletter to receive special offers and exclusive news about Ranny Dairy products
          </p>
          <form className="mt-8 max-w-xl mx-auto relative">
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full bg-white px-6 pr-40 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] placeholder-gray-400 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            />
            <motion.button
              type="button"
              className="absolute right-1 top-1 bottom-1 rounded-full bg-[#3a2518] px-6 text-white font-medium"
              whileHover={{ scale: 1.03, backgroundColor: '#4a3120' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.section>

      <motion.section 
        className="w-full bg-[#3a2518] text-[#e8d9cf]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
              variants={item}
            >
              <img src="/images/logonew.png" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover shrink-0" />
              <div className="leading-tight">
                <p className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-white">Ranny Dairy.</p>
                {/* <p className="text-sm opacity-80 mt-1">Freshness you can trust</p> */}
              </div>
            </motion.div>

            <div>
              <p className="text-lg font-semibold text-white">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                {['Home', 'About Us', 'Blog', 'Contact Us'].map((item, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:underline block py-1">
                    {item}
                  </a>
                </motion.li>
              ))}
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-white">Careers</p>
              <ul className="mt-4 space-y-2 text-sm">
                {['Delivery & Logistics', 'Customer Support', 'Farmhands', 'FSSAI/ISO/GMP'].map((item, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="py-1 cursor-pointer hover:opacity-80"
                >
                  {item}
                </motion.li>
              ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <motion.span 
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5a3a29]"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                    <path strokeWidth="2" d="M12 22s7-5.686 7-12a7 7 0 10-14 0c0 6.314 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2" strokeWidth="2" />
                  </svg>
                </motion.span>
                <div>
                  <p className="text-lg font-semibold text-white">Address:</p>
<<<<<<< HEAD
                  <a
                    href="https://www.google.com/maps?q=Ahmedabad"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm opacity-90 hover:underline"
                  >
                    Ahmedabad
                  </a>
=======
                  <p className="text-sm opacity-90">Ahmedabad</p>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <motion.span 
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5a3a29]"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                    <path strokeWidth="2" d="M22 16.92V21a1 1 0 01-1.1 1A19.73 19.73 0 013 5.1 1 1 0 014 4h4.09a1 1 0 011 .75l1 3.49a1 1 0 01-.29 1L8.21 11a16 16 0 006.59 6.59l1.76-1.59a1 1 0 011-.26l3.49 1a1 1 0 01.75 1.08z" />
                  </svg>
                </motion.span>
                <div>
<<<<<<< HEAD
                  <a href="tel:+123456780123" className="text-lg font-semibold text-white hover:underline">+123456780123</a>
=======
                  <p className="text-lg font-semibold text-white">+123456780123</p>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                  <p className="text-sm opacity-90">Got Questions? Call us 24/7</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <motion.span 
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5a3a29]"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                    <path strokeWidth="2" d="M4 4h16v16H4z" />
                    <path strokeWidth="2" d="M22 6l-10 7L2 6" />
                  </svg>
                </motion.span>
                <div>
                  <p className="text-lg font-semibold text-white">Email:</p>
<<<<<<< HEAD
                  <a href="mailto:info@example.com" className="text-sm opacity-90 hover:underline">info@example.com</a>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4">
                {[
                  { href: '', icon: <FaFacebook /> },
                  { href: '', icon: <FaTwitter /> },
                  { href: '', icon: <FaInstagram /> },
                ].map((s, idx) => (
                  <motion.a 
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Open ${s.href}`}
=======
                  <p className="text-sm opacity-90">info@example.com</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4">
                {[<FaFacebook />, <FaTwitter />, <FaInstagram />].map((key, idx) => (
                  <motion.span 
                    key={idx} 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                    className="inline-flex h-9 w-9 items-center text-white justify-center rounded-full bg-[#5a3a29] cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: '#6b4733' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
<<<<<<< HEAD
                    {s.icon}
                  </motion.a>
=======
                    {key}
                  </motion.span>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-10 border-t border-white/20 pt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-[#e8d9cf]">Copyright 2025 Ranny Dairy. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.section>
    </footer>
  );
};

export default Footer;

