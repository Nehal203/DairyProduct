import React from 'react';

const premiumProducts = [
  { id: 1, title: 'Fresh organic Cow Milk 500gm pack', price: 68.85, oldPrice: 72.8, rating: 4.0, img: '/images/product1.png', tag: 'Hot', category: 'Snack' },
  { id: 2, title: 'Best Mozzarella creamy cheese 750 gm', price: 320.85, oldPrice: 356.8, rating: 3.5, img: '/images/product2.png', tag: 'Sale', category: 'Herbs Foods' },
  { id: 3, title: 'Organic fresh thick and tasty curd 750 gm', price: 148.85, oldPrice: 152.8, rating: 4.0, img: '/images/product3.png', tag: 'New', category: 'Curd' },
  { id: 4, title: 'Fresh organic Desi Paneer 1 kg', price: 280.85, oldPrice: 300.8, rating: 4.0, img: '/images/product4.png', tag: '', category: 'Paneer' },
  { id: 5, title: 'Super Tasty Vanilla Lassi', price: 49.5, oldPrice: 58.0, rating: 4.2, img: '/images/product5.jpg', tag: '', category: 'Lassi' },
  { id: 6, title: 'Best Malai Paneer - 400g', price: 210.0, oldPrice: 235.0, rating: 4.1, img: '/images/product6.png', tag: '', category: 'Malai Paneer' },
  { id: 7, title: 'Mixed Sweets', price: 455.0, oldPrice: 520.0, rating: 3.9, img: '/images/product7.png', tag: 'Sale', category: 'Sweets' },
  { id: 8, title: 'Mava Peda', price: 399.0, oldPrice: 450.0, rating: 4.5, img: '/images/product8.png', tag: 'Hot', category: 'Sweets' },

];

const Feature = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <div className="w-14 h-14 rounded-full shadow-sm flex items-center justify-center bg-white">
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-gray-900 font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm max-w-xs">{text}</p>
  </div>
);

const TagChip = ({ tag }) => {
  if (!tag) return null;
  const styles = {
    Hot: 'bg-[#F74B81] text-white',
    Sale: 'bg-[#67BCEE] text-white',
    New: 'bg-[#3BB77E] text-white',
  };
  return (
    <span className={`absolute left-3 top-3 z-10 text-xs font-semibold px-2 py-1 rounded-md ${styles[tag] || 'bg-gray-100 text-gray-600'}`}>
      {tag}
    </span>
  );
};

const Card = ({ p }) => (
  <div className="bg-white rounded-2xl p-0 shadow-sm hover:shadow-md transition">
    <div className="relative h-64 rounded-xl overflow-hidden bg-white">
      <TagChip tag={p.tag} />
      <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-contain p-6" />
    </div>

    <div className="px-4 pt-4">
      <p className="text-xs text-gray-400">{p.category}</p>
      <h3 className="mt-1 text-gray-800 font-semibold text-sm sm:text-base line-clamp-2">{p.title}</h3>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center text-yellow-400 text-sm">
          <span>{'★★★★★'.slice(0, Math.round(p.rating))}</span>
          <span className="ml-1 text-gray-400">({p.rating})</span>
        </div>
        <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
      </div>

      <div className="mt-4 mb-5 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-emerald-700 font-semibold">${p.price}</span>
          {p.oldPrice && <span className="text-gray-400 line-through text-xs">${p.oldPrice}</span>}
        </div>
        <button className="px-3 py-2 rounded-md bg-gray-900 text-white text-xs hover:bg-gray-800" aria-label="add-to-cart">
          Add
        </button>
      </div>
    </div>
  </div>
);

const Premium = () => {
  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <Feature
            icon="🛡️"
            title="Premium Quality"
            text="The quality and safety of our products is our top priority. We continue to quest for even greater product quality"
          />
          <Feature
            icon="🥬"
            title="Always Fresh"
            text="Ranny Dairy is always committed to 100% fresh, organic food and has a certificate of food safety certification"
          />
          <Feature
            icon="🌱"
            title="Organic Farming"
            text="Agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal."
          />
        </div>
      </div>

      <div className="bg-[#F4D6DB] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">Farm Fresh Products</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumProducts.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;

