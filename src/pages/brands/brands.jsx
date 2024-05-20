import React, { useState } from 'react';
import '../../styles/brand.css';
import Footer from '../../components/footer/footer';
import { brands } from '../../database/brands';
import useSlideAnimation from '../../animation/useSlideAnimation';

function Brands() {
    //slide animation
    useSlideAnimation();

    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openFullscreen = (image) => {
        setFullscreenImage(image);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div>
            <section className=" product-header-container">
                <h2>Brands</h2>
                <p>Our well appreciated brands.</p>
            </section>
            <div className='brand-bg'>
                <div className='row'>
                    {brands.map((image, index) => (
                        <div key={index} className='hidden col-lg-4 col-md-6 col-sm-6 col-12 brand-item'>
                            <img src={image} alt={`Product ${index + 1}`} onClick={() => openFullscreen(image)} />
                        </div>
                    ))}
                </div>
            </div>
            {fullscreenImage && (
                <div className="fullscreen-modal" onClick={closeFullscreen}>
                    <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
                        <span className="cancel-button" onClick={closeFullscreen}>x</span>
                        <img src={fullscreenImage} alt="Fullscreen" />
                    </div>
                </div>
            )}
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default Brands;


