import React, { Component } from 'react';
import $ from 'jquery';
import CategoriesSection from '../../components/categoriesSection';
import FeaturedSection from '../../components/FeaturedSection';
import HeroSection from '../../components/heroSection';
import BannerSection from '../../components/BannerSection';
import LatestProductSection from '../../components/LatestProductSection';
import BlogSection from '../../components/BlogSection';
import HeroBanner from '../../components/HeroBanner';

class Home extends Component {
    state = {  } 

    componentDidMount(){

    }

    componentDidUpdate() {

    }

    render() { 
        return (
            <>
                <HeroSection banner={<HeroBanner/>} />
                <CategoriesSection />
                <FeaturedSection />
                <BannerSection />
                <LatestProductSection />
                <BlogSection />
            </>
        );
    }
}
 
export default Home;