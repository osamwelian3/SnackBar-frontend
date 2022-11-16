import React, { Component } from 'react';
import heroBanner from '../assets/img/hero/banner.jpg';

class HeroBanner extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="hero__item set-bg" data-setbg={heroBanner}>
                    <div className="hero__text">
                        <span>FRUIT FRESH</span>
                        <h2>Vegetable <br />100% Organic</h2>
                        <p>Free Pickup and Delivery Available</p>
                        <a href="#" className="primary-btn">SHOP NOW</a>
                    </div>
                </div>
            </>
        );
    }
}
 
export default HeroBanner;