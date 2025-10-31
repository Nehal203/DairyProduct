import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Front from './components/Front';
import Blog from './components/Blog';
import Blogdetails from './components/Blogdetails';
import Productpage from './components/Productpage';
import Productdetails from './components/Productdetails';
import Contactus from './components/Contactus';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Navbar />
          <div className="min-h-screen">
            <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blogdetails />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
