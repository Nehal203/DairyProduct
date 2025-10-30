const Ourfeatured = () => {
  return (
    <section id="ourfeatured" className="pt-28">
      <div className="w-full bg-[#FFF4ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex justify-center items-center gap-2 text-amber-600 text-sm font-semibold">
            <span className="text-lg">✦</span>
            <span className="text-[#3F2C20] font-bold">Our Feature</span>
          </div>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1F1712] mt-3">
            Discover the features that
            <br className="hidden md:block" /> define our dairy
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            

            <div className="rounded-2xl overflow-hidden shadow-sm border border-amber-100 bg-transparent">
              <img
                src="/images/dairy.jpg"
                alt="Dairy plant"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-transparent rounded-2xl p-6  flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <p className="text-6xl font-bold text-[#111827]">94%</p>
                <div className="text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" /></svg>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-[#111827]">Education Support</h3>
                <p className="text-base text-[#6B7280] text-black mt-1">Provide essential healthcare services and resources to communities</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-amber-100 bg-transparent">
              <img
                src="/images/cows.jpg"
                alt="cows"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-transparent rounded-2xl p-6  flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <p className="text-6xl font-bold text-[#111827]">95%</p>
                <div className="text-amber-500">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M5 21a1 1 0 0 1-1-1c0-4.971 4.029-9 9-9a1 1 0 1 1 0 2c-3.86 0-7 3.14-7 7a1 1 0 0 1-1 1Zm11-9a1 1 0 0 1-1-1c0-3.309-2.691-6-6-6a1 1 0 1 1 0-2c4.411 0 8 3.589 8 8a1 1 0 0 1-1 1Z"/></svg> */}
                  <img src="/images/leaves.png" alt="leaves" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-[#111827]">Food Support</h3>
                <p className="text-base text-[#6B7280] text-black mt-1">Provide essential healthcare services and resources to communities</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-amber-100 bg-transparent">
              <img
                src="/images/farm.jpg"
                alt="Farm"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-transparent rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <p className="text-6xl font-bold text-[#111827]">96%</p>
                <div className="text-amber-500">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M12 2v3m0 14v3m9-9h-3M6 12H3m14.95 6.364-2.122-2.122M7.172 7.172 5.05 5.05m12.728 0-2.122 2.122M7.172 16.95 5.05 19.07" /></svg> */}
                  <img src="/images/star.png" alt="star" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-[#111827]">Naturally Raised, Happy Cows</h3>
                <p className="text-base text-[#6B7280] text-black mt-1">Provide essential healthcare services and resources to communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#2C1E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
              <span className="text-lg">✦</span>
              <span>Why Choose Us</span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-4 leading-tight">
              Where freshness and trust
              <br /> come together daily
            </h3>
            <p className="text-[#D6CEC8] mt-4 text-sm leading-6">
              We go beyond just delivering milk — we deliver trust, purity, and a
              promise of health. Every drop of milk comes from well-cared-for cows,
              raised in a clean and natural environment.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-[#3A2A21] rounded-xl px-4 py-3 text-[#E8E1DB]">
                <span className="text-amber-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <span>100% Pure and Fresh Milk</span>
              </div>
              <div className="flex items-center gap-3 bg-[#3A2A21] rounded-xl px-4 py-3 text-[#E8E1DB]">
                <span className="text-amber-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <span>Ethically Raised, Grass-Fed Cows</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-[#2A1E17] rounded-xl px-4 py-3 text-[#E8E1DB] border border-[#4A382D]">
                <span className="text-[#F59E0B]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.001 10h2v5h-2z" /><path d="M12 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z" /></svg>
                </span>
                <span>Inconsistent Milk Quality</span>
              </div>
              <div className="flex items-center gap-3 bg-[#2A1E17] rounded-xl px-4 py-3 text-[#E8E1DB] border border-[#4A382D]">
                <span className="text-[#F59E0B]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2V7h2Zm-1 4a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 21Z" /></svg>
                </span>
                <span>Lack of Trust in Local Vendors</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src="/images/user1.png" alt="avatar" />
                <div>
                  <p className="text-white text-sm font-semibold">Sarah Mitchell</p>
                  <p className="text-[#D6CEC8] text-xs">Marketing Director</p>
                </div>
              </div>
              

              <a href="" className="group inline-flex items-center bg-[#E5C96C] hover:bg-white text-[#18555C] px-5 py-2 rounded-md text-sm font-bold transition">
                Join Our Milk Dairy
                <span className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] group-hover:text-[#18555C] group-hover:bg-[#E5C96C] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>


            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-[#3A2A21] rounded-2xl overflow-hidden p-2">
              <img
                src="/images/farmer.jpg"
                alt="Processing milk"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="bg-[#3A2A21] rounded-2xl overflow-hidden p-2 flex flex-col gap-4">
              <img
                src="/images/farmer1.jpg"
                alt="Farmer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="col-span-3 mt-4">
              <div className="bg-white/10 rounded-2xl p-2 w-fit ml-auto">
                <img
                  src="/images/team.jpg"
                  alt="Team"
                  className="w-64 h-20 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourfeatured;