import React from 'react';
import '../../styles/categoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard() {
    return (
        <div className='category-container' >
            <h3 id='getstarted'>SHOP BY CATEGORY</h3><hr />
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-6'>
                    <Link to='products/Chandelier'>
                        <img src="https://image.lampsplus.com/is/image/b9gt8/franklin-iron-works-arden-14-inch-bronze-and-white-glass-ceiling-light__24k74cropped.jpg?qlt=75&wid=376&hei=376&op_sharpen=1&resMode=sharp2&fmt=jpeg" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Ceiling Lights</h4><hr />
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6'>
                    <Link to='products/SpotLight'>
                        <img src="https://media.istockphoto.com/id/1658721974/photo/photo-lighting-illuminated.jpg?s=612x612&w=0&k=20&c=c-fD_iTGD7mAAKiv_FvmUUyJ21KO1641AXpKBHkHiSg=" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Spot Lights</h4><hr />
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6'>
                    <Link to='products/Lamp'>
                        <img src="https://media.istockphoto.com/id/1298508477/photo/dark-empty-room-with-lamp-shade-potted-plant-and-parquet-floor-blank-wall-mock-up.jpg?s=612x612&w=0&k=20&c=gckRSZ8VawSNu3hQDvzhlsTjuj-WDwS5NlXtnWA2vNU=" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Indoor Lights</h4><hr />
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6'>
                    <Link to='products/DecorationLights'>
                        <img src="https://media.istockphoto.com/id/96502380/photo/pile-of-illuminated-string-lights.webp?b=1&s=170667a&w=0&k=20&c=wCOkqXphdG3IeycjjiqvxzkfbeJmgNX__O55iMF__iA=" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Decoration Lights</h4><hr />
                </div>

            </div>
        </div>
    )
}

export default CategoryCard