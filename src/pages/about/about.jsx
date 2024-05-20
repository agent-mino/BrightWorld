import React from 'react';
import '../../styles/about.css';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import { Link } from 'react-router-dom';

function About() {
  useSlideAnimation();
  return (
    <div>
      <div id='about-hd-img'>
        <h3>ABOUT US</h3>
      </div>

      <div style={{ textAlign: 'center' }} className="about-bg hidden ">
        <div className="text">
          <nav className='about-breadcrumb' aria-label="breadcrumb">
            <ol className=" breadcrumb">
              <li className="breadcrumb-item active" aria-current="page"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item">About Us</li>
            </ol>
          </nav>

          <h4>OUR STORY</h4>
<p>
Brightworld is a vibrant and innovative LED light store, illuminating homes and businesses with a wide array of cutting-edge lighting solutions. From sleek and modern designs to energy-efficient and sustainable options, our collection includes LED bulbs, strips, panels, and fixtures that cater to all lighting needs and preferences. Established in 2010, Brightworld has become a trusted name in the industry, known for its commitment to quality, innovation, and exceptional customer service.
</p>
<p>
  As we expanded our reach across various cities, we remained dedicated to our founding principles of providing top-notch lighting products that not only enhance spaces but also contribute to energy conservation and environmental sustainability. At Brightworld, we believe that the right lighting can transform any space, creating ambiance, enhancing mood, and improving functionality.
</p>

<p>Explore Brightworld for a diverse selection of lighting essentials and stay updated on our latest innovations. Our knowledgeable and passionate team is here to guide you in finding the perfect lighting solutions tailored to your specific needs. Every visit to Brightworld promises an enlightening experience, ensuring that you leave with a brighter outlook and a perfectly lit space.</p>
</div>

<h4>OUR MISSION</h4>
<p className="mission">
Our mission at Brightworld is to revolutionize the lighting industry by offering superior quality LED lighting products and unparalleled customer service. Since our inception in 2010, we have been driven by a passion for innovation and a commitment to sustainability. Our expansion into multiple cities is a testament to the trust and support of our valued customers.
</p>
<p className='mission'>
  We are dedicated to providing a diverse range of lighting solutions that set the highest standards for quality and efficiency. Our relentless focus on excellence ensures that every customer enjoys a transformative experience, from the moment they step into our store to the installation of their new lighting. At Brightworld, we strive to empower individuals and businesses to create well-lit, energy-efficient spaces that enhance their quality of life.

</p>

<h4>ABOUT RETURNS</h4>
        <p className="return">

Brightworld offers a 45-day return policy on all our products. If you are not completely satisfied with your purchase, you may return any product within 45 days of purchase. Simply visit any of our stores to initiate the return process. Once we receive your returned product, we will process your refund within 1-3 business days and send you an email confirmation. Please allow up to 14 days for your bank or credit card company to post the refund to your account.
</p>
<h4>ABOUT GETTING IN TOUCH</h4>
        <p className="return">
We look forward to hearing from you! Visit our contact page to find the best way to reach us with your inquiries. You can contact us via email or phone numbers provided on our contact page. Our friendly and knowledgeable team is ready to assist you with any questions or concerns you may have.
</p>
      </div>
       <Footer />
    </div>
      );
}

export default About;
