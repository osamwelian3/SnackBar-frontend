import React, { Component } from 'react';
import BreadCrumbSection from '../../components/categoriesListing/BreadCrumbSection';
import HeroSection from '../../components/heroSection';
import ItemDetail from '../../components/productDetails/ItemDetail';

class ProductDetails extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <HeroSection collapse={true} />
                <BreadCrumbSection title={`Vegetable's Package`} links={[{'Home':'/'}, {'Shop': '/category'}, {'Garlic': '/product'}]}/>
                <ItemDetail />
            </>
        );
    }
}
 
export default ProductDetails;