import React from 'react'
import ProductCards from '../../components/productCards/productCards'
import Footer from '../../components/footer/footer'
import '../../styles/products.css'
import { SpotLightProducts } from '../../database/SpotLight';
import useSlideAnimation from '../../animation/useSlideAnimation';

function SpotLight() {

  //Slide animation functionality
  useSlideAnimation();

  return (
    <div className='hidden'>
      <section className=" product-header-container">
        <h2>Spot Lights</h2>
        <p>Bright lights to light up special moments on stage.</p>
      </section>

      <div className="product-container container text-center">
        <div className="row">
          {SpotLightProducts.map((product, index) => (
            <div key={index} className="best-sellers-div col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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

export default SpotLight