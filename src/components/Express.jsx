import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { title: 'Choose your products', icon: '🛒' },
    { title: 'Order and make a payment', icon: '💳' },
    { title: 'Share your location', icon: '📍' },
    { title: 'Get delivered', icon: '🛵' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const progressBar = {
  hidden: { width: 0 },
  show: {
    width: '100%',
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
};

const Express = () => {
    return (
        <section className="py-12 overflow-hidden" id="express">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-md tracking-widest text-[#FACC15] font-semibold">EXPRESS DELIVERY</p>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">30 Minutes Delivery Process</h2>
                    <p className="mt-3 max-w-3xl mx-auto text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada pellentesque turpis eget facilisis. <br />
                        Sed sit amet efficitur ex. Fusce dapibus nulla vel ligula porttitor interdum. Cras at vulputate felis vestibulum <br />
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                    </p>
                </motion.div>

                <motion.div 
                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((s, index) => (
                        <motion.div 
                            key={s.title} 
                            className="flex flex-col items-center p-4 rounded-lg transition-colors"
                            variants={item}
                            whileHover="hover"
                        >
                            <motion.div 
                                className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-3"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <span>{s.icon}</span>
                            </motion.div>
                            <p className="text-black font-bold text-sm text-center max-w-[12rem]">{s.title}</p>
                            <motion.div 
                                className="h-1 w-8 bg-yellow-400 mt-3 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 px-4">
                    <motion.div 
                        className="h-2 bg-yellow-200 rounded-full w-full max-w-4xl mx-auto overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="h-full bg-yellow-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />
                    </motion.div>
                    <div className="relative max-w-4xl mx-auto -mt-3 flex justify-between">
                        {[0, 1, 2, 3].map((i) => (
                            <span key={i} className="w-6 h-6 bg-white border-4 border-yellow-400 rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Express;
