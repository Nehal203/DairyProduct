import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productItems } from './Productitem';

const Productpage = () => {
    const [params, setParams] = useSearchParams();
    const active = params.get('category') || 'All';

    const categories = useMemo(() => {
        const set = new Set(productItems.map(p => p.category));
        return ['All', ...Array.from(set)];
    }, []);

    const products = useMemo(() => {
        if (active === 'All') return productItems;
        return productItems.filter(p => p.category === active);
    }, [active]);

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
                                        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800">🛒</button>
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
