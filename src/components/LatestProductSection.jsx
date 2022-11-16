import React, { Component } from 'react';
import LatestProduct from './LatestProduct';
import $ from 'jquery';
import TopRatedProducts from './TopRatedProducts';
import ReviewProducts from './ReviewProducts';

const {} = require('owl.carousel2');

class LatestProductSection extends Component {
    state = {  } 

    componentDidMount() {
        
    }

    render() { 
        return (
            <>
                {/* <!-- Latest Product Section Begin --> */}
                <section className="latest-product spad">
                    <div className="container">
                        <div className="row">
                            <LatestProduct />
                            <TopRatedProducts />
                            <ReviewProducts />
                        </div>
                    </div>
                </section>
                {/* <!-- Latest Product Section End --> */}
            </>
        );
    }
}
 
export default LatestProductSection;