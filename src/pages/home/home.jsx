import React from 'react'
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import ProductCards from '../../components/productCards/productCards';
import useSlideAnimation from '../../animation/useSlideAnimation';
import CategoryCard from '../../components/categorycard/categoryCard';
import Feedback from '../../components/feedback/feedback';
import '../../styles/home.css';
import { exclusiveProducts } from '../../database/exclusive';

function Home() {
  //Fade in Animation
  useSlideAnimation();

  return (
    <div>
      {/* carousel section */}
      <section className='hidden'>
        <Carousel />
      </section>

      {/* shop by category */}
      <section className='hidden shop-by-category-container'>
        <CategoryCard />
      </section>


      {/* best sellers section */}
      <section className='hidden' id='best-sellers-section'>
        <div className="container text-center">
          <h2 className='text-center' id='shopnow'>EXCLUSIVE</h2><hr />
          <div className="row">

            {exclusiveProducts.map((product,index) => (
              <div key={index} className="best-sellers-div col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <ProductCards
                  src={product.imageSrc}  // Assuming each product has an `image` property for the URL
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* img section */}




      {/* feedback option */}
      <div className='hidden container'>
        <Feedback />
      </div>
      {/* footer section */}
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home