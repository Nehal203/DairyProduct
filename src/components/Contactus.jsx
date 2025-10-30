import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const Contactus = () => {
    return (
        <section id="contact" className="pt-28">
            <div className="w-full bg-[#39251A] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">Contact us</h3>
                </div>
            </div>

            <div className="items-center justify-center flex flex-col py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in <span className="text-[#FACC15]">Touch</span> with us</h2>
                <p className="text-gray-600 mb-8">Reach out and connect with us today for any inquiries or assistance!</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8">Fill up the form and our Team will get back to you within 24 hours.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 border  bg-white rounded-lg p-4 shadow-md">
                                <div className="bg-[#39251A] p-3 rounded-full">
                                    <PhoneIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold  text-bold text-black ">Phone Number</h4>
                                    <p className="text-gray-600">+1 (123) 456-7890</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 border bg-white rounded-lg p-4 shadow-md">
                                <div className="bg-[#39251A] p-3 rounded-full">
                                    <EnvelopeIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-bold text-black">Email us at</h4>
                                    <p className="text-gray-600">info@ranny dairy.com</p>
                                    <p className="text-gray-600">ranny dairy@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 border bg-white rounded-lg p-4 shadow-md">
                                <div className="bg-[#39251A] p-3 rounded-full">
                                    <MapPinIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-bold text-black">Our Location</h4>
                                    <p className="text-gray-600">Ranny dairy farm , Near Law <br /> Garden, Ellisbridge,<br /> Ahmedabad.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white p-8 rounded-lg shadow-md">


                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                        placeholder="first Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                        placeholder="last Name"
                                    />
                                </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-1/2 bg-[#39251A] text-white py-3 px-6 rounded-full transition duration-300 font-medium"
                            >
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </div >
            <div className="mt-16 mb-1 rounded-lg overflow-hidden shadow-lg opacity-50 ">
                {/* <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h3> */}
                <div className="h-96 w-full">
                    <MapContainer
                        center={[40.7128, -74.0060]}
                        zoom={13}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[40.7128, -74.0060]} icon={icon}>
                            <Popup>
                                Our Office <br /> 123 Business Street, New York
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section >
    );
};

export default Contactus;