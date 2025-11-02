<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05

const categories = ['All Product', 'Milk', 'Ice Cream', 'Sweet', 'Baby Nutrition', 'Beverages'];

const allProducts = [
<<<<<<< HEAD
  { id: 1, title: 'Mixed Dryfruit sweets', price: 999, oldPrice: 1299, rating: 5, img: '/images/dryfruits.png', badge: '-17%', category: 'Sweet' },
  { id: 2, title: 'Creamy Cheese cubs', price: 299, rating: 4, img: '/images/cheese.jpg', category: 'Milk' },
  { id: 3, title: 'Ice Cream cone', price: 199, oldPrice: 299, rating: 4, img: '/images/ice-cream.jpg', category: 'Ice Cream' },
  { id: 4, title: 'Cow Pure Milk', price: 54, rating: 5, img: '/images/milk.jpg', badge: '-17%', category: 'Milk' },
  { id: 5, title: 'Classic Ice Cream', price: 149, rating: 4, img: '/images/ice-cream.jpg', category: 'Ice Cream' },
  { id: 6, title: 'Gourmet Cheese Block', price: 349, rating: 5, img: '/images/cheese.jpg', category: 'Milk' },
  { id: 7, title: 'Premium Dryfruit Sweet', price: 899, rating: 5, img: '/images/dryfruits.png', category: 'Sweet' },
  { id: 8, title: 'Farm Fresh Milk', price: 60, rating: 4, img: '/images/milk.jpg', category: 'Milk' },
];

const Best = () => {
  const [active, setActive] = useState(categories[0]);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const products = active === 'All Product'
    ? allProducts
    : allProducts.filter(p => p.category === active);

  const pageSize = 4;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / pageSize) || 1;
  const pagedProducts = products.slice(page * pageSize, page * pageSize + pageSize);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setPage(0);
  }, [active]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
      if (Array.isArray(stored)) setFavs(stored);
    } catch {}
  }, []);

  const isInWishlist = (id) => favs.some(e => (typeof e === 'number' ? e === id : e && e.id === id));
  const toggleWishlist = (p) => {
    setFavs(prev => {
      const exists = prev.some(e => (typeof e === 'number' ? e === p.id : e && e.id === p.id));
      const next = exists
        ? prev.filter(e => (typeof e === 'number' ? e !== p.id : e.id !== p.id))
        : [...prev, { id: p.id, title: p.title, price: p.price, oldPrice: p.oldPrice, img: p.img }];
      try { localStorage.setItem('wishlist', JSON.stringify(next)); } catch {}
      try { window.dispatchEvent(new Event('wishlist-updated')); } catch {}
      return next;
    });
  };

=======
  { id: 1, title: 'Mixed Dryfruit sweets', price: 999, oldPrice: 1299, rating: 5, img: '/images/dryfruits.png', badge: '-17%' },
  { id: 2, title: 'Creamy Cheese cubs', price: 299, rating: 4, img: '/images/cheese.jpg' },
  { id: 3, title: 'Ice Cream cone', price: 199, oldPrice: 299, rating: 4, img: '/images/ice-cream.jpg' },
  { id: 4, title: 'Cow Pure Milk', price: 54, rating: 5, img: '/images/milk.jpg', badge: '-17%' },
];



const Best = () => {
  const [active, setActive] = useState(categories[0]);
  const { addToCart } = useCart();
  const products = active === 'All Product' 
    ? allProducts 
    : allProducts.filter(p => p.category === active);

>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const buttonTap = {
    scale: 0.95
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="py-12 bg-[#E7F5F5]" id="best">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">Best Sellers</h2>

<<<<<<< HEAD
        <motion.div
=======
        <motion.div 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
          className="mt-6 flex flex-wrap items-center justify-center gap-6 text-md"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {categories.map((c) => (
            <motion.button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1 rounded-full transition font-bold${active === c ? ' text-[#FACC15]' : 'text-black hover:text-[#FACC15] font-bold'}`}
              whileHover={buttonHover}
              whileTap={buttonTap}
              variants={item}
            >
              {c}
            </motion.button>
          ))}
        </motion.div>
<<<<<<< HEAD
        <motion.div
          key={`${active}-${page}`}
=======
 
        <motion.div 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
<<<<<<< HEAD
          {pagedProducts.map((p) => (
            <motion.div
              key={p.id}
=======
          {products.map((p) => (
            <motion.div 
              key={p.id} 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
              className="bg-white rounded-2xl p-0 shadow-sm hover:shadow-md transition"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                {p.badge && (
                  <span className="absolute left-3 top-3 z-10 text-xs font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{p.title}</h3>
                <div className='mt-3 flex items-center justify-between'>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gray-900">${p.price}</span>
                    {p.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">${p.oldPrice}</span>
                    )}
                  </div>
<<<<<<< HEAD
                  <button
=======
                  <button 
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                    onClick={() => handleAddToCart(p)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#39251A] text-white hover:bg-[#2a1c14] transition-colors"
                    aria-label="Add to cart"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex items-center text-yellow-400 text-md">
                    {'★★★★★'.slice(0, p.rating)}
                    <span className="ml-1 text-gray-400">({p.rating})</span>
                  </div>
<<<<<<< HEAD
                  <button
                    onClick={() => toggleWishlist(p)}
                    className={`${isInWishlist(p.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                    aria-label="favorite"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M11.645 20.91 3.28 12.545a6.5 6.5 0 1 1 9.193-9.192l.282.28.282-.28a6.5 6.5 0 1 1 9.193 9.193L12.355 20.91a.5.5 0 0 1-.71 0Z" />
                    </svg>
                  </button>
                </div>
=======
                  <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
                </div>
                {/* <h3 className="mt-1 text-gray-800 font-semibold text-md line-clamp-1">{p.title}</h3> */}
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
              </div>

              {/* <div className="mt-4 mb-10 flex items-center gap-20 justify-between  ">
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-green-700 font-semibold">${p.price}.00</span>
                  {p.oldPrice && (
                    <span className="text-gray-400 line-through text-xs">${p.oldPrice}.00</span>
                  )}
                </div>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800" aria-label="add-to-cart">🛒</button>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD
        
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${page === i ? 'bg-[#39251A] w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
=======
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
      </div>
    </section>
  );
};

export default Best;
