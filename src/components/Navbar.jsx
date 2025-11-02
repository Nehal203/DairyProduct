import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
<<<<<<< HEAD
import { categories, getProductUrl, getCategoryByName } from '../config/categories';
import { productItems } from './Productitem';

=======
import { categories, getProductUrl } from '../config/categories';

// Convert categories to menu items format
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
const menuItems = Object.entries(categories).reduce((acc, [key, category]) => ({
  ...acc,
  [category.name]: {
    ...category,
    items: category.items || []
  }
}), {});

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
<<<<<<< HEAD
    const [isAuth, setIsAuth] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { cartCount } = useCart();
    const [wishlistCount, setWishlistCount] = useState(0);
=======
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { cartCount } = useCart();
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05

    const handleCategoryClick = (categoryName) => {
        const category = Object.values(categories).find(cat => cat.name === categoryName);
        if (category) {
            navigate(category.path);
            setOpen(false);
        }
    };

    useEffect(() => {
        const onClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
<<<<<<< HEAD
        const syncAuth = () => setIsAuth(localStorage.getItem('auth') === 'true');
        syncAuth();
        const onStorage = (e) => { if (e.key === 'auth') syncAuth(); };
        document.addEventListener('mousedown', onClick);
        document.addEventListener('keydown', onKey);
        window.addEventListener('storage', onStorage);
        return () => {
            document.removeEventListener('mousedown', onClick);
            document.removeEventListener('keydown', onKey);
            window.removeEventListener('storage', onStorage);
        };
    }, []);

    useEffect(() => {
        const resolveCount = (arr) => {
            if (!Array.isArray(arr)) return 0;
            try {
                const { productItems } = require('./Productitem');
                const toDisplay = (e) => {
                    if (e && typeof e === 'object') return true;
                    if (typeof e === 'number' || (typeof e === 'string' && /^\d+$/.test(e))) {
                        const idNum = typeof e === 'number' ? e : Number(e);
                        return !!productItems.find(p => p.id === idNum);
                    }
                    return false;
                };
                return arr.filter(toDisplay).length;
            } catch {
                return arr.length;
            }
        };
        const syncWishlist = () => {
            try {
                const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
                setWishlistCount(resolveCount(stored));
            } catch {
                setWishlistCount(0);
            }
        };
        syncWishlist();
        const onStorage = (e) => { if (e.key === 'wishlist') syncWishlist(); };
        const onFocus = () => syncWishlist();
        const onVis = () => { if (!document.hidden) syncWishlist(); };
        const onCustom = () => syncWishlist();
        window.addEventListener('storage', onStorage);
        window.addEventListener('focus', onFocus);
        document.addEventListener('visibilitychange', onVis);
        window.addEventListener('wishlist-updated', onCustom);
        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('focus', onFocus);
            document.removeEventListener('visibilitychange', onVis);
            window.removeEventListener('wishlist-updated', onCustom);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
        navigate('/');
    };

=======
        document.addEventListener('mousedown', onClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onClick);
            document.removeEventListener('keydown', onKey);
        };
    }, []);

>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
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
<<<<<<< HEAD
                        {!isAuth ? (
                            <Link to="/login"><button className="bg-[#FACC15] hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-md">Login</button></Link>
                        ) : (
                            <button onClick={handleLogout} className="bg-gray-200 hover:bg-gray-300 text-black font-semibold px-5 py-2 rounded-md">Logout</button>
                        )}
=======
                        <Link to="/login"><button className="bg-[#FACC15] hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-md">Login</button></Link>
                        
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
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
                        <Link to="/"><img className='w-28 h-28' src="/images/logo.png" alt="dairy" /></Link>
                    </div>
                    <ul className="hidden md:flex items-center gap-8 text-gray-700">
                        <li><Link to="/" className="hover:text-green-600">Home</Link></li>
                        <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
<<<<<<< HEAD
                        <li className="relative" ref={menuRef} onMouseEnter={() => setOpen(true)}>
                            <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-1 hover:text-green-600">
                                <span>Products</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1.02-1.1L3.84 10l4.39-3.67a.75.75 0 1 1 1.06 1.06L6.31 10l3.88 3.23a.75.75 0 0 1-1.08 1.04l-4.5-3.75a.75.75 0 0 1 0-1.16l4.5-3.75a.75.75 0 0 1 1.06.1Z" clipRule="evenodd" /></svg>
                            </button>
                            {open && (
                                <div 
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] bg-white rounded-md shadow-xl border p-6" 
                                    role="menu" 
                                    aria-label="Products"
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => { setOpen(false); setActiveCategory(null); }}
=======
                        <li className="relative" ref={menuRef}>
                            <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-1 hover:text-green-600">
                                <span>Products</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.7a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08Z" clipRule="evenodd" /></svg>
                            </button>
                            {open && (
                                <div 
                                    className="absolute left-1/2 -translate-x-1/2 top-8 w-[720px] bg-white rounded-md shadow-xl border p-6" 
                                    role="menu" 
                                    aria-label="Products"
                                    onMouseLeave={() => setActiveCategory(null)}
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Our Products</h3>
                                        <button 
                                            className="text-gray-500 hover:text-gray-700" 
                                            onClick={() => setOpen(false)} 
                                            aria-label="Close"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        {/* Categories */}
                                        <div className="border-r pr-6">
                                            <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
                                            <ul className="space-y-2">
                                                {Object.entries(menuItems).map(([category, { path }]) => (
                                                    <li key={category}>
                                                        <div 
                                                            className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${activeCategory === category ? 'bg-gray-100 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}
                                                            onMouseEnter={() => setActiveCategory(category)}
                                                            onClick={() => handleCategoryClick(category)}
                                                        >
                                                            <span>{category}</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
<<<<<<< HEAD
                                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1.02-1.1L3.84 10l4.39-3.67a.75.75 0 1 1 1.06 1.06L6.31 10l3.88 3.23a.75.75 0 0 1-1.08 1.04l-4.5-3.75a.75.75 0 0 1 0-1.16l4.5-3.75a.75.75 0 0 1 1.06.1Z" clipRule="evenodd" />
=======
                                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1.02-1.1L3.84 10l4.39-3.67a.75.75 0 0 1 1.06 1.06L6.31 10l3.88 3.23a.75.75 0 0 1-1.08 1.04l-4.5-3.75a.75.75 0 0 1 0-1.16l4.5-3.75a.75.75 0 0 1 1.06.1Z" clipRule="evenodd" />
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                                            </svg>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* Subcategories */}
                                        <div className="col-span-2">
                                            <h4 className="text-sm font-medium text-gray-900 mb-3">
                                                {activeCategory || 'Select a category'}
                                            </h4>
                                            {activeCategory && (
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Popular Items</h5>
                                                        <ul className="space-y-2">
<<<<<<< HEAD
                                                            {menuItems[activeCategory]?.items.slice(0, 5).map((item) => {
                                                                const match = productItems.find(p => p.title.toLowerCase() === item.toLowerCase());
                                                                const to = match ? `/product/${match.id}` : getProductUrl(activeCategory, item);
                                                                return (
                                                                    <li key={item}>
                                                                        <Link 
                                                                            to={to}
                                                                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                                                            onClick={() => setOpen(false)}
                                                                        >
                                                                            {item}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
=======
                                                            {menuItems[activeCategory]?.items.slice(0, 5).map((item) => (
                                                                <li key={item}>
                                                                    <Link 
                                                                        to={getProductUrl(activeCategory, item)}
                                                                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                                                        onClick={() => setOpen(false)}
                                                                    >
                                                                        {item}
                                                                    </Link>
                                                                </li>
                                                            ))}
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                                        </ul>
                                                    </div>
                                                    <div className="bg-gray-50 rounded-lg p-4">
                                                        <h5 className="text-sm font-medium text-gray-900 mb-2">All {activeCategory}</h5>
                                                        <p className="text-xs text-gray-500 mb-3">
                                                            Browse our full range of {activeCategory.toLowerCase()}
                                                        </p>
                                                        <Link 
<<<<<<< HEAD
                                                            to={getCategoryByName(activeCategory)?.path || '#'}
=======
                                                            to={categories[activeCategory]?.path || '#'}
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                                                            className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            View all {activeCategory.toLowerCase()}
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                                                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>

                                            <Link to="/product?category=Sweets"><div className="font-semibold text-gray-900 mb-2">Sweets</div></Link>
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
                        <li><Link to="/careers" className="hover:text-green-600">Careers</Link></li>
                        <li><Link to="/blog" className="hover:text-green-600">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-green-600">Contact Us</Link></li>
                    </ul>

                    <div className="hidden md:flex items-center gap-8 text-gray-900">
                        {/* <a href="#account" className="flex items-center gap-2 hover:text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-3 12.75a7.5 7.5 0 1 1 15 0 .75.75 0 0 1-.75.75h-13.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
                            <span>Account</span>
                        </Link> */}
<<<<<<< HEAD
                        <Link to="/wishlist" className="flex items-center gap-2 hover:text-green-700 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.645 20.91 3.28 12.545a6.5 6.5 0 1 1 9.193-9.192l.282.28.282-.28a6.5 6.5 0 1 1 9.193 9.193L12.355 20.91a.5.5 0 0 1-.71 0Z" /></svg>
                            <span>Wishlist</span>
                            {wishlistCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {wishlistCount}
                                </span>
                            )}
=======
                        <Link to="/wishlist" className="flex items-center gap-2 hover:text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.645 20.91 3.28 12.545a6.5 6.5 0 1 1 9.193-9.192l.282.28.282-.28a6.5 6.5 0 1 1 9.193 9.193L12.355 20.91a.5.5 0 0 1-.71 0Z" /></svg>
                            <span>Wishlist</span>
>>>>>>> fa764a6e02b035962cd0ed7d00b1106bdf33fc05
                        </Link>
                        <Link to="/cart" className="flex items-center gap-2 hover:text-green-700 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M2.25 3a.75.75 0 0 0 0 1.5h1.386c.27 0 .505.18.574.442l2.182 8.174a2.25 2.25 0 0 0 2.176 1.684h7.227a2.25 2.25 0 0 0 2.176-1.684l1.27-4.763a.75.75 0 0 0-.725-.953H6.77L6.2 4.424A2.25 2.25 0 0 0 3.636 3H2.25Zm6 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                            </svg>   
                            <span>Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;