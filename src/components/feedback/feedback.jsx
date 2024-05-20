import React from 'react'
import '../../styles/feedback.css'
import { Link } from 'react-router-dom';
import { useFeedback } from '../../context/feedbackContext';


function Feedback() {
    const { feedback } = useFeedback();
    return (

        <div id="carouselExample" className="feedback-carousel carousel slide">
            <h4 id='fb-hd'>What Our Customers Say</h4>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="feedb carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                    <p>"Brightworld's LED lighting solutions have completely transformed my home. The brightness and energy efficiency of their products are unmatched. I particularly love the LED strip lights, which add a modern touch to my living room. Their customer service was incredibly helpful in guiding me to the right products. Highly recommend!"</p>
                    <h6><strong>Emily Smith</strong></h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                    <p>"I recently upgraded all the lighting in my office with Brightworld's LED panels, and the difference is amazing. The new lights have created a more vibrant and productive environment. The installation was straightforward, and the quality of the lights is exceptional. Thank you, Brightworld, for illuminating my workspace!"</p>
                    <h6><strong>Michael Johnson</strong></h6>
                    </div>
                </div>

                {feedback.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className="d-block w-100">
                            <p>{item.message}</p>
                            <h6><strong>{item.name}</strong></h6>
                        </div>
                    </div>
                ))}

            </div>
            <Link to='/feedback'>
                <button id='review-btn'>Leave Review</button>
            </Link>

        </div>
    )
}

export default Feedback