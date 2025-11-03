import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';

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
            duration: 0.5
        }
    }
};

const buttonHover = {
    scale: 1.02,
    backgroundColor: '#39251A',
    color: '#fff',
    transition: { duration: 0.2 }
};

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
        <motion.section
            id="contact"
            className="pt-28 relative z-10"
            style={{ position: 'relative' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-full bg-[#39251A] text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <motion.h3
                        className="text-2xl tracking-wide"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Contact us
                    </motion.h3>
                </div>
            </motion.div>

            <motion.div
                className="items-center justify-center flex flex-col py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-3xl font-bold text-gray-800 mb-2 text-center"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get in <span className="text-[#FACC15]">Touch</span> with us
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Reach out and connect with us today for any inquiries or assistance!
                </motion.p>
            </motion.div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div className="space-y-8" variants={container}>
                        <motion.div variants={item}>
                            <motion.h3
                                className="text-2xl font-bold text-gray-800 mb-6"
                                whileHover={{ x: 5 }}
                            >
                                Contact Information
                            </motion.h3>
                            <motion.p className="text-gray-600 mb-6" variants={item}>
                                Feel free to get in touch with us. We are always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.
                            </motion.p>
                            <motion.div className="space-y-4" variants={container}>
                                <motion.div
                                    className="flex items-start gap-4 rounded bg-white border border-gray-200 p-4 shadow-lg"
                                    variants={item}
                                    whileHover={{ x: 5 }}
                                >   
                                    <motion.div
                                        className="mt-1 p-2 bg-[#39251A] rounded-full "
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <PhoneIcon className="h-5 w-5 text-white" />
                                    </motion.div>
                                    <motion.div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <a href="tel:+15550000000" className="text-gray-600 hover:underline">+1 (555) 000-0000</a>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-4 rounded bg-white border border-gray-200 p-4 shadow-lg"
                                    variants={item}
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.div
                                        className="mt-1 p-2 bg-[#39251A] rounded-full"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <EnvelopeIcon className="h-5 w-5 text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <a href="mailto:info@dairyfarm.com" className="text-gray-600 hover:underline">info@dairyfarm.com</a>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-4 rounded bg-white border border-gray-200 p-4 shadow-lg"
                                    variants={item}
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.div
                                        className="mt-1 p-2 bg-[#39251A] rounded-full"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <MapPinIcon className="h-5 w-5 text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold">Location</h4>
                                        <a
                                            href="https://www.google.com/maps?q=123+Farm+Street,+Countryside,+12345"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="text-gray-600 hover:underline"
                                        >
                                            123 Farm Street, Countryside, 12345
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-md"
                        variants={item}
                    >
                        <motion.form
                            className="space-y-6"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={container}>
                                <motion.div variants={item}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FACC15] focus:border-transparent"
                                        whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(250, 204, 21, 0.5)' }}
                                    />
                                </motion.div>
                                <motion.div variants={item}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FACC15] focus:border-transparent"
                                        whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(250, 204, 21, 0.5)' }}
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div variants={item}>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <motion.input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FACC15] focus:border-transparent"
                                    whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(250, 204, 21, 0.5)' }}
                                />
                            </motion.div>

                            <motion.div variants={item}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <motion.textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#FACC15] focus:border-transparent"
                                    whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(250, 204, 21, 0.5)' }}
                                ></motion.textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="px-6 py-2 bg-[#39251A] text-white font-medium rounded-md hover:bg-[#39251A] hover:text-white transition-colors w-full sm:w-auto"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: '#39251A',
                                    color: '#fff'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 bg-white rounded-xl shadow-lg p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className="h-[500px] rounded-xl overflow-hidden relative z-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <MapContainer
                            center={[51.505, -0.09]}
                            zoom={13}
                            style={{
                                height: '100%',
                                width: '100%',
                                position: 'relative',
                                zIndex: 0
                            }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker
                                position={[51.505, -0.09]}
                                icon={icon}
                            >
                                <Popup>
                                    Our Farm Location
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Contactus;
