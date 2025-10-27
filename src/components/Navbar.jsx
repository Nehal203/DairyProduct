import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify gap-40 items-center h-16">
                    <div className="flex-shrink-0">
                        {/* <h2 className="text-2xl font-bold text-green-800">Rainy Dairy</h2> */}
                        <img className='w-36 h-36' src="/images/logo.png" alt="dairy" />
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-300">
                                Home
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-300">
                                About
                            </a>
                            <a href="#products" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-300">
                                Products
                            </a>
                            <a href="#careers" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-300">
                                Careers
                            </a>
                            <a href="#blog" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-300">
                                Blog
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition duration-300">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                            Account
                        </button>
                        <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                            Wishlist
                        </button>
                        <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                            Cart
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-green-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;