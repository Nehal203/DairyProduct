const Bestoffer = () => {
    const leftCards = [
        { id: 1, title: 'Ice Cream', price: 350, oldPrice: 400, rating: 5, img: '/images/offer1.png', badge: '-23%' },
        { id: 2, title: 'Ghee', price: 250, rating: 4, img: '/images/offer2.jpg' },
        { id: 3, title: 'Ghee', price: 250, rating: 4, img: '/images/offer3.jpg' },
    ];

    const rightCards = [
        { id: 4, title: 'Curd', price: 18, rating: 0, img: '/images/offer4.jpg' },
        { id: 5, title: 'Mango Lassi', price: 60, rating: 0, img: '/images/offer5.jpg' },
        { id: 6, title: 'Cheese', price: 50, rating: 0, img: '/images/offer6.jpg' },
    ];

    return (
        <section className="py-12 bg-white" id="best-offers">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">Best Offer For You</h2>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-7">
                        {leftCards.map((p) => (
                            <div key={p.id} className="bg-white rounded-2xl p-0 shadow-md border hover:shadow-lg transition flex items-center">
                                <div className="relative w-40 h-40 rounded-l-2xl overflow-hidden">
                                    {p.badge && (
                                        <span className="absolute left-3 top-3 z-10 text-xs font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">{p.badge}</span>
                                    )}
                                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-yellow-400 text-sm">{'★★★★★'.slice(0, p.rating)}<span className="ml-1 text-gray-400">({p.rating})</span></div>
                                        <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
                                    </div>
                                    <h3 className="mt-1 text-gray-800 font-semibold text-md line-clamp-1">{p.title}</h3>
                                    <span className="text-green-700 font-semibold">${p.price}.00</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-0 shadow-md border hover:shadow-lg transition">
                        <div className="relative h-96 rounded-xl overflow-hidden">
                            <span className="absolute left-3 top-3 z-10 text-xs font-semibold bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">-21%</span>
                            <img src="/images/offers.jpg" alt="Milk Product" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur rounded-xl px-4 py-3 grid grid-cols-4 gap-3 text-center text-gray-800">
                                <div>
                                    <p className="text-sm font-bold">266</p>
                                    <p className="text-[10px] text-gray-500">Days</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">04</p>
                                    <p className="text-[10px] text-gray-500">Hours</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">56</p>
                                    <p className="text-[10px] text-gray-500">Mins</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">28</p>
                                    <p className="text-[10px] text-gray-500">Secs</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-yellow-400 text-sm">{'★★★★★'.slice(0, 0)}<span className="ml-1 text-gray-400">(0)</span></div>
                                <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
                            </div>
                            <h3 className="mt-1 text-gray-800 font-semibold text-md">Milk Product</h3>
                            <div className="mt-2 mb-2 flex items-baseline gap-2">
                                <span className="text-green-700 font-semibold">$599.00</span>
                                <span className="text-gray-400 line-through text-xs">$799.00</span>
                            </div>
                            <div className="flex justify-end">
                                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800" aria-label="add-to-cart">🛒</button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-7">
                        {rightCards.map((p) => (
                            <div key={p.id} className="bg-white rounded-2xl p-0 shadow-md border hover:shadow-lg transition flex items-center">
                                <div className="relative w-40 h-40 rounded-l-2xl overflow-hidden">
                                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-yellow-400 text-sm">{'★★★★★'.slice(0, p.rating)}<span className="ml-1 text-gray-400">({p.rating})</span></div>
                                        <button className="text-gray-500 hover:text-red-500" aria-label="favorite">♡</button>
                                    </div>
                                    <h3 className="mt-1 text-gray-800 font-semibold text-md line-clamp-1">{p.title}</h3>
                                    <span className="text-green-700 font-semibold">${p.price}.00</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4">
                        <div className="text-2xl">🏷️</div>
                        <div>
                            <p className="font-semibold text-gray-900">Best prices & offers</p>
                            <p className="text-sm text-gray-500">Orders $50 or more</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4">
                        <div className="text-2xl">🚚</div>
                        <div>
                            <p className="font-semibold text-gray-900">Free delivery</p>
                            <p className="text-sm text-gray-500">24/7 amazing services</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4">
                        <div className="text-2xl">💸</div>
                        <div>
                            <p className="font-semibold text-gray-900">Great daily deal</p>
                            <p className="text-sm text-gray-500">When you sign up</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4">
                        <div className="text-2xl">↩️</div>
                        <div>
                            <p className="font-semibold text-gray-900">Easy returns</p>
                            <p className="text-sm text-gray-500">Within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Bestoffer;
