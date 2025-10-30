import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const onClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', onClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onClick);
            document.removeEventListener('keydown', onKey);
        };
    }, []);

    return (
        <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-6">


                    <div className="flex-1 hidden md:flex justify-center">
                        <div className="flex w-full max-w-xl">
                            <input
                                type="text"
                                placeholder="Search For items..."
                                className="flex-1 border border-[#64B496] rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <select className="border-t border-b border-green-300 px-3 text-sm text-gray-600">
                                <option>All Categories</option>
                                <option>Milk</option>
                                <option>Cheese</option>
                                <option>Yogurt</option>
                            </select>
                            <button className="bg-[#39251A] text-white px-3 rounded-r-md flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.243 11.93l4.288 4.289a.75.75 0 1 0 1.06-1.06l-4.288-4.29A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex">
                        <Link to="/login"><button className="bg-[#FACC15] hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-md">Login</button></Link>
                    </div>

                    <div className="md:hidden ml-auto">
                        <button className="text-gray-700 hover:text-green-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
                    <div className="flex-shrink-0 flex items-center">
                        {/* <h2 className="text-2xl font-bold text-green-800">Rainy Dairy</h2> */}
                        <a href="/"><img className='w-28 h-28' src="/images/logo.png" alt="dairy" /></a>
                    </div>
                    <ul className="hidden md:flex items-center gap-8 text-gray-700">
                        <li><a href="/" className="hover:text-green-600">Home</a></li>
                        <li><a href="/about" className="hover:text-green-600">About Us</a></li>
                        <li className="relative" ref={menuRef}>
                            <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-1 hover:text-green-600">
                                <span>Products</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.7a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08Z" clipRule="evenodd" /></svg>
                            </button>
                            {open && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-[720px] bg-white rounded-md shadow-xl border p-6" role="menu" aria-label="Products">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-lg font-semibold text-gray-800"> </div>
                                        <button className="text-gray-500 hover:text-gray-700" onClick={() => setOpen(false)} aria-label="Close">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-4 gap-8 text-sm">
                                        <div>
                                            <a href="/product?category=Milk%20%26%20Dairies"><div className="font-semibold text-gray-900 mb-2">Dairy Products</div></a>
                                            <ul className="space-y-1 text-gray-700">
                                                <li><a href="#" className="hover:text-green-700">ice cream</a></li>
                                                <li><a href="#" className="hover:text-green-700">Milk</a></li>
                                                <li><a href="#" className="hover:text-green-700">Ghee</a></li>
                                                <li><a href="#" className="hover:text-green-700">Curd</a></li>
                                                <li><a href="#" className="hover:text-green-700">Paneer</a></li>
                                                <li><a href="#" className="hover:text-green-700">Cheese</a></li>
                                                <li><a href="#" className="hover:text-green-700">Lassi</a></li>
                                            </ul>
                                        </div>
                                        <div>

                                            <a href="/product?category=Sweets"><div className="font-semibold text-gray-900 mb-2">Sweets</div></a>
                                            <ul className="space-y-1 text-gray-700">
                                                <li><a href="#" className="hover:text-green-700">Gulab Jamun</a></li>
                                                <li><a href="#" className="hover:text-green-700">Jalebi</a></li>
                                                <li><a href="#" className="hover:text-green-700">Ladoo</a></li>
                                                <li><a href="#" className="hover:text-green-700">Barfi</a></li>
                                                <li><a href="#" className="hover:text-green-700">Halwa</a></li>
                                                <li><a href="#" className="hover:text-green-700">Peda</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href="/product?category=Baby%20Nutrition"><div className="font-semibold text-gray-900 mb-2">Baby Nutrition</div></a>
                                            <ul className="space-y-1 text-gray-700">
                                                <li><a href="#" className="hover:text-green-700">NutriBaby</a></li>
                                                <li><a href="#" className="hover:text-green-700">VitaBabe</a></li>
                                                <li><a href="#" className="hover:text-green-700">BabyFuel</a></li>
                                                <li><a href="#" className="hover:text-green-700">HealthySprout</a></li>
                                                <li><a href="#" className="hover:text-green-700">LittleVitals</a></li>
                                                <li><a href="#" className="hover:text-green-700">BloomBite</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href="/product?category=Ice%20Cream"><div className="font-semibold text-gray-900 mb-2">Ice Cream</div></a>
                                            <ul className="space-y-1 text-gray-700">
                                                <li><a href="#" className="hover:text-green-700">Chocolate ice cream</a></li>
                                                <li><a href="#" className="hover:text-green-700">vanilla ice cream</a></li>
                                                <li><a href="#" className="hover:text-green-700">Mango ice cream</a></li>
                                                <li><a href="#" className="hover:text-green-700">Strawberry ice cream</a></li>
                                                <li><a href="#" className="hover:text-green-700">Kaju Anjeer</a></li>
                                                <li><a href="#" className="hover:text-green-700">Mava badam</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href="/product?category=Organic"><div className="font-semibold text-gray-900 mb-2">Organic</div></a>
                                            <ul className="space-y-1 text-gray-700">
                                                <li><a href="#" className="hover:text-green-700">Organic Dairy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </li>
                        <li><a href="/careers" className="hover:text-green-600">Careers</a></li>
                        <li><a href="/blog" className="hover:text-green-600">Blog</a></li>
                        <li><a href="/contact" className="hover:text-green-600">Contact Us</a></li>
                    </ul>

                    <div className="hidden md:flex items-center gap-8 text-gray-900">
                        {/* <a href="#account" className="flex items-center gap-2 hover:text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-3 12.75a7.5 7.5 0 1 1 15 0 .75.75 0 0 1-.75.75h-13.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
                            <span>Account</span>
                        </a> */}
                        <a href="#wishlist" className="flex items-center gap-2 hover:text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.645 20.91 3.28 12.545a6.5 6.5 0 1 1 9.193-9.192l.282.28.282-.28a6.5 6.5 0 1 1 9.193 9.193L12.355 20.91a.5.5 0 0 1-.71 0Z" /></svg>
                            <span>Wishlist</span>
                        </a>
                        <a href="/cart" className="flex items-center gap-2 hover:text-green-700">
                            <span className="text-xs font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">0</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M2.25 3a.75.75 0 0 0 0 1.5h1.386c.27 0 .505.18.574.442l2.182 8.174a2.25 2.25 0 0 0 2.176 1.684h7.227a2.25 2.25 0 0 0 2.176-1.684l1.27-4.763a.75.75 0 0 0-.725-.953H6.77L6.2 4.424A2.25 2.25 0 0 0 3.636 3H2.25Zm6 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" /></svg>   
                            <span>Cart</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;