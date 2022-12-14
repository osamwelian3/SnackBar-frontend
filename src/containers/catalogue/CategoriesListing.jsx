import React, { Component } from 'react';
import BreadCrumbSection from '../../components/categoriesListing/BreadCrumbSection';
import ProductSection from '../../components/categoriesListing/ProductSection';
import HeroSection from '../../components/heroSection';

class CategoriesListing extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <HeroSection collapse={true} />
                <BreadCrumbSection title={`Food's Department`} links={[{'Home':'/'}, {'Shop': '/category'}]} />
                <ProductSection />
            </>
        );
    }
}
 
export default CategoriesListing;