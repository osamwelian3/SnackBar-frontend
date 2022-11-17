import React, { Component } from 'react';
import ItemDetailsTab from './ItemDetailsTab';
import $ from 'jquery';

import  productdetails1 from '../../assets/img/product/details/product-details-1.jpg';
import  productdetails2 from '../../assets/img/product/details/product-details-2.jpg';
import  productdetails3 from '../../assets/img/product/details/product-details-3.jpg';
import  productdetails4 from '../../assets/img/product/details/product-details-4.jpg';
import  productdetails5 from '../../assets/img/product/details/product-details-4.jpg';

import thumb1 from '../../assets/img/product/details/thumb-1.jpg';
import thumb2 from '../../assets/img/product/details/thumb-2.jpg';
import thumb3 from '../../assets/img/product/details/thumb-3.jpg';
import thumb4 from '../../assets/img/product/details/thumb-4.jpg';

class ItemDetail extends Component {
    state = {  } 

    componentDidMount(){
        /*------------------
            Single Product
        --------------------*/
        $('.product__details__pic__slider img').on('click', function () {

            var imgurl = $(this).data('imgbigurl');
            var bigImg = $('.product__details__pic__item--large').attr('src');
            if (imgurl != bigImg) {
                $('.product__details__pic__item--large').attr({
                    src: imgurl
                });
            }
        });

        /*---------------------------------
            Product Details Pic Slider
        ----------------------------------*/
        $(".product__details__pic__slider").owlCarousel({
            loop: true,
            margin: 20,
            items: 4,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });

        /*-------------------
            Quantity change
        --------------------- */
        var proQty = $('.pro-qty');
        if($(".dec").length === 0){
            proQty.prepend('<span class="dec qtybtn">-</span>');
            proQty.append('<span class="inc qtybtn">+</span>');
        }
        proQty.on('click', '.qtybtn', function () {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });
    }

    render() { 
        return (
            <>
                {/* <!-- Product Details Section Begin --> */}
                <section className="product-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__pic">
                                    <div className="product__details__pic__item">
                                        <img className="product__details__pic__item--large"
                                            src={productdetails1} alt=""/>
                                    </div>
                                    <div className="product__details__pic__slider owl-carousel">
                                        <img data-imgbigurl={productdetails2}
                                            src={thumb1} alt=""/>
                                        <img data-imgbigurl={productdetails3}
                                            src={thumb2} alt=""/>
                                        <img data-imgbigurl={productdetails5}
                                            src={thumb3} alt=""/>
                                        <img data-imgbigurl={productdetails4}
                                            src={thumb4} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__text">
                                    <h3>Vetgetable’s Package</h3>
                                    <div className="product__details__rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-o"></i>
                                        <span>(18 reviews)</span>
                                    </div>
                                    <div className="product__details__price">Kes500.00</div>
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                        vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                                        quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                                    <div className="product__details__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" defaultValue="1"/>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="primary-btn">ADD TO CART</a>
                                    <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                                    <ul>
                                        <li><b>Availability</b> <span>In Stock</span></li>
                                        <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                        <li><b>Weight</b> <span>0.5 kg</span></li>
                                        <li><b>Share on</b>
                                            <div className="share">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-instagram"></i></a>
                                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ItemDetailsTab />
                        </div>
                    </div>
                </section>
                {/* <!-- Product Details Section End --> */}
            </>
        );
    }
}
 
export default ItemDetail;