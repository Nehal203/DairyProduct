
import { PhoneIcon } from "@heroicons/react/24/outline";
import Ourfeatured from "./Ourfeatured";
import Joinourteam from "./Joinourteam";
import Ourexpertise from "./Ourexpertise";


const About = () => {
    return (
        <section id="about" className="pt-28">
            <div className="w-full bg-[#39251A] text-white">
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">About us</h3>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative w-full">
                    <img src="/images/about1.jpg" alt="about1" className="rounded-xl w-3/4 h-full object-cover" />
                    <img src="/images/about2.jpg" alt="about2" className="rounded-xl w-2/3 h-72 object-cover absolute -bottom-28 left-40 shadow-xl" />
                </div>

                <div>
                    <div className="flex mt-8 items-center gap-2 text-amber-600 text-sm font-semibold">
                        <span className="text-lg">✦</span>
                        <span className="text-[#3F2C20] font-bold">ABOUT US</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Fresh Dairy goodness from<br /> farm to home</h2>
                    <p className="text-gray-600 mt-6">Lorem ipsum dolor sit amet consectetur. Pellentesque lacus a duis viverra congue massa nisi orci. Ac maecenas orci auctor gravida lacus mi sit.</p>

                    <ul className="mt-16 space-y-3 text-gray-700">
                        <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span><span>Enjoy fresh, natural milk without any chemicals or additives.</span></li>
                        <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span><span>Our milk retains natural creaminess, calcium, and essential vitamins.</span></li>
                        <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span><span>Deliver fresh, high-quality dairy products by caring.</span></li>
                        <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-yellow-400"></span><span>Pure, wholesome dairy products you can trust.</span></li>
                    </ul>

                    <div className="mt-24 flex flex-wrap-2 items-center gap-4">
                        <button className="flex flex-wrap-2 items-center gap-0 bg-[#39251A] text-white px-4 py-3 rounded-md">
                            <img src="/images/icon1.png" className="h-10 w-10" alt="" />
                            <span className="text-lg font-semibold">Sustainable & Eco-Friendly Practices</span>
                        </button>
                        <button className="flex flex-wrap-2 items-center gap-0 bg-[#FDC040] text-white px-4 py-3 rounded-md">
                            <img src="/images/icon2.png" className="h-10 w-10" alt="" />
                            <span className="text-lg font-semibold">Trusted By Families & Health Experts</span>
                        </button>
                    </div>

                    <div className="mt-16 flex items-center gap-6">
                        <a href="" className="group inline-flex items-center bg-[#E5C96C] hover:bg-[#18555C] hover:text-white text-[#18555C] px-5 py-2 rounded-md text-sm font-semibold transition">
                            More About
                            <span className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] group-hover:text-[#18555C] group-hover:bg-[#E5C96C] text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                        <div className="flex items-center gap-3 text-sm text-gray-700">
                            <div className="w-9 h-9 rounded-full bg-[#FDC040] text-white flex items-center justify-center"><PhoneIcon className="w-6 h-6" /> </div>
                            <div>
                                <p className="text-xs text-gray-500">Need help?</p>
                                <p className="font-medium">+(1234 567896)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-[#39251A] text-white rounded-3xl p-6 md:p-10 relative">
                    <div className="flex flex-col  md:flex-row md:items-center md:justify-center gap-28">
                        <div>
                            <div className="flex items-center gap-2 text-yellow-300 text-lg font-semibold">
                                <span className="text-4xl">✦</span>
                                <span className="text-white">Our Approach</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mt-2">Nurturing cows, nature, and<br /> community together</h3>
                            <p className="text-white mt-4 max-w-2xl">We follow a ‘Farm-to-Home’ philosophy, meaning our milk goes <br />directly from healthy, well-fed cows to your doorstep without<br /> unnecessary processing or delay. Our cows are raised with <br />compassion</p>
                        </div>
                        <a href="" className="group inline-flex items-center bg-[#E5C96C] hover:bg-white text-[#18555C] px-5 py-2 rounded-md text-sm font-semibold transition">
                            Contact Us
                            <span className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded bg-[#18555C] group-hover:text-[#18555C] group-hover:bg-[#E5C96C] text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5.5 5.5a1 1 0 010 1.414l-5.5 5.5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-[#4D3B31] rounded-2xl p-7">
                            <div className="w-10 h-10 rounded-full bg-[#FFB41A] flex items-center justify-center  text-yellow-300">🏆</div>
                            <h4 className="text-xl font-semibold mt-4">Our Mission</h4>
                            <p className="text-amber-100 text-sm mt-2">Our mission is to promote agriculture organic milk production that nurture.</p>
                            <br/>
                            <ul className="mt-4 space-y-2 text-amber-100 text-sm">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>High-quality organic milk</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Comprehensive milk testing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Organic milk production management</li>
                            </ul>
                        </div>
                        <div className="bg-[#4D3B31] rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-full bg-[#FFB41A] flex items-center justify-center text-yellow-300">🎯</div>
                            <h4 className="text-xl font-semibold mt-4">Our Vision</h4>
                            <p className="text-amber-100 text-sm mt-2">Our vision is to promote agriculture organic milk production that nurture.</p>
                            <br />
                            <ul className="mt-4 space-y-2 text-amber-100 text-sm">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>High-quality organic milk</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Comprehensive milk testing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Organic milk production management</li>
                            </ul>
                        </div>
                        <div className="bg-[#4D3B31] rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-full bg-[#FFB41A] flex items-center justify-center text-yellow-300">🎯</div>
                            <h4 className="text-xl font-semibold mt-4">Our Goal</h4>
                            <p className="text-amber-100 text-sm mt-2">Our goal is to promote agriculture organic milk production that nurture.</p>
                            <br />
                            <ul className="mt-4 space-y-2 text-amber-100 text-sm">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>High-quality organic milk</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Comprehensive milk testing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>Organic milk production management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Ourfeatured />
            <Joinourteam />
            <Ourexpertise />
        </section>
        
    );
};

export default About;
