import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('auth', 'true');
        navigate('/');
    };
    return (
        <motion.section id="signup" className="pt-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <motion.div className="w-full bg-[#39251A] text-white" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">Register</h3>
                </div>
            </motion.div>
            <motion.div className='min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8' initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <motion.div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg z-10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                    <div className="text-center">
                        <img src="/images/logo1.png" className="w-60 h-20 mx-auto" alt="" />
                        <p className="mt-2 text-sm text-gray-600">
                            Join us today and get started
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <div>
                                    <label htmlFor="first-name" className="sr-only">First Name</label>
                                    <input id="first-name" name="firstName" type="text" required className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tl-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="sr-only">Last Name</label>
                                    <input id="last-name" name="lastName" type="text" required className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-tr-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                                <input id="confirm-password" name="confirmPassword" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the <a href="#" className="text-[#777777] hover:text-indigo-500">Terms</a> and <a href="#" className="text-[#777777] hover:text-indigo-500">Privacy Policy</a>
                            </label>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#39251A] hover:bg-[#39251A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div className="flex justify-center">
                                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <FaGoogle className="h-5 w-5 text-red-500" />
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <FaFacebookF className="h-5 w-5 text-blue-600" />
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <FaTwitter className="h-5 w-5 text-blue-400" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="font-medium text-[#777777] hover:text-indigo-500">Sign in</a>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Signup;