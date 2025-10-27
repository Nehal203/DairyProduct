import React from 'react';

const steps = [
    { title: 'Choose your products', icon: '🛒' },
    { title: 'Order and make a payment', icon: '💳' },
    { title: 'Share your location', icon: '📍' },
    { title: 'Get delivered', icon: '🛵' },
];

const Express = () => {
    return (
        <section className="py-12" id="express">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-md tracking-widest text-[#FACC15] font-semibold">EXPRESS DELIVERY</p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">30 Minutes Delivery Process</h2>
                <p className="mt-3 max-w-3xl mx-auto text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada pellentesque turpis eget facilisis. <br />
                    Sed sit amet efficitur ex. Fusce dapibus nulla vel ligula porttitor interdum. Cras at vulputate felis vestibulum <br />
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((s) => (
                        <div key={s.title} className="flex flex-col items-center">
                            <div className="w-26 h-26  text-yellow-600 flex items-center justify-center text-2xl">
                                <span>{s.icon}</span>
                            </div>
                            <p className="mt-3 text-black font-bold text-sm text-center max-w-[12rem]">{s.title}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <div className="h-2 bg-yellow-300 rounded-full w-full max-w-6xl mx-auto" />
                    <div className="relative max-w-5xl mx-auto -mt-3 flex justify-between px-2">
                        {[0, 1, 2, 3].map((i) => (
                            <span key={i} className="w-6 h-6 bg-white border-4 border-yellow-400 rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Express;
