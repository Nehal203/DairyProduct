import React, { useState } from 'react';

const categories = ['All Product', 'Milk', 'Ice Cream', 'Sweet', 'Baby Nutrition', 'Beverages'];

const allProducts = [
  { id: 1, title: 'Mixed Dryfruit sweets', price: 999, oldPrice: 1299, rating: 5, img: '/images/dryfruits.png', badge: '-17%' },
  { id: 2, title: 'Creamy Cheese cubs', price: 299, rating: 4, img: '/images/cheese.jpg' },
  { id: 3, title: 'Ice Cream cone', price: 199, oldPrice: 299, rating: 4, img: '/images/ice-cream.jpg' },
  { id: 4, title: 'Cow Pure Milk', price: 54, rating: 5, img: '/images/milk.jpg', badge: '-17%' },
];



const Best = () => {
  const [active, setActive] = useState(categories[0]);
  const products = allProducts;

  return (
    <section className="py-12 bg-[#E9F6F3]" id="best">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">Best Sellers</h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-md">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1 rounded-full transition font-bold${active === c ? ' text-[#FACC15]' : 'text-black hover:text-[#FACC15] font-bold'
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-0 shadow-sm hover:shadow-md transition">
              <div className="relative h-64 rounded-xl overflow-hidden">
                {p.badge && (
                  <span className="absolute left-3 top-3 z-10 text-xs font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
              </div>

              <div className="mt-4">
                <div className=' mt-4 flex items-center gap-3 justify-between'>
                  <div className="flex items-center text-yellow-400 text-md">
                    {'★★★★★'.slice(0, p.rating)}
                    <span className="ml-1 text-gray-400">({p.rating})</span>
                  </div>
                  <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
                </div>
                <h3 className="mt-1 text-gray-800 font-semibold text-md line-clamp-1">{p.title}</h3>
              </div>

              <div className="mt-4 mb-10 flex items-center gap-20 justify-between  ">
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-green-700 font-semibold">${p.price}.00</span>
                  {p.oldPrice && (
                    <span className="text-gray-400 line-through text-xs">${p.oldPrice}.00</span>
                  )}
                </div>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800" aria-label="add-to-cart">🛒</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Best;
