import React from 'react';
import Posts from 'components/landing/Posts';
import { CarouselComponent } from 'components/landing';
import { FooterComponent } from 'components/common';
import SearchBox from 'components/common/SearchComponent/searchBox';
const ProductPage = () => {
    return (
        <div className="product-container">
            <CarouselComponent/>
            <SearchBox/>
            <Posts/>
            <FooterComponent/>
        </div>
    )
}

export default ProductPage;
