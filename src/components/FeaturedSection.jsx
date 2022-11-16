import React, { Component } from 'react';
import $ from 'jquery';

import feature1 from '../assets/img/featured/feature-1.jpg';
import feature2 from '../assets/img/featured/feature-2.jpg';
import feature3 from '../assets/img/featured/feature-3.jpg';
import feature4 from '../assets/img/featured/feature-4.jpg';
import feature5 from '../assets/img/featured/feature-5.jpg';
import feature6 from '../assets/img/featured/feature-6.jpg';
import feature7 from '../assets/img/featured/feature-7.jpg';
import feature8 from '../assets/img/featured/feature-8.jpg';

const mixitup = require('mixitup');

class FeaturedSection extends Component {
    state = {  } 

    componentDidMount() {
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
        
        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }

    componentWillUnmount() {
        $('.featured__controls li').unbind();
        console.log('f will unmount');
    }

    componentDidUpdate() {
        console.log('f update');
    }

    render() { 
        return (
            <>
                {/* <!-- Featured Section Begin --> */}
                <section className="featured spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Featured Product</h2>
                                </div>
                                <div className="featured__controls">
                                    <ul>
                                        <li className="active" data-filter="*">All</li>
                                        <li data-filter=".oranges">Oranges</li>
                                        <li data-filter=".fresh-meat">Fresh Meat</li>
                                        <li data-filter=".vegetables">Vegetables</li>
                                        <li data-filter=".fastfood">Fastfood</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row featured__filter">
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature1}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.300.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature2}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature3}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature4}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature5}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature6}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature7}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg={feature8}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>Kes.30.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Featured Section End --> */}
            </>
        );
    }
}
 
export default FeaturedSection;