
import { PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Ourfeatured from "./Ourfeatured";
import Joinourteam from "./Joinourteam";
import Ourexpertise from "./Ourexpertise";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.8 }
    }
};

const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};


const About = () => {
    return (
        <motion.section
            id="about"
            className="pt-28"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
        >
            <motion.div
                className="w-full bg-[#39251A] text-white"
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">About us</h3>
                </div>
            </motion.div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                variants={container}
            >
                <motion.div
                    className="relative w-full"
                    variants={slideInFromLeft}
                >
                    <motion.img
                        src="/images/about1.jpg"
                        alt="about1"
                        className="rounded-xl w-3/4 h-full object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <motion.img
                        src="/images/about2.jpg"
                        alt="about2"
                        className="rounded-xl w-2/3 h-72 object-cover absolute -bottom-28 left-40 shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>

                <div>
                    <motion.div
                        className="flex mt-8 items-center gap-2 text-amber-600 text-sm font-semibold"
                        variants={item}
                    >
                        <span className="text-lg">✦</span>
                        <span className="text-[#3F2C20] font-bold">ABOUT US</span>
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 mt-4"
                        variants={item}
                    >
                        Fresh Dairy goodness from<br /> farm to home
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 mt-6"
                        variants={item}
                    >
                        Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a duis viverra congue massa nisi orci. Ac maecenas orci auctor gravida lacus mi sit.
                    </motion.p>

                    <motion.ul
                        className="mt-16 space-y-3 text-gray-700"
                        variants={container}
                    >
                        <motion.li
                            className="flex items-start gap-3"
                            variants={item}
                        >
                            <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span>
                            <span>Enjoy fresh, natural milk without any chemicals or additives.</span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-3"
                            variants={item}
                        >
                            <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span>
                            <span>Our milk retains natural creaminess, calcium, and essential vitamins.</span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-3"
                            variants={item}
                        >
                            <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span>
                            <span>Deliver fresh, high-quality dairy products by caring.</span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-3"
                            variants={item}
                        >
                            <span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span>
                            <span>Pure, wholesome dairy products you can trust.</span>
                        </motion.li>
                    </motion.ul>

                    <motion.div
                        className="mt-24 flex flex-wrap-2 items-center gap-4"
                        variants={container}
                    >
                        <motion.button
                            className="flex flex-wrap-2 items-center gap-0 bg-[#39251A] text-white px-4 py-3 rounded-md"
                            variants={item}
                            whileHover={{ scale: 1.03, backgroundColor: '#4D3B31' }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            <img src="/images/icon1.png" className="h-10 w-10" alt="" />
                            <span className="text-lg font-semibold">Sustainable & Eco-Friendly Practices</span>
                        </motion.button>
                        <motion.button
                            className="flex flex-wrap-2 items-center gap-0 bg-[#FDC040] text-white px-4 py-3 rounded-md"
                            variants={item}
                            whileHover={{ scale: 1.03, backgroundColor: '#FFD166' }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            <img src="/images/icon2.png" className="h-10 w-10" alt="" />
                            <span className="text-lg font-semibold">Trusted By Families & Health Experts</span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="mt-16 flex items-center gap-6"
                        variants={container}
                    >
                        <motion.a
                            href="#"
                            className="group inline-flex items-center bg-[#E5C96C] hover:bg-[#18555C] hover:text-white text-[#18555C] px-5 py-2 rounded-md text-sm font-semibold"
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            More About
                            <motion.span
                                className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] group-hover:text-[#18555C] group-hover:bg-[#E5C96C] text-white"
                                variants={item}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </motion.span>
                        </motion.a>
                        <motion.div
                            className="flex items-center gap-3 text-sm text-gray-700"
                            variants={item}
                        >
                            <div className="w-9 h-9 rounded-full bg-[#FDC040] text-white flex items-center justify-center"><PhoneIcon className="w-6 h-6" /> </div>
                            <div>
                                <p className="text-xs text-gray-500">Need help?</p>
                                <p className="font-medium">+(1234 567896)</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="max-w-7xl mx-auto bg-[#39251A] text-white rounded-3xl p-6 md:p-10 relative"
                    variants={fadeIn}
                >
                    <motion.div
                        className="flex flex-col md:flex-row md:items-center md:justify-center gap-28"
                        variants={container}
                    >
                        <div>
                            <div className="flex items-center gap-2 text-yellow-300 text-lg font-semibold">
                                <span className="text-4xl">✦</span>
                                <span className="text-white">Our Approach</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mt-2">Nurturing cows, nature, and<br /> community together</h3>
                            <p className="text-white mt-4 max-w-2xl">We follow a ‘Farm-to-Home’ philosophy, meaning our milk goes <br />directly from healthy, well-fed cows to your doorstep without<br /> unnecessary processing or delay. Our cows are raised with <br />compassion</p>
                        </div>
                        <motion.a
                            href="#"
                            className="group inline-flex items-center bg-[#E5C96C] hover:bg-white text-[#18555C] px-5 py-2 rounded-md text-sm font-semibold"
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                            <motion.span
                                className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] group-hover:text-[#18555C] group-hover:bg-[#E5C96C] text-white"
                                variants={item}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </motion.span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                        variants={container}
                    >
                        <motion.div
                            className="bg-[#4D3B31] rounded-2xl p-7 h-full"
                            variants={item}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-[#FFB41A] flex items-center justify-center  text-yellow-300">🏆</div>
                            <h4 className="text-xl font-semibold mt-4">Our Mission</h4>
                            <p className="text-amber-100 text-sm mt-2">Our mission is to promote agriculture organic milk production that nurture.</p>
                            <br />
                            <ul className="mt-4 space-y-2 text-amber-100 text-sm">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>High-quality organic milk</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Comprehensive milk testing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Organic milk production management</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="bg-[#4D3B31] rounded-2xl p-6 h-full"
                            variants={item}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-[#FFB41A] flex items-center justify-center text-yellow-300">🎯</div>
                            <h4 className="text-xl font-semibold mt-4">Our Vision</h4>
                            <p className="text-amber-100 text-sm mt-2">Our vision is to promote agriculture organic milk production that nurture.</p>
                            <br />
                            <ul className="mt-4 space-y-2 text-amber-100 text-sm">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>High-quality organic milk</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Comprehensive milk testing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Organic milk production management</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="bg-[#4D3B31] rounded-2xl p-6 h-full"
                            variants={item}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-[#FFB41A] flex items-center justify-center text-yellow-300">🎯</div>
                            <h4 className="text-xl font-semibold mt-4">Our Goal</h4>
                            <p className="text-amber-100 text-sm mt-2">Our goal is to promote agriculture organic milk production that nurture.</p>
                            <br />
                            <ul className="mt-4 space-y-2 text-amber-100 text-sm">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>High-quality organic milk</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Comprehensive milk testing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Organic milk production management</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <Ourfeatured />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <Joinourteam />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Ourexpertise />
            </motion.div>
        </motion.section>
    );
}

export default About;
