<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const Bestoffer = () => {
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(null);
<<<<<<< HEAD
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
            if (Array.isArray(stored)) setFavs(stored);
        } catch {}
    }, []);

    const isInWishlist = (id) => favs.some(e => (typeof e === 'number' ? e === id : e && e.id === id));
    const toggleWishlist = (p, e) => {
        if (e) { e.stopPropagation(); e.preventDefault(); }
        setFavs(prev => {
            const exists = prev.some(e2 => (typeof e2 === 'number' ? e2 === p.id : e2 && e2.id === p.id));
            const next = exists
                ? prev.filter(e2 => (typeof e2 === 'number' ? e2 !== p.id : e2.id !== p.id))
                : [...prev, { id: p.id, title: p.title, price: p.price, oldPrice: p.oldPrice, img: p.img }];
            try { localStorage.setItem('wishlist', JSON.stringify(next)); } catch {}
            return next;
        });
    };
=======
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05

    const handleAddToCart = async (product, e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }

        if (isAdding) return;

        try {
            setIsAdding(product.id);
            await addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                oldPrice: product.oldPrice,
                img: product.img,
                quantity: 1
            });
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsAdding(null);
        }
    };
    const leftCards = [
        { id: 1, title: 'Ice Cream', price: 350, oldPrice: 400, rating: 5, img: '/images/offer1.png', badge: '-23%' },
        { id: 2, title: 'Ghee', price: 250, rating: 4, img: '/images/offer2.jpg' },
        { id: 3, title: 'Ghee', price: 250, rating: 4, img: '/images/offer3.jpg' },
    ];

    const rightCards = [
        { id: 4, title: 'Curd', price: 18, rating: 0, img: '/images/offer4.jpg' },
        { id: 5, title: 'Mango Lassi', price: 60, rating: 0, img: '/images/offer5.jpg' },
        { id: 6, title: 'Cheese', price: 50, rating: 0, img: '/images/offer6.jpg' },
    ];

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
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const buttonHover = {
        scale: 1.05,
        transition: { duration: 0.2 }
    };

    const buttonTap = {
        scale: 0.95
    };

    return (
        <motion.section
            className="py-12 bg-white"
            id="best-offers"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
<<<<<<< HEAD
            <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Best Offer For You
                </motion.h2>

                <motion.div
                    className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="space-y-7" variants={container}>
                        {leftCards.map((p) => (
                            <motion.div
                                key={p.id}
                                className="bg-white rounded-2xl p-0 shadow-md border hover:shadow-lg transition flex items-center"
                                variants={item}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative w-40 h-40 rounded-l-2xl overflow-hidden">
                                    {p.badge && (
                                        <span className="absolute left-3 top-3 z-10 text-xs font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">{p.badge}</span>
                                    )}
                                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-yellow-400 text-sm">
                                            {'★★★★★'.slice(0, p.rating)}
                                            <span className="ml-1 text-gray-400">({p.rating})</span>
                                        </div>
<<<<<<< HEAD
                                        <button onClick={(e) => toggleWishlist(p, e)} className={`${isInWishlist(p.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`} aria-label="favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M11.645 20.91 3.28 12.545a6.5 6.5 0 1 1 9.193-9.192l.282.28.282-.28a6.5 6.5 0 1 1 9.193 9.193L12.355 20.91a.5.5 0 0 1-.71 0Z" />
                                            </svg>
                                        </button>
=======
                                        <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                    </div>
                                    <h3 className="mt-1 text-gray-800 font-semibold text-md line-clamp-1">{p.title}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-green-700 font-semibold">${p.price}.00</span>
                                        <motion.button
                                            onClick={(e) => handleAddToCart(p, e)}
                                            disabled={isAdding === p.id}
                                            className={`p-1.5 rounded-full ${isAdding === p.id
<<<<<<< HEAD
                                                ? 'bg-green-500'
                                                : 'bg-[#39251A] hover:bg-[#2a1c14]'
=======
                                                    ? 'bg-green-500'
                                                    : 'bg-[#39251A] hover:bg-[#2a1c14]'
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                                } text-white transition-colors`}
                                            aria-label="Add to cart"
                                            whileHover={buttonHover}
                                            whileTap={buttonTap}
                                        >
                                            {isAdding === p.id ? (
                                                <span className="w-4 h-4 block text-sm">✓</span>
                                            ) : (
                                                <FiShoppingCart className="w-4 h-4" />
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl p-0 shadow-md border hover:shadow-lg transition"
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative h-96 rounded-xl overflow-hidden">
                            <span className="absolute left-3 top-3 z-10 text-xs font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">-21%</span>
                            <img src="/images/offers.jpg" alt="Milk Product" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur rounded-xl px-4 py-3 grid grid-cols-4 gap-3 text-center text-gray-800">
                                <div>
                                    <p className="text-sm font-bold">266</p>
                                    <p className="text-[10px] text-gray-500">Days</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">04</p>
                                    <p className="text-[10px] text-gray-500">Hours</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">56</p>
                                    <p className="text-[10px] text-gray-500">Mins</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">28</p>
                                    <p className="text-[10px] text-gray-500">Secs</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-yellow-400 text-sm">{'★★★★★'.slice(0, 0)}<span className="ml-1 text-gray-400">(0)</span></div>
<<<<<<< HEAD
                                <button onClick={(e) => toggleWishlist({ id: 'milk-product-offer', title: 'Milk Product', price: 599, oldPrice: 799, img: '/images/offers.jpg' }, e)} className={`${isInWishlist('milk-product-offer') ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`} aria-label="favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M11.645 20.91 3.28 12.545a6.5 6.5 0 1 1 9.193-9.192l.282.28.282-.28a6.5 6.5 0 1 1 9.193 9.193L12.355 20.91a.5.5 0 0 1-.71 0Z" />
                                    </svg>
                                </button>
=======
                                <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                            </div>
                            <h3 className="mt-1 text-gray-800 font-semibold text-md">Milk Product</h3>
                            <div className="mt-2 mb-2 flex items-baseline gap-2">
                                <span className="text-green-700 font-semibold">$599.00</span>
                                <span className="text-gray-400 line-through text-xs">$799.00</span>
                            </div>
                            <div className="flex justify-end">
                                <motion.button
                                    onClick={(e) => handleAddToCart({
                                        id: 'milk-product-offer',
                                        title: 'Milk Product',
                                        price: 599,
                                        oldPrice: 799,
                                        img: '/images/offers.jpg',
                                        quantity: 1
                                    }, e)}
                                    disabled={isAdding === 'milk-product-offer'}
                                    className={`w-9 h-9 flex items-center justify-center rounded-full ${isAdding === 'milk-product-offer'
<<<<<<< HEAD
                                        ? 'bg-green-500'
                                        : 'bg-gray-900 hover:bg-gray-800'
=======
                                            ? 'bg-green-500'
                                            : 'bg-gray-900 hover:bg-gray-800'
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                        } text-white transition-colors`}
                                    aria-label="Add to cart"
                                    whileHover={buttonHover}
                                    whileTap={buttonTap}
                                >
                                    {isAdding === 'milk-product-offer' ? '✓' : '🛒'}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="space-y-7" variants={container}>
                        {rightCards.map((p) => (
                            <motion.div
                                key={p.id}
                                className="bg-white rounded-2xl p-0 shadow-md border hover:shadow-lg transition flex items-center"
                                variants={item}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative w-40 h-40 rounded-l-2xl overflow-hidden">
                                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-yellow-400 text-sm">
                                            {'★★★★★'.slice(0, p.rating)}
                                            <span className="ml-1 text-gray-400">({p.rating})</span>
                                        </div>
<<<<<<< HEAD
                                        <button className="text-gray-500 hover:text-red-500" aria-label="favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M11.645 20.91 3.28 12.545a6.5 6.5 0 1 1 9.193-9.192l.282.28.282-.28a6.5 6.5 0 1 1 9.193 9.193L12.355 20.91a.5.5 0 0 1-.71 0Z" />
                                            </svg>
                                        </button>
=======
                                        <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                    </div>
                                    <h3 className="mt-1 text-gray-800 font-semibold text-md line-clamp-1">{p.title}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-green-700 font-semibold">${p.price}.00</span>
                                        <motion.button
                                            onClick={(e) => handleAddToCart(p, e)}
                                            disabled={isAdding === p.id}
                                            className={`p-1.5 rounded-full ${isAdding === p.id
<<<<<<< HEAD
                                                ? 'bg-green-500'
                                                : 'bg-[#39251A] hover:bg-[#2a1c14]'
=======
                                                    ? 'bg-green-500'
                                                    : 'bg-[#39251A] hover:bg-[#2a1c14]'
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                                } text-white transition-colors`}
                                            aria-label="Add to cart"
                                            whileHover={buttonHover}
                                            whileTap={buttonTap}
                                        >
                                            {isAdding === p.id ? (
                                                <span className="w-4 h-4 block text-sm">✓</span>
                                            ) : (
                                                <FiShoppingCart className="w-4 h-4" />
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
<<<<<<< HEAD
                </motion.div>
                <motion.div
                    className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="text-2xl">🏷️</div>
                        <div>
                            <p className="font-semibold text-gray-900">Best prices & offers</p>
                            <p className="text-sm text-gray-500">Orders $50 or more</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="text-2xl">🚚</div>
                        <div>
                            <p className="font-semibold text-gray-900">Free delivery</p>
                            <p className="text-sm text-gray-500">24/7 amazing services</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="text-2xl">💸</div>
                        <div>
                            <p className="font-semibold text-gray-900">Great daily deal</p>
                            <p className="text-sm text-gray-500">When you sign up</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="text-2xl">↩️</div>
                        <div>
                            <p className="font-semibold text-gray-900">Easy returns</p>
                            <p className="text-sm text-gray-500">Within 30 days</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
=======

                    
                </motion.div>
                <motion.div
                        className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="text-2xl">🏷️</div>
                            <div>
                                <p className="font-semibold text-gray-900">Best prices & offers</p>
                                <p className="text-sm text-gray-500">Orders $50 or more</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="text-2xl">🚚</div>
                            <div>
                                <p className="font-semibold text-gray-900">Free delivery</p>
                                <p className="text-sm text-gray-500">24/7 amazing services</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="text-2xl">💸</div>
                            <div>
                                <p className="font-semibold text-gray-900">Great daily deal</p>
                                <p className="text-sm text-gray-500">When you sign up</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4"
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="text-2xl">↩️</div>
                            <div>
                                <p className="font-semibold text-gray-900">Easy returns</p>
                                <p className="text-sm text-gray-500">Within 30 days</p>
                            </div>
                        </motion.div>
                    </motion.div>
            </div>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
        </motion.section>
    );
};


export default Bestoffer;
