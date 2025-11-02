import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { productItems } from './Productitem';
import { motion } from 'framer-motion';

export default function Wishlist() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [entries, setEntries] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const normalized = Array.isArray(stored) ? stored : [];
      setEntries(normalized);
      setHydrated(true);
    } catch {
      setEntries([]);
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    const load = () => {
      try {
        const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setEntries(Array.isArray(stored) ? stored : []);
        setHydrated(true);
      } catch {}
    };
    window.addEventListener('focus', load);
    const onVis = () => { if (!document.hidden) load(); };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      window.removeEventListener('focus', load);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem('wishlist', JSON.stringify(entries));
      try { window.dispatchEvent(new Event('wishlist-updated')); } catch {}
    } catch {}
  }, [entries, hydrated]);

  const items = useMemo(() => {
    const result = [];
    for (const e of entries) {
      if (e && typeof e === 'object') {
        result.push(e);
        continue;
      }
      if (typeof e === 'number' || (typeof e === 'string' && /^\d+$/.test(e))) {
        const idNum = typeof e === 'number' ? e : Number(e);
        const found = productItems.find(p => p.id === idNum);
        if (found) result.push(found);
      }
    }
    return result;
  }, [entries]);

  const remove = (id) => setEntries(prev => prev.filter(x => (typeof x === 'number' ? x !== id : x.id !== id)));

  const handleAddToCart = async (p) => {
    try {
      await addToCart({ id: p.id, title: p.title, price: p.price, oldPrice: p.oldPrice, img: p.img, quantity: 1 });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <motion.section className="pt-28 min-h-screen bg-gray-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <motion.div className="w-full bg-[#39251A] text-white" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <h3 className="text-2xl tracking-wide">Wishlist</h3>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {items.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center">
            <p className="text-gray-600 mb-4">Your wishlist is empty.</p>
            <Link className="inline-flex px-5 py-2 rounded-md bg-[#39251A] text-white hover:bg-[#2a1c14]" to="/product">Browse Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <motion.div key={p.id} className="bg-white rounded-xl shadow-sm border overflow-hidden" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.05 }}>
                <div className="relative h-56 bg-gray-50 flex items-center justify-center cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
                  <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain p-6" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 line-clamp-1">{p.title}</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-green-700 font-semibold">${typeof p.price === 'number' ? p.price.toFixed(2) : p.price}</span>
                    <div className="flex gap-2">
                      <button onClick={() => handleAddToCart(p)} className="px-3 py-1 rounded-md bg-[#39251A] text-white hover:bg-[#2a1c14] text-sm">Add to Cart</button>
                      <button onClick={() => remove(p.id)} className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">Remove</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

