import React from 'react';

const categories = [
  { label: 'Dairy Product', icon: '/images/dairy.png' },
  { label: 'Sweets', icon: '/images/sweets.png' },
  { label: 'Ice Cream', icon: '/images/icecream.png' },
  { label: 'Beverages', icon: '/images/beverages.png' },
  { label: 'Baby Nutrition', icon: '/images/babynutrition.png' },
  { label: 'Organic', icon: '/images/organic.png' },
];

const Home = () => {
  return (
    <main id="home" className="pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-start py-8">
          {categories.map((c) => (
            <div key={c.label} className="flex flex-col text-black items-center text-center">
              <div className="cursor-pointer w-28 h-28 rounded-full border-2 border-black flex items-center justify-center bg-white">
                <img src={c.icon} alt={c.label} className="w-22 h-22 object-contain opacity-70" />
              </div>
              <p className="mt-3 text-gray-700 font-medium text-sm sm:text-base">{c.label}</p>
            </div>
          ))}
        </section>

        <section className="relative overflow-hidden rounded">
          <img src="/images/hero.jpg" alt="hero" className="w-full h-[420px] object-fit" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10 md:px-16 max-w-2xl">
              <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl">
                Goodness of milk straight
                <br />
                from the source
              </h1>
              <p className="text-white mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a ultrices viverra congue
                massa nisi orci. Ac maecenas orci gravida lacus mi orci.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="" className="inline-flex items-center bg-[#E5C96C] hover:bg-white text-[#18555C] px-5 py-2 rounded-md text-sm font-semibold transition">
                  Visit Our Farm
                  <span className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] hover:text-[#18555C] hover:bg-[#E5C96C] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a href="" className="inline-flex items-center border-2 border-white/70 text-white hover:bg-white/10 px-5 py-2 rounded-md text-sm font-semibold transition">
                  Subscribe Now
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src="/images/user1.png" alt="u1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/images/user2.png" alt="u2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/images/user3.png" alt="u3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <p className="text-white font-semibold">Our Happy Client</p>
                  <p className="text-white/80 text-sm">4.8 Review (14k+ clients)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
