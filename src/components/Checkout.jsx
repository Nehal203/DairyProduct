import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaLock, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { BsCheck2 } from 'react-icons/bs';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [activeTab, setActiveTab] = useState('shipping');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [sameAsShipping, setSameAsShipping] = useState(true);
    const { cartItems, cartTotal, clearCart } = useCart();
    const shipping = cartItems.length > 0 ? 5.00 : 0;
    const total = cartTotal + shipping;

    return (
        <motion.section className="pt-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <motion.div className="w-full bg-[#39251A] text-white" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">Checkout</h3>
                </div>
            </motion.div>
        <motion.div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <motion.div className="bg-white rounded-lg shadow-sm p-6 mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>
                            
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTab === 'shipping' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                        {activeTab === 'shipping' ? <BsCheck2 /> : '1'}
                                    </div>
                                    <span className="text-xs mt-2">Shipping</span>
                                </div>
                                <div className="h-1 flex-1 bg-gray-200 mx-2"></div>
                                <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTab === 'payment' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                        {activeTab === 'payment' ? <BsCheck2 /> : '2'}
                                    </div>
                                    <span className="text-xs mt-2">Payment</span>
                                </div>
                                <div className="h-1 flex-1 bg-gray-200 mx-2"></div>
                                <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTab === 'confirmation' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                        {activeTab === 'confirmation' ? <BsCheck2 /> : '3'}
                                    </div>
                                    <span className="text-xs mt-2">Confirmation</span>
                                </div>
                            </div>

                            {activeTab === 'shipping' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                    <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code</label>
                                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                            <option>India</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>United Kingdom</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center mb-6">
                                        <input 
                                            type="checkbox" 
                                            id="billing-same" 
                                            className="h-4 w-4 text-blue-600 rounded"
                                            checked={sameAsShipping}
                                            onChange={(e) => setSameAsShipping(e.target.checked)}
                                        />
                                        <label htmlFor="billing-same" className="ml-2 text-sm text-gray-700">
                                            Billing address is the same as shipping
                                        </label>
                                    </div>
                                    <div className="flex justify-between">
                                        <Link to="/cart" className="flex items-center text-[#FACC15] hover:text-blue-800">
                                            <FaArrowLeft className="mr-2" /> Return to cart
                                        </Link>
                                        <button 
                                            onClick={() => setActiveTab('payment')}
                                            className="bg-[#39251A] text-white px-6 py-2 rounded-md hover:bg-blue-700"
                                        >
                                            Continue to Payment
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'payment' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                    <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div 
                                            className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'credit' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                                            onClick={() => setPaymentMethod('credit')}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className={`h-5 w-5 rounded-full border-2 ${paymentMethod === 'credit' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                                                        {paymentMethod === 'credit' && <div className="h-2 w-2 bg-white rounded-full"></div>}
                                                    </div>
                                                    <span className="font-medium">Credit Card</span>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <FaCcVisa className="text-2xl text-gray-500" />
                                                    <FaCcMastercard className="text-2xl text-gray-500" />
                                                </div>
                                            </div>
                                            
                                            {paymentMethod === 'credit' && (
                                                <div className="mt-4 space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                                        <input 
                                                            type="text" 
                                                            placeholder="1234 5678 9012 3456"
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                                                            <input 
                                                                type="text" 
                                                                placeholder="MM/YY"
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                                            <div className="relative">
                                                                <input 
                                                                    type="text" 
                                                                    placeholder="123"
                                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10" 
                                                                />
                                                                <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                                                        <input 
                                                            type="text" 
                                                            placeholder="John Smith"
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div 
                                            className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                                            onClick={() => setPaymentMethod('paypal')}
                                        >
                                            <div className="flex items-center">
                                                <div className={`h-5 w-5 rounded-full border-2 ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                                                    {paymentMethod === 'paypal' && <div className="h-2 w-2 bg-white rounded-full"></div>}
                                                </div>
                                                <span className="font-medium">PayPal</span>
                                                <FaCcPaypal className="text-2xl text-blue-500 ml-auto" />
                                            </div>
                                        </div>

                                        <div 
                                            className={`border rounded-md p-4 cursor-pointer ${paymentMethod === 'apple' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                                            onClick={() => setPaymentMethod('apple')}
                                        >
                                            <div className="flex items-center">
                                                <div className={`h-5 w-5 rounded-full border-2 ${paymentMethod === 'apple' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                                                    {paymentMethod === 'apple' && <div className="h-2 w-2 bg-white rounded-full"></div>}
                                                </div>
                                                <span className="font-medium">Apple Pay</span>
                                                <FaCcApplePay className="text-2xl text-black ml-auto" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-4 border-t">
                                        <button 
                                            onClick={() => setActiveTab('shipping')}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <FaArrowLeft className="inline mr-1" /> Back to Shipping
                                        </button>
                                        <button 
                                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                                            onClick={() => { setActiveTab('confirmation'); clearCart(); }}
                                        >
                                            Complete Order
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'confirmation' && (
                                <motion.div className="text-center py-12" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <BsCheck2 className="text-green-600 text-3xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your order!</h3>
                                    <p className="text-gray-600 mb-6">Your order has been received and is being processed.</p>
                                    <p className="text-sm text-gray-500 mb-8">Order #12345 • {new Date().toLocaleDateString()}</p>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                        Continue Shopping
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>

                    <div className="lg:w-1/3">
                        <motion.div className="bg-white rounded-lg shadow-sm p-6 sticky top-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                            <h3 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h3>
                            
                            <div className="space-y-4 mb-6">
                              {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center">
                                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.title}</h4>
                                    <div className="flex justify-between items-center mt-1">
                                      <span className="text-sm text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                                      <span className="text-sm text-gray-500">x{item.quantity}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              {cartItems.length === 0 && (
                                <p className="text-sm text-gray-500">No items in cart.</p>
                              )}
                            </div>

                            <div className="border-t border-b border-gray-200 py-4 space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Subtotal</span>
                                    <span className="text-sm font-medium text-gray-900">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Shipping</span>
                                    <span className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
                            </div>

                            <div className="text-xs text-gray-500">
                                <p className="mb-2">By placing your order, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
                                <p>Need help? <a href="#" className="text-blue-600 hover:underline">Contact us</a></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
        </motion.section>
    );
};

export default Checkout;
