import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contacts from "./pages/contacts/contacts";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Error from "./pages/error/error";
import Carts from "./pages/carts/carts";
import Gallery from "./pages/gallery/gallery";
import Brands from "./pages/brands/brands";
import Chandelier from './pages/products/Chandelier';
import SmartLights from './pages/products/SmartLights';
import Lamp from './pages/products/Lamp';
import SpotLight from './pages/products/SpotLight';
import Bulbskits from './pages/products/Bulbs';
import DecorationLights from './pages/products/DecorationLights';
import Checkout from "./pages/checkout/checkout";
import { CartProvider } from "./context/cartContext";
import Feedback from "./pages/feedback/feedback";
import { FeedbackProvider } from "./context/feedbackContext";

import './App.css';

function App() {
  return (
    <FeedbackProvider>
    <CartProvider>
    <BrowserRouter>
      <div className='header-navbar-wrapper' >
        {/* header section */}
        <header >
          <span> LIMITED | SAVE 40% ON DELIVERY ON ALL PROUCTS | 30/05/24 | </span>
        </header>
        {/* navbar section */}
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/products/Chandelier" element={<Chandelier />} />
        <Route path="/products/SmartLights" element={<SmartLights />} />
        <Route path="/products/Lamp" element={<Lamp />} />
        <Route path="/products/SpotLight" element={<SpotLight />} />
        <Route path="/products/Bulbskits" element={<Bulbskits />} />
        <Route path="/products/DecorationLights" element={<DecorationLights />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </FeedbackProvider>
  );
}

export default App;
