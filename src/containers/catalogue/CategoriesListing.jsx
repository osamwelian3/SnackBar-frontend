import React, { Component } from 'react';
import BreadCrumbSection from '../../components/categoriesListing/BreadCrumbSection';
import HeroSection from '../../components/heroSection';

class CategoriesListing extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <HeroSection collapse={true} />
                <BreadCrumbSection />
                <div>Test</div>
            </>
        );
    }
}
 
export default CategoriesListing;