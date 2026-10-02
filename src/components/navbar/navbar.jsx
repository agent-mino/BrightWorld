import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import '../../styles/Logonav.css'
import { FaLightbulb } from 'react-icons/fa';
import { useCart } from '../../context/cartContext';

function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="navbar-container container">
                <Link className="navbar-brand" to="/">
                    <div className="main-text">Br<FaLightbulb />ghtWorld</div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/products">Categories</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/products/DecorationLights">Decoration Lights</Link></li>
                                <li><Link className="dropdown-item" to="/products/SpotLight">Spot Lights</Link></li>
                                <li><Link className="dropdown-item" to="/products/SmartLights">Smart Lights</Link></li>
                                <li><Link className="dropdown-item" to="/products/Lamp">Lamps</Link></li>
                                <li><Link className="dropdown-item" to="/products/Chandelier">Chandeliers</Link></li>
                                <li><Link className="dropdown-item" to="/products/Bulbskits">Bulbs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/brands">Brands</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                Cart
                                {cart.length > 0 && (
                                    <span className="cart-count-badge">{cart.length}</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar