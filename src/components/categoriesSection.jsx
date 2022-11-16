import React, { Component } from 'react';
import $ from 'jquery';

import cat1 from '../assets/img/categories/cat-1.jpg';
import cat2 from '../assets/img/categories/cat-2.jpg';
import cat3 from '../assets/img/categories/cat-3.jpg';
import cat4 from '../assets/img/categories/cat-4.jpg';
import cat5 from '../assets/img/categories/cat-5.jpg';

const {} = require('owl.carousel2');

class CategoriesSection extends Component {
    state = {  } 

    componentDidMount() {
        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        
        /*-----------------------
            Categories Slider
        ------------------------*/
        $(".categories__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 4,
            dots: false,
            nav: true,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {

                0: {
                    items: 1,
                },

                480: {
                    items: 2,
                },

                768: {
                    items: 3,
                },

                992: {
                    items: 4,
                }
            }
        });
    }

    render() { 
        return (
            <>
                {/* <!-- Categories Section Begin --> */}
                <section className="categories">
                    <div className="container">
                        <div className="row">
                            <div className="categories__slider owl-carousel">
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg={cat1}>
                                        <h5><a href="#">Fresh Fruit</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg={cat2}>
                                        <h5><a href="#">Dried Fruit</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg={cat3}>
                                        <h5><a href="#">Vegetables</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg={cat4}>
                                        <h5><a href="#">drink fruits</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg={cat5}>
                                        <h5><a href="#">drink fruits</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Categories Section End --> */}
            </>
        );
    }
}
 
export default CategoriesSection;