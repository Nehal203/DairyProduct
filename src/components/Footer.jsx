const Footer = () => {
   return (
     <footer className="w-full">
       <section className="w-full bg-[#f7e9df]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
           <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">Subscribe Newsletter</h2>
           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
             Sign up for newsletter to receive special offers and exclusive news about Ranny Dairy products
           </p>
           <form className="mt-8 max-w-xl mx-auto relative">
             <input
               type="email"
               placeholder="Enter your email"
               className="w-full rounded-full bg-white px-6 pr-40 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] placeholder-gray-400 focus:outline-none"
             />
             <button
               type="button"
               className="absolute right-1 top-1 bottom-1 rounded-full bg-[#3a2518] px-6 text-white font-medium hover:opacity-90 transition"
             >
               Subscribe
             </button>
           </form>
         </div>
       </section>
 
       <section className="w-full bg-[#3a2518] text-[#e8d9cf]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
             <div className="col-span-1 lg:col-span-2 flex items-start gap-4">
               <img src="/images/logo.png" alt="logo" className="w-14 h-14 rounded-full object-cover" />
               <div>
                 <p className="text-xl font-semibold">Ranny Dairy.</p>
                 <p className="text-sm opacity-80 mt-1">Freshness you can trust</p>
               </div>
             </div>
 
             <div>
               <p className="text-lg font-semibold text-white">Quick Links</p>
               <ul className="mt-4 space-y-2 text-sm">
                 <li><a href="#" className="hover:underline">Home</a></li>
                 <li><a href="#" className="hover:underline">About Us</a></li>
                 <li><a href="#" className="hover:underline">Services</a></li>
                 <li><a href="#" className="hover:underline">Contact Us</a></li>
               </ul>
             </div>
 
             <div>
               <p className="text-lg font-semibold text-white">Careers</p>
               <ul className="mt-4 space-y-2 text-sm">
                 <li>Delivery & Logistics</li>
                 <li>Customer Support</li>
                 <li>Farmhands</li>
                 <li>FSSAI/ISO/GMP</li>
               </ul>
             </div>
 
             <div>
               <div className="flex items-center gap-3">
                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5a3a29]">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                     <path strokeWidth="2" d="M12 22s7-5.686 7-12a7 7 0 10-14 0c0 6.314 7 12 7 12z" />
                     <circle cx="12" cy="10" r="2" strokeWidth="2" />
                   </svg>
                 </span>
                 <div>
                   <p className="text-lg font-semibold text-white">Address:</p>
                   <p className="text-sm opacity-90">Ahmedabad</p>
                 </div>
               </div>
               <div className="mt-5 flex items-center gap-3">
                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5a3a29]">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                     <path strokeWidth="2" d="M22 16.92V21a1 1 0 01-1.1 1A19.73 19.73 0 013 5.1 1 1 0 014 4h4.09a1 1 0 011 .75l1 3.49a1 1 0 01-.29 1L8.21 11a16 16 0 006.59 6.59l1.76-1.59a1 1 0 011-.26l3.49 1a1 1 0 01.75 1.08z" />
                   </svg>
                 </span>
                 <div>
                   <p className="text-lg font-semibold text-white">+123456780123</p>
                   <p className="text-sm opacity-90">Got Questions? Call us 24/7</p>
                 </div>
               </div>
             </div>
 
             <div>
               <div className="flex items-center gap-3">
                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5a3a29]">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                     <path strokeWidth="2" d="M4 4h16v16H4z" />
                     <path strokeWidth="2" d="M22 6l-10 7L2 6" />
                   </svg>
                 </span>
                 <div>
                   <p className="text-lg font-semibold text-white">Email:</p>
                   <p className="text-sm opacity-90">info@example.com</p>
                 </div>
               </div>
               <div className="mt-5 flex items-center gap-4">
                 {["facebook","twitter","instagram"].map((key, idx) => (
                   <span key={idx} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5a3a29] hover:bg-[#6b4733] transition">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#e8d9cf]">
                       <circle cx="12" cy="12" r="10" className="opacity-0" />
                     </svg>
                   </span>
                 ))}
               </div>
             </div>
           </div>
 
           <div className="mt-10 border-t border-white/20 pt-6 text-center">
             <p className="text-sm text-[#e8d9cf]">Copyright 2025 Ranny Dairy. All rights reserved.</p>
           </div>
         </div>
       </section>
     </footer>
   );
 };
 
 export default Footer;