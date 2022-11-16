import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link, NavLink, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import $ from 'jquery';
import {} from 'slicknav/dist/jquery.slicknav.js';
import logo from '../assets/img/logo.gif';
import language from '../assets/img/language.png';

class Navbar extends Component {
    state = {  } 

    guestLinks = () => (
        <Fragment>
            <NavLink className="nav-link" to="/auth/register">Sign up</NavLink>
            <NavLink className="nav-link" to="/auth/login">Login</NavLink>
        </Fragment>
    )

    // using arrow functions allows to maintain the value of username property
    authLinks = () => (
        <Fragment>
            <NavLink className="nav-link" to="/auth/dashboard">Dashboard</NavLink>
            <NavLink className="nav-link" to="/auth/profile">Profile</NavLink>
            <a className="nav-link" onClick={ this.props.logout } href='#!'>Logout ({this.props.username})</a>
        </Fragment>
    )

    componentDidMount(){
        /*------------------
          Preloader
      --------------------*/
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        //Humberger Menu
        $(".humberger__open").on('click', function () {
            $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
            $(".humberger__menu__overlay").addClass("active");
            $("body").addClass("over_hid");
        });

        $(".humberger__menu__overlay").on('click', function () {
            $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
            $(".humberger__menu__overlay").removeClass("active");
            $("body").removeClass("over_hid");
        });

        /*------------------
        Navigation
        --------------------*/
        $(".mobile-menu").slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true,
        });

        /*
        Active nav link selection
        */
        $.each($('ul.mnu li a'), (i, elem) => {
            if($(elem).hasClass('active')){
                elem.parentNode.classList.add('active')
            }
        });

        let lastUrl = window.location.href; 
        new MutationObserver(() => {
        const url = window.location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            onUrlChange();
        }
        }).observe(document, {subtree: true, childList: true});


        async function callbackfunc(){
            $('ul.mnu li.active a.active').removeClass('active')
            $('ul.mnu li').removeClass('active');
            return;
        }

        async function onUrlChange() {
            await callbackfunc();
            $('ul.mnu li a.active').parent().addClass('active');
        }

    }

    componentWillUnmount(){
        $(".humberger__open").unbind();
        $(".humberger__menu__overlay").unbind();
    }

    render() { 
        console.log(this.props.username)
        const { isAuthenticated } = this.props;

        return (
            <>
                {/* <!-- Page Preloder --> */}
                <div id="preloder">
                    <div className="loader"></div>
                </div>

                {/* <!-- Humberger Begin --> */}
                <div className="humberger__menu__overlay"></div>
                <div className="humberger__menu__wrapper">
                    <div className="humberger__menu__logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="humberger__menu__cart">
                        <ul>
                            <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
                            <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                        </ul>
                        <div className="header__cart__price">item: <span>Kes.1500.00</span></div>
                    </div>
                    <div className="humberger__menu__widget">
                        <div className="header__top__right__language">
                            <img src={language} alt="" />
                            <div>English</div>
                            <span className="arrow_carrot-down"></span>
                            <ul>
                                <li><Link to="#">Spanish</Link></li>
                                <li><Link to="#">English</Link></li>
                            </ul>
                        </div>
                        <div className="header__top__right__auth">
                            { !isAuthenticated ? '': <><Link className='d-inline' to='/auth/profile'><i className="fa fa-user"></i> Profile</Link><span> | </span></> }
                            { !isAuthenticated ? <Link className='loginlnk' to="/auth/login"><i className="fa fa-user"></i> Login</Link> : <a onClick={ this.props.logout } href='#!'><i className="fa fa-sign-out"></i> Logout</a> }
                        </div>
                    </div>
                    <nav className="humberger__menu__nav mobile-menu">
                        <ul className='mnu'>
                            <li className=""><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/category">Shop</NavLink></li>
                            <li><Link to="#">Pages</Link>
                                <ul className="header__menu__dropdown">
                                    <li><Link to="./shop-details.html">Shop Details</Link></li>
                                    <li><Link to="./shoping-cart.html">Shoping Cart</Link></li>
                                    <li><Link to="./checkout.html">Check Out</Link></li>
                                    <li><Link to="./blog-details.html">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to="./blog.html">Blog</Link></li>
                            <li><Link to="./contact.html">Contact</Link></li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                    <div className="header__top__right__social">
                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                        <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
                    </div>
                    <div className="humberger__menu__contact">
                        <ul>
                            <li><a href='mailto:admin@shop-mall.xyz'><i className="fa fa-envelope"></i> admin@shop-mall.xyz</a></li>
                            <li>Free Shipping for all Order of Kes. 2,000</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Humberger End --> */}

                {/* <!-- Header Section Begin --> */}
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__left">
                                        <ul>
                                            <li><a href='mailto:admin@shop-mall.xyz'><i className="fa fa-envelope"></i> admin@shop-mall.xyz</a></li>
                                            <li>Free Shipping for all Order of Kes.2,000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__right">
                                        <div className="header__top__right__social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-linkedin"></i></a>
                                            <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                        </div>
                                        <div className="header__top__right__language">
                                            <img src={language} alt="" />
                                            <div>English</div>
                                            <span className="arrow_carrot-down"></span>
                                            <ul>
                                                <li><a href="#">Spanish</a></li>
                                                <li><a href="#">English</a></li>
                                            </ul>
                                        </div>
                                        <div className="header__top__right__auth">
                                            { !isAuthenticated ? '': <><Link className='d-inline' to='/auth/profile'><i className="fa fa-user"></i> Profile</Link><span> | </span></> }
                                            { !isAuthenticated ? <Link className='loginlnk' to="/auth/login"><i className="fa fa-user"></i> Login</Link>: <a className='d-inline' onClick={ this.props.logout } href='#!'><i className="fa fa-sign-out"></i> Logout</a> }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="header__logo">
                                    <Link to="/"><img src={logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <nav className="header__menu">
                                    <ul className='mnu'>
                                        <li className=""><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/category">Shop</NavLink></li>
                                        <li><Link to="#">Pages</Link>
                                            <ul className="header__menu__dropdown">
                                                <li><Link to="./shop-details.html">Shop Details</Link></li>
                                                <li><Link to="./shoping-cart.html">Shoping Cart</Link></li>
                                                <li><Link to="./checkout.html">Check Out</Link></li>
                                                <li><Link to="./blog-details.html">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="./blog.html">Blog</Link></li>
                                        <li><Link to="./contact.html">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__cart">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                                    </ul>
                                    <div className="header__cart__price">item: <span>Kes.1500.00</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="humberger__open">
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </header>
                {/* <!-- Header Section End --> */}

                {/* <nav className="navbar navbar-expand-lg bg-light mb-5">
                        <div className="container">
                            <Link className="navbar-brand" to="/">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                {isAuthenticated ? this.authLinks() : this.guestLinks()}
                            </div>
                            </div>
                        </div>
                    </nav> */}
            </>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.username
})
 
export default connect(mapStateToProps, { logout })(Navbar);