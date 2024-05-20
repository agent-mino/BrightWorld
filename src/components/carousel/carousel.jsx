import React from 'react';
import '../../styles/home.css';

function carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                        <h2>Illuminating Quality</h2>
                            <p>Discover illuminating quality transforming spaces into captivating sanctuaries.</p>
                            <a href="#getstarted"><button>GET STARTED</button></a>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbXB8ZW58MHwwfDB8fHww' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                        <h2>Explore unique designs</h2>
                            <p>Elevate your space with aesthetically pleasing illumination.</p>
                            <a href="#shopnow"><button >SHOP NOW</button></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default carousel