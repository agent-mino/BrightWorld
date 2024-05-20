import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { FaLightbulb } from 'react-icons/fa';
import '../../styles/footer.css'

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-0.6"></i>BR<FaLightbulb></FaLightbulb>GHTWORLD
                            </h6>
                            <p>
                               
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Customer
                            </h6>
                            <p>
        
                                <Link className="lni" aria-current="page" to="/contact">Contact Us</Link>
                            
                            </p>

                            <p>
                            <Link className="lni"aria-current="page" to="/cart">
                                    Orders</Link>
                            </p>
                            <p>
                            <Link className="lni" to='/feedback'>Feedback</Link>
                            </p>
                            <p>
                                <h4>Get a full decription of <br />Br<FaLightbulb></FaLightbulb>ghtworld</h4>
                                <a href="/description.pdf" download>Download Pdf</a>
                            </p>
                        </div>
<Outlet/>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Reach Us</h6>
                            <p><i className="fas fa-home me-1"></i>10b Rock, Ikoyi Nigeria</p>
                            <p><i className="fas fa-envelope me-1"></i>brightworld@gmail.com</p>
                            <p><i className="fas fa-phone me-1"></i>+234 801 443 4382</p>

                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-copyright text-center p-4">
                Copyright © 2024
                <br />
                <span>BR<FaLightbulb></FaLightbulb>GHTWORLD</span>
            </div>
        </footer>
    );
}

export default Footer;
