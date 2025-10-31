import React, { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productItems } from './Productitem';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const Productpage = () => {
    const [params, setParams] = useSearchParams();
    const active = params.get('category') || 'All';
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 1000
    });
    const [weightFilter, setWeightFilter] = useState('all');
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(null);

    const handleAddToCart = async (product, e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        
        setIsAdding(product.id);
        try {
            await addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                oldPrice: product.oldPrice,
                img: product.img,
                quantity: 1
            });
            navigate('');
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsAdding(null);
        }
    };

    const categories = useMemo(() => {
        const set = new Set(productItems.map(p => p.category));
        return ['All', ...Array.from(set)];
    }, []);

    const products = useMemo(() => {
        let filtered = [...productItems];
        
        // Filter by category
        if (active !== 'All') {
            filtered = filtered.filter(p => p.category === active);
        }
        
        // Filter by price range
        filtered = filtered.filter(p => 
            p.price >= priceRange.min && p.price <= priceRange.max
        );
        
        // Filter by weight if specified
        if (weightFilter !== 'all') {
            filtered = filtered.filter(p => 
                p.weight && p.weight.toLowerCase().includes(weightFilter.toLowerCase())
            );
        }
        
        return filtered;
    }, [active, priceRange, weightFilter]);

    const onSelect = (cat) => {
        if (cat === 'All') {
            params.delete('category');
            setParams(params, { replace: true });
        } else {
            setParams({ category: cat }, { replace: true });
        }
    };

    return (
        <section className="pt-28 pb-12 bg-gray-50 min-h-screen">
            <div className="w-full bg-[#39251A] text-white">
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">All Dairy Product</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 lg:grid-cols-4 gap-6 mt-16">
                <aside className="lg:col-span-1">
                    <div className="bg-white rounded-xl border p-4">
                        <div className="text-lg font-semibold mb-3">Categories</div>
                        <div className="space-y-2">
                            {categories.map(c => (
                                <button
                                    key={c}
                                    onClick={() => onSelect(c)}
                                    className={`w-full text-left px-3 py-2 rounded-md border transition ${active === c ? 'bg-green-50 border-green-400 text-green-700' : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-700'}`}
                                >

                                    {c}
                                </button>
                            ))}
                        </div>

                        {/* Price Range Filter */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3 text-gray-800">Price Range</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">₹{priceRange.min}</span>
                                    <span className="text-gray-600">₹{priceRange.max}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({
                                        ...prev,
                                        max: parseInt(e.target.value)
                                    }))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4D3B31]"
                                />
                            </div>
                        </div>

                        {/* Weight Filter */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3 text-gray-800">Weight</h4>
                            <div className="space-y-2">
                                {['All', '500g', '1kg', '5kg', '10kg'].map((weight) => (
                                    <label key={weight} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="weight"
                                            checked={weightFilter === weight.toLowerCase()}
                                            onChange={() => setWeightFilter(weight === 'All' ? 'all' : weight.toLowerCase())}
                                            className="h-4 w-4 text-[#4D3B31] focus:ring-[#4D3B31] border-gray-300"
                                        />
                                        <span className="text-gray-700">{weight}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="lg:col-span-3">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div>Showing 1–{products.length} of {productItems.length} results</div>
                        <select className="border rounded-md px-3 py-2">
                            <option>Default Sorting</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map(p => (
                            <div key={p.id} className="bg-white rounded-2xl p-3 shadow-sm border hover:shadow-md transition">
                                <div className="relative h-56 rounded-2xl overflow-hidden" style={{ backgroundColor: p.bgColor }}>
                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain" />
                                    </div>                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-yellow-400 text-sm">{'★★★★★'.slice(0, p.rating)}<span className="ml-1 text-gray-400">({p.rating})</span></div>
                                        <button className="text-gray-500 hover:text-red-500">♡</button>
                                    </div>
                                    <h3 className="mt-1 text-gray-800 font-semibold text-md line-clamp-1">{p.title}</h3>
                                    <p className="mt-1 text-gray-600 text-sm">{p.description}</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-green-700 font-semibold">${p.price.toFixed(2)}</span>
                                        <button 
                                            onClick={(e) => handleAddToCart(p, e)}
                                            disabled={isAdding === p.id}
                                            className={`w-9 h-9 flex items-center justify-center rounded-full ${isAdding === p.id ? 'bg-green-600' : 'bg-gray-900 hover:bg-gray-800'} text-white transition-colors`}
                                        >
                                            {isAdding === p.id ? '✓' : '🛒'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};
export default Productpage;
