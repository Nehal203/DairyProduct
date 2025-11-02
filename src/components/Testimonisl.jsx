import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Shivam Sharma',
        role: 'Molecular Biologist',
        quote:
            "I recommend this milk to all my clients. It's not just free from additives — it's naturally rich in nutrients, easy to digest, and incredibly fresh. It's reassuring to know it comes from cows raised ethically and without artificial hormones",
        avatar: '/images/test1.jpg',
    },
    {
        name: 'Shivam Sharma',
        role: 'Molecular Biologist',
        quote:
            "I recommend this milk to all my clients. It's not just free from additives — it's naturally rich in nutrients, easy to digest, and incredibly fresh. It's reassuring to know it comes from cows raised ethically and without artificial hormones",
        avatar: '/images/test2.jpg',
    },
    {
        name: 'Shivam Sharma',
        role: 'Molecular Biologist',
        quote:
            "I recommend this milk to all my clients. It's not just free from additives — it's naturally rich in nutrients, easy to digest, and incredibly fresh. It's reassuring to know it comes from cows raised ethically and without artificial hormones",
        avatar: '/images/test3.jpg',
    },
];

const Testimonisl = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(id);
    }, []);

    const t = testimonials[current];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#FACC15] font-semibold tracking-wide text-xs"
                >
                    OUR TESTIMONIALS
                </motion.p>
                
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">{t.name}</h2>
                        <p className="text-gray-600">{t.role}</p>
                        <blockquote className="mt-6 text-black italic leading-8 text-xl">
                            {t.quote}
                        </blockquote>
                    </motion.div>
                </AnimatePresence>

                <motion.div 
                    className="mt-6 text-yellow-500 text-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                >
                    ★★★★★
                </motion.div>

                <motion.div 
                    className="mt-8 flex items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {testimonials.map((item, idx) => (
                        <motion.img
                            key={idx}
                            className={
                                idx === current
                                    ? 'w-14 h-14 rounded-full object-cover ring-4 ring-yellow-400 p-1 bg-yellow-400 cursor-pointer'
                                    : 'w-12 h-12 rounded-full object-cover ring-2 ring-transparent opacity-70 hover:opacity-100 cursor-pointer'
                            }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            src={item.avatar}
                            alt={`avatar-${idx + 1}`}
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </motion.div>

                <motion.div 
                    className="mt-4 flex items-center justify-center gap-2 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {testimonials.map((_, idx) => (
                        <motion.span
                            key={idx}
                            className={
                                idx === current
                                    ? 'w-5 h-2 rounded-full bg-yellow-400'
                                    : 'w-2 h-2 rounded-full bg-gray-300'
                            }
                            initial={{ width: '0.5rem' }}
                            animate={{
                                width: idx === current ? '1.25rem' : '0.5rem',
                                backgroundColor: idx === current ? '#FACC15' : '#D1D5DB'
                            }}
                            transition={{ duration: 0.3, type: 'spring' }}
                            onClick={() => setCurrent(idx)}
                            style={{ cursor: 'pointer' }}
                        ></motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonisl;
