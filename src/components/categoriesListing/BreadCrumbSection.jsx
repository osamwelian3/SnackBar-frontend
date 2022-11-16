import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import breadcrumb from '../../assets/img/breadcrumb.jpg';

class BreadCrumbSection extends Component {
    state = {  } 
    render() { 
        return (
            <>
                {/* <!-- Breadcrumb Section Begin --> */}
                <section className="breadcrumb-section set-bg" data-setbg={breadcrumb}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Organi Shop</h2>
                                    <div className="breadcrumb__option">
                                        <Link to="/">Home</Link>
                                        <span>Shop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Breadcrumb Section End --> */}
            </>
        );
    }
}
 
export default BreadCrumbSection;