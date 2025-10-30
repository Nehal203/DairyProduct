import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productItems } from './Productitem';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaHeart, FaShare, FaLeaf, FaWeight, FaTag, FaBox } from 'react-icons/fa';
import { MdOutlineLocalShipping, MdOutlinePayment } from 'react-icons/md';

const Productdetails = () => {
    const { id } = useParams();
    const product = productItems.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');
    
    const relatedProducts = productItems
        .filter(p => p.category === product?.category && p.id !== product?.id)
        .slice(0, 4);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    const renderRating = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    const handleQuantityChange = (action) => {
        if (action === 'increase') {
            setQuantity(prev => prev + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-28">
            <div className="w-full bg-[#39251A] text-white">
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center">
                    <h3 className="text-2xl tracking-wide">{product.title}</h3>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: product.bgColor }}>
                                <img 
                                    src={product.img} 
                                    alt={product.title}
                                    className="w-full h-96 object-contain p-8 transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <button 
                                        key={i} 
                                        className={`rounded-xl overflow-hidden border-2 transition-all ${selectedImage === i-1 ? 'border-green-500' : 'border-transparent hover:border-green-400'}`}
                                        onClick={() => setSelectedImage(i-1)}
                                    >
                                        <div className="aspect-square bg-gray-50 flex items-center justify-center p-2">
                                            <img 
                                                src={product.img} 
                                                alt={`${product.title} ${i}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="py-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                                    <div className="flex items-center mb-4">
                                        <div className="flex">
                                            {renderRating(product.rating)}
                                            <span className="ml-2 text-sm text-gray-500">(25 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-2 rounded-full hover:bg-gray-100">
                                        <FaHeart className="text-gray-500 hover:text-red-500" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100">
                                        <FaShare className="text-gray-500 hover:text-green-500" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                                    <span className="text-sm text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">20% OFF</span>
                                </div>

                                <p className="text-gray-600">{product.description}</p>

                                <div className="border-t border-b border-gray-100 py-4">
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <FaBox className="text-green-500" />
                                        <span>In Stock (25 units)</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                                        <FaLeaf className="text-green-500" />
                                        <span>100% Organic & Natural</span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                        <button 
                                            onClick={() => handleQuantityChange('decrease')}
                                            className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-2">{quantity}</span>
                                        <button 
                                            onClick={() => handleQuantityChange('increase')}
                                            className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className="flex-1 bg-[#4D3B31] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition">
                                        <FaShoppingCart />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="text-sm text-gray-600 flex items-center">
                                        <MdOutlineLocalShipping className="mr-1 text-[#4D3B31]" />
                                        Free shipping on orders over $50
                                    </span>
                                    <span className="text-sm text-gray-600 flex items-center">
                                        <MdOutlinePayment className="mr-1 text-[#4D3B31]" />
                                        Secure payment
                                    </span>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600 pt-4 border-t border-gray-100">
                                    <div className="flex items-center">
                                        <span className="w-24 text-gray-500">SKU:</span>
                                        <span>DAIRY-{product.id.toString().padStart(3, '0')}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-24 text-gray-500">Category:</span>
                                        <span className="text-[#4D3B31]">{product.category}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-24 text-gray-500">Tags:</span>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Organic</span>
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Fresh</span>
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Dairy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 p-6">
                        <div className="border-b border-gray-200">
                            <nav className="flex -mb-px space-x-8">
                                <button 
                                    onClick={() => setActiveTab('description')}
                                    className={`py-4 px-1 font-medium ${activeTab === 'description' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Description
                                </button>
                                <button 
                                    onClick={() => setActiveTab('details')}
                                    className={`py-4 px-1 font-medium ${activeTab === 'details' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Product Details
                                </button>
                                <button 
                                    onClick={() => setActiveTab('reviews')}
                                    className={`py-4 px-1 font-medium ${activeTab === 'reviews' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Reviews (24)
                                </button>
                            </nav>
                        </div>
                        
                        {activeTab === 'description' && (
                            <div className="mt-6 text-gray-600 space-y-4">
                                <p>
                                    {product.description} Our {product.title} is carefully sourced from the finest organic farms, 
                                    ensuring the highest quality and freshness. Each batch is tested for purity and 
                                    nutritional content to meet our strict quality standards.
                                </p>
                                <p>
                                    We take pride in our sustainable farming practices that not only deliver exceptional 
                                    taste but also help protect the environment. Our products are free from artificial 
                                    additives, hormones, and preservatives.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>100% natural and organic ingredients</li>
                                    <li>No artificial preservatives or additives</li>
                                    <li>Rich in essential nutrients and vitamins</li>
                                    <li>Eco-friendly packaging</li>
                                    <li>Farm to table within 24 hours</li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'details' && (
                            <div className="mt-6 text-gray-600">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Product Information</h4>
                                        <ul className="space-y-2">
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Brand</span>
                                                <span>Organic Farms</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Weight</span>
                                                <span>500g</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Shelf Life</span>
                                                <span>7 days</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Storage</span>
                                                <span>Keep Refrigerated</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Nutritional Information</h4>
                                        <ul className="space-y-2">
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Calories</span>
                                                <span>150 kcal</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Protein</span>
                                                <span>8g</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Fat</span>
                                                <span>5g</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-gray-500">Carbohydrates</span>
                                                <span>12g</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="mt-6">
                                <div className="space-y-6">
                                    {[1, 2, 3].map((review) => (
                                        <div key={review} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                                                        {review === 1 ? 'JD' : review === 2 ? 'AS' : 'MP'}
                                                    </div>
                                                    <div className="ml-3">
                                                        <h4 className="font-medium">
                                                            {review === 1 ? 'John Doe' : review === 2 ? 'Alice Smith' : 'Mike Peterson'}
                                                        </h4>
                                                        <div className="flex items-center">
                                                            {renderRating(review === 1 ? 5 : review === 2 ? 4 : 5)}
                                                            <span className="text-xs text-gray-500 ml-2">
                                                                {review === 1 ? '2 days ago' : review === 2 ? '1 week ago' : '2 weeks ago'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mt-2">
                                                {review === 1 
                                                    ? 'Absolutely love this product! The quality is outstanding and it tastes amazing. Will definitely buy again.' 
                                                    : review === 2 
                                                    ? 'Good product overall. Fresh and tasty, though a bit pricey compared to other brands.'
                                                    : 'Excellent quality and fast delivery. The packaging was secure and the product arrived in perfect condition.'
                                                }
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                
                                <button className="mt-6 text-green-600 font-medium hover:text-green-700">
                                    Show more reviews
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map(p => (
                            <div key={p.id} className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4" style={{ backgroundColor: p.bgColor }}>
                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain" />
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition">
                                        <Link to={`/product/${p.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {p.title}
                                        </Link>
                                    </h3>
                                    <div className="mt-2 flex items-center justify-between">
                                        <p className="text-green-700 font-semibold">${p.price.toFixed(2)}</p>
                                        <div className="flex items-center">
                                            <div className="text-yellow-400 text-sm">
                                                {'★★★★★'.slice(0, p.rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;
