import React, { Component } from 'react';
import $ from 'jquery';
import { } from 'jquery-nice-select/js/jquery.nice-select.js';
import product1 from '../../assets/img/product/product-1.jpg';
import product2 from '../../assets/img/product/product-2.jpg';
import product3 from '../../assets/img/product/product-3.jpg';
import product4 from '../../assets/img/product/product-4.jpg';
import product5 from '../../assets/img/product/product-5.jpg';
import product6 from '../../assets/img/product/product-6.jpg';
import product7 from '../../assets/img/product/product-7.jpg';
import product8 from '../../assets/img/product/product-8.jpg';
import product9 from '../../assets/img/product/product-9.jpg';
import product10 from '../../assets/img/product/product-10.jpg';
import product11 from '../../assets/img/product/product-11.jpg';
import product12 from '../../assets/img/product/product-12.jpg';

class Products extends Component {
    state = {  } 

    componentDidMount(){
        // $.fn.extend({
        //     niceSelect: niceselect()
        // })
        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        /*--------------------------
            Select
        ----------------------------*/
        $("select").niceSelect();
    }

    render() { 
        return (
            <>
                <div className="filter__item">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <div className="filter__sort">
                                <span>Sort By</span>
                                <select>
                                    <option value="0">Default</option>
                                    <option value="0">Default</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="filter__found">
                                <h6><span>16</span> Products found</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3">
                            <div className="filter__option">
                                <span className="icon_grid-2x2"></span>
                                <span className="icon_ul"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product1}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product2}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product3}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product4}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product5}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product6}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product7}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product8}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product9}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product10}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product11}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg={product12}>
                                <ul className="product__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>Kes. 30.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                </div>
            </>
        );
    }
}
 
export default Products;