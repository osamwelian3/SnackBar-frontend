import React, { Component } from 'react';
import Products from './Products';
import SaleOff from './SaleOff';
import SideBar from './SideBar';

class ProductSection extends Component {
    state = {  } 
    render() { 
        return (
            <>
                {/* <!-- Product Section Begin --> */}
                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-5">
                                <SideBar />
                            </div>
                            <div className="col-lg-9 col-md-7">
                                <SaleOff />
                                <Products />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Product Section End --> */}
            </>
        );
    }
}
 
export default ProductSection;