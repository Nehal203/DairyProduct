import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Express from './components/Express';
import Best from './components/Best';
import Premium from './components/Premium';
import Testimonisl from './components/Testimonisl';
import Bestoffer from './components/Bestoffer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Express />
      <Best />
      <Premium/>
      <Bestoffer/>
      <Testimonisl/>
      <Footer/>
    </div>
  );
}

export default App;


