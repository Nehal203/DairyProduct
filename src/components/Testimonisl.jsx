import { useEffect, useState } from 'react';

const testimonials = [
    {
        name: 'Shivam Sharma',
        role: 'Molecular Biologist',
        quote:
            "I recommend this milk to all my clients. It's not just free from additives — it's naturally rich in nutrients, easy to digest, and incredibly fresh. It's reassuring to know it comes from cows raised ethically and without artificial hormones",
        avatar: '/images/test1.jpg',
    },
    {
        name: 'Shivam Sharma',
        role: 'Molecular Biologist',
        quote:
            "I recommend this milk to all my clients. It's not just free from additives — it's naturally rich in nutrients, easy to digest, and incredibly fresh. It's reassuring to know it comes from cows raised ethically and without artificial hormones",
        avatar: '/images/test2.jpg',
    },
    {
        name: 'Shivam Sharma',
        role: 'Molecular Biologist',
        quote:
            "I recommend this milk to all my clients. It's not just free from additives — it's naturally rich in nutrients, easy to digest, and incredibly fresh. It's reassuring to know it comes from cows raised ethically and without artificial hormones",
        avatar: '/images/test3.jpg',
    },
];

const Testimonisl = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(id);
    }, []);

    const t = testimonials[current];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[#FACC15] font-semibold tracking-wide text-xs">OUR TESTIMONIALS</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">{t.name}</h2>
                <p className="text-gray-600">{t.role}</p>

                <blockquote className="mt-6 text-black italic leading-8 text-xl">
                    {t.quote}
                </blockquote>

                <div className="mt-6 text-yellow-500 text-xl">★★★★★</div>

                <div className="mt-8 flex items-center justify-center gap-6">
                    {testimonials.map((item, idx) => (
                        <img
                            key={idx}
                            className={
                                idx === current
                                    ? 'w-14 h-14 rounded-full object-cover ring-4 ring-yellow-400 p-1 bg-yellow-400 transition-all duration-300'
                                    : 'w-12 h-12 rounded-full object-cover ring-2 ring-transparent opacity-70 hover:opacity-100 transition-all duration-300'
                            }
                            src={item.avatar}
                            alt={`avatar-${idx + 1}`}
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-gray-400">
                    {testimonials.map((_, idx) => (
                        <span
                            key={idx}
                            className={
                                idx === current
                                    ? 'w-5 h-2 rounded-full bg-yellow-400'
                                    : 'w-2 h-2 rounded-full bg-gray-300'
                            }
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonisl;
