import React from 'react'
import ProductCards from '../../components/productCards/productCards'
import Footer from '../../components/footer/footer'
import '../../styles/products.css'
import useSlideAnimation from '../../animation/useSlideAnimation';
import {SmartLightsProducts} from '../../database/SmartLights';
function SmartLights() {
  //Slide animation functionality
  useSlideAnimation()

  return (
    <div className='hidden'>
      <section className=" product-header-container">
        <h2>SmartLights</h2>
          <p>Modern technology infused for smarter lighting solutions.</p> 
     </section>
      <div className="product-container container text-center">
        <div className="row">
        {SmartLightsProducts.map((product, index) => (
            <div key={index} className="product-div col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <ProductCards
                src={product.imageSrc}
                name={product.name}
                price={product.price}
                id={product.id}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default SmartLights