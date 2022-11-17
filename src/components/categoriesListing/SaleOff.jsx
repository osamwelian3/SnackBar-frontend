import React, { Component } from 'react';
import $ from 'jquery';
import pd1 from '../../assets/img/product/discount/pd-1.jpg';
import pd2 from '../../assets/img/product/discount/pd-2.jpg';
import pd3 from '../../assets/img/product/discount/pd-3.jpg';
import pd4 from '../../assets/img/product/discount/pd-4.jpg';
import pd5 from '../../assets/img/product/discount/pd-5.jpg';
import pd6 from '../../assets/img/product/discount/pd-6.jpg';

class SaleOff extends Component {
    state = {  } 

    componentDidMount(){
        /*-----------------------------
            Product Discount Slider
        -------------------------------*/
        $(".product__discount__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {

                320: {
                    items: 1,
                },

                480: {
                    items: 2,
                },

                768: {
                    items: 2,
                },

                992: {
                    items: 3,
                }
            }
        });

        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }

    render() { 
        return (
            <>
                <div className="product__discount">
                    <div className="section-title product__discount__title">
                        <h2>Sale Off</h2>
                    </div>
                    <div className="row">
                        <div className="product__discount__slider owl-carousel">
                            <div className="col-lg-4">
                                <div className="product__discount__item">
                                    <div className="product__discount__item__pic set-bg"
                                        data-setbg={pd1}>
                                        <div className="product__discount__percent">-20%</div>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                        <span>Dried Fruit</span>
                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                        <div className="product__item__price">Kes. 30.00 <span>Kes. 36.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product__discount__item">
                                    <div className="product__discount__item__pic set-bg"
                                        data-setbg={pd2}>
                                        <div className="product__discount__percent">-20%</div>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                        <span>Vegetables</span>
                                        <h5><a href="#">Vegetables’package</a></h5>
                                        <div className="product__item__price">Kes. 30.00 <span>Kes. 36.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product__discount__item">
                                    <div className="product__discount__item__pic set-bg"
                                        data-setbg={pd3}>
                                        <div className="product__discount__percent">-20%</div>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                        <span>Dried Fruit</span>
                                        <h5><a href="#">Mixed Fruitss</a></h5>
                                        <div className="product__item__price">Kes. 30.00 <span>Kes. 36.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product__discount__item">
                                    <div className="product__discount__item__pic set-bg"
                                        data-setbg={pd4}>
                                        <div className="product__discount__percent">-20%</div>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                        <span>Dried Fruit</span>
                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                        <div className="product__item__price">Kes. 30.00 <span>Kes. 36.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product__discount__item">
                                    <div className="product__discount__item__pic set-bg"
                                        data-setbg={pd5}>
                                        <div className="product__discount__percent">-20%</div>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                        <span>Dried Fruit</span>
                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                        <div className="product__item__price">Kes. 30.00 <span>Kes. 36.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product__discount__item">
                                    <div className="product__discount__item__pic set-bg"
                                        data-setbg={pd6}>
                                        <div className="product__discount__percent">-20%</div>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                        <span>Dried Fruit</span>
                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                        <div className="product__item__price">Kes. 30.00 <span>Kes. 36.00</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default SaleOff;