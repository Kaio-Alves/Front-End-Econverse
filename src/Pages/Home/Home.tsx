import React from 'react';
import Header from './Sections/Header.tsx';
import PromotionBanner from './Sections/PromotionBanner.tsx';
import ShopByCategories from './Sections/ShopByCategories.tsx';
import RelatedProductsWithOptions from './Sections/RelatedProductsWithOptions.tsx';
import Pertners from './Sections/Partners.tsx';
import RelatedProducts from './Sections/RelatedProducts.tsx';
import BrowseByBrands from './Sections/BrowseByBrands.tsx';



const Home = () => {

    return (
      <>
        <Header />
        <PromotionBanner />
        <ShopByCategories />
        <RelatedProductsWithOptions />
        <Pertners />
        <RelatedProducts />
        <Pertners />
        <BrowseByBrands />
        <RelatedProducts />
      </>
    )
  }

export default Home;
