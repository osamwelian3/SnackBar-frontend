import React, { Component } from 'react';
import $ from 'jquery';
import HeroBanner from './HeroBanner';

const {} = require('owl.carousel2');

class HeroSection extends Component {
    state = {  } 

    componentDidMount(){
        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        $('.hero__categories__all').on('click', function(){
            $('.hero__categories ul').slideToggle(400);
        });

    }

    componentWillUnmount(){
        $('.hero__categories__all').off();
    }

    render() { 
        return (
            <>
                {/* <!-- Hero Section Begin --> */}
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="hero__categories">
                                    <div className="hero__categories__all">
                                        <i className="fa fa-bars"></i>
                                        <span>All departments</span>
                                    </div>
                                    <ul style={this.props.collapse ? {display: 'none'} : undefined}>
                                        <li><a href="#">Fresh Meat</a></li>
                                        <li><a href="#">Vegetables</a></li>
                                        <li><a href="#">Fruit & Nut Gifts</a></li>
                                        <li><a href="#">Fresh Berries</a></li>
                                        <li><a href="#">Ocean Foods</a></li>
                                        <li><a href="#">Butter & Eggs</a></li>
                                        <li><a href="#">Fastfood</a></li>
                                        <li><a href="#">Fresh Onion</a></li>
                                        <li><a href="#">Papayaya & Crisps</a></li>
                                        <li><a href="#">Oatmeal</a></li>
                                        <li><a href="#">Fresh Bananas</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="hero__search">
                                    <div className="hero__search__form">
                                        <form action="#">
                                            <div className="hero__search__categories">
                                                All Categories
                                                <span className="arrow_carrot-down"></span>
                                            </div>
                                            <input type="text" placeholder="What do yo u need?" />
                                            <button type="submit" className="site-btn">SEARCH</button>
                                        </form>
                                    </div>
                                    <div className="hero__search__phone">
                                        <div className="hero__search__phone__icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="hero__search__phone__text">
                                            <h5>+65 11.188.888</h5>
                                            <span>support 24/7 time</span>
                                        </div>
                                    </div>
                                </div>
                                {this.props.banner}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Hero Section End --> */}
            </>
        );
    }
}
 
export default HeroSection;