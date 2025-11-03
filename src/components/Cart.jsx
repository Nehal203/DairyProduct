import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const Cart = () => {
    const { 
        cartItems, 
        removeFromCart, 
        updateQuantity, 
        cartTotal, 
        clearCart 
    } = useCart();

    const shipping = cartItems.length > 0 ? 5.00 : 0;
    const total = cartTotal + shipping;

    if (cartItems.length === 0) {
        return (
            <motion.div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <motion.div className="max-w-7xl mx-auto text-center py-12" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                        <FiShoppingBag className="w-8 h-8 text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
                    <Link 
                        to="/product" 
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#39251A] hover:bg-[#2a1c14]"
                    >
                        Continue Shopping
                    </Link>
                </motion.div>
            </motion.div>
        );
    }

    return (    
        <motion.section id="cart" className="pt-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
             <motion.div className="w-full bg-[#39251A] text-white" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">Cart</h3>
                </div>
            </motion.div>
        
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 border-b">
                                <div className="col-span-5">
                                    <span className="text-sm font-medium text-gray-500">PRODUCT</span>
                                </div>
                                <div className="col-span-2 text-center">
                                    <span className="text-sm font-medium text-gray-500">PRICE</span>
                                </div>
                                <div className="col-span-3 text-center">
                                    <span className="text-sm font-medium text-gray-500">QUANTITY</span>
                                </div>
                                <div className="col-span-2 text-right">
                                    <span className="text-sm font-medium text-gray-500">SUBTOTAL</span>
                                </div>
                            </div>

                            {cartItems.map((item, idx) => (
                                <motion.div 
                                  key={item.id} 
                                  className="p-4 border-b last:border-b-0 flex flex-col md:grid md:grid-cols-12 gap-4"
                                  initial={{ opacity: 0, y: 12 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                                >
                                    <div className="flex items-center col-span-5">
                                    <div className="flex-shrink-0 h-20 w-20 bg-gray-100 rounded-md overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                        {item.oldPrice && (
                                            <p className="text-xs text-gray-400 line-through">${item.oldPrice.toFixed(2)}</p>
                                        )}
                                    </div>
                                </div>

                                    <div className="flex items-center justify-start md:justify-center col-span-2">
                                        <span className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>

                                    <div className="flex items-center justify-start md:justify-center col-span-3">
                                        <div className="flex items-center border rounded-md">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-3 py-1 text-gray-600 hover:bg-gray-50"
                                            >
                                                <FiMinus size={14} />
                                            </button>
                                            <span className="px-3 py-1 text-gray-900 w-8 text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-3 py-1 text-gray-600 hover:bg-gray-50"
                                                disabled={item.quantity >= item.stock}
                                            >
                                                <FiPlus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between col-span-2">
                                        <span className="text-sm font-medium text-gray-900">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
                            <Link to="/product"><button className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-[#683292] hover:bg-gray-50">
                                Continue Shopping
                            </button></Link>
                            <div className="flex gap-4">
                                <button className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Update Cart
                                </button>
                                <Link to="/checkout"><button className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#39251A] hover:bg-[#683292]">
                                    Proceed to Checkout
                                </button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                                    <span className="text-sm font-medium">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Shipping</span>
                                    <span className="text-sm font-medium">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4 mt-4">
                                    <div className="flex justify-between">
                                        <span className="text-base font-medium text-gray-900">Total</span>
                                        <span className="text-base font-bold text-green-600">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center">
                                    <input
                                        id="coupon"
                                        name="coupon"
                                        type="text"
                                        placeholder="Coupon Code"
                                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                    <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#683292] hover:bg-[#683292] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-gray-500">
                                    * Shipping & taxes calculated at checkout
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.section>
    );
};

export default Cart;