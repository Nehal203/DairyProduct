import React from 'react';

const Ourexpertise = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const faqs = [
    {
      q: 'How is your milk different from store-bought milk?',
      a: 'Store-bought milk is typically pasteurized to kill harmful bacteria, while raw milk is not. The main differences are safety processing, processing methods, and, in some cases, fat content and other additives like vitamins. ',
    },
    {
      q: 'How is you ensure the quality and safety of your milk?',
      a: 'Milk quality and safety are ensured through a combination of farm-level practices, processing standards, and careful handling. On the farm, this includes strict hygiene, sanitizing equipment, and monitoring cow health, while at the processing plant, it involves pasteurization and regular testing for contaminants. Finally, maintaining a cold temperature and other proper handling techniques are crucial for consumers to keep milk safe. ',
    },
    {
      q: 'Dairy Farm Hero Section?',
      a: 'We focus on sustainable farming, animal wellness, and transparent sourcing to deliver truly fresh, ethical dairy products.',
    },
    {
      q: 'Can i customize my delivery schedule?',
      a: 'Yes. Choose daily, alternate-day, or custom weekly schedules, and pause or resume anytime from your account.',
    },
    {
      q: 'How do you ensure milk quality and hygiene?',
      a: 'From on-farm hygiene to sealed, food-grade packaging, we follow rigorous protocols to ensure clean, high-quality milk.',
    },
    {
      q: 'Do You Offer Home delivery services?',
      a: 'Yes, we offer convenient home delivery with reliable time slots in supported areas.',
    },
    {
      q: 'Are your cows treated humanely?',
      a: 'Absolutely. Our cows have ample space, regular veterinary care, balanced nutrition, and no routine growth hormones.',
    },
  ];
  return (
    <section id="ourexpertise" className="pt-0">
      <div className="w-full bg-[#FAF1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-2 text-amber-600 text-sm font-semibold">
            <span className="text-lg">✦</span>
            <span className="text-[#3F2C20]">Our Expertise</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F1712] leading-tight">
                Our Expertise in Sustainable
                <br /> and Ethical Dairy
              </h2>
              <p className="text-black mt-4 text-sm md:text-base max-w-xl">
                We bring deep expertise in sustainable farming, animal wellness, and nutritional science. Our dairy
                practices deliver true health from farm to fridge.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-[#3F2C20] shadow-sm">
                  <span className="text-amber-600">✦</span>
                  <span>Ethical Dairy Farming</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-[#3F2C20] shadow-sm">
                  <span className="text-amber-600">✦</span>
                  <span>Sustainable Agriculture</span>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-[#3F2C20] text-sm mb-2">
                    <span>Sustainable Agriculture</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-gray-200">
                    <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '94%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[#3F2C20] text-sm mb-2">
                    <span>Digestive Health</span>
                    <span className="font-semibold">76%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-gray-200">
                    <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '76%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative max-w-md ml-auto">
                <img
                  src="/images/expertise1.jpg"
                  alt="farmer main"
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-md"
                />

                <img
                  src="/images/expertise2.jpg"
                  alt="milk glass"
                  className="absolute -left-8 -top-6 w-36 h-28 object-cover rounded-xl border-4 border-white shadow-lg"
                />
                <img
                  src="/images/expertise3.jpg"
                  alt="meeting"
                  className="absolute -left-6 bottom-8 w-40 h-28 object-cover rounded-xl border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#39251A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
                <span className="text-lg">✦</span>
                <span className='text-white'>FAQ</span>
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mt-4 max-w-lg">
                Common questions about
                <br /> our fresh milk
              </h3>
              <p className="text-[#E9E2DC] mt-4 text-md max-w-lg">
                Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a duis viverra congue massa nisi orci. Ac maecenas orci auctor gravida lacus mi sit.
              </p>

              <div className="mt-8 w-full max-w-xs bg-[#FDC040] text-[#3F2C20] rounded-2xl p-6 shadow">
                <p className="text-sm">We Always take care of your smile</p>
                <p className="text-2xl font-extrabold mt-2">24/7 Dairy Delivery</p>
                <p className="text-sm mt-1">(+ 5464) 66378338</p>
              </div>
            </div>

            <div>
              <ul className="divide-y divide-white/15">
                {faqs.map((item, i) => (
                  <li key={i} className="py-4">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      aria-expanded={openIndex === i}
                      className="w-full flex items-center justify-between text-left text-white/90 hover:text-white"
                    >
                      <span className="text-base font-bold">{item.q}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`w-5 h-5 opacity-70 transition-transform ${openIndex === i ? 'rotate-90' : ''}`}
                      >
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </button>
                    {openIndex === i && (
                      <div className="mt-2 text-[#E9E2DC] text-sm">{item.a}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourexpertise;

