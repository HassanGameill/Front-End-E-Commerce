import './homePage.css'
import AddsSlider from '../../Components/C-Home-Page/2-Slider/AddsSlider';
import HomeCategory from '../../Components/C-Home-Page/Home-Category/HomeCategory';
import ProductsContainer from '../../Components/Products/ProductsContainer';
import DiscountSection from '../../Components/C-Home-Page/DiscountSection/DiscountSection';

import Image1 from '../../Assets/Image/add.png';
import Image2 from '../../Assets/Image/new year 2024.png';
import BrandFeature from '../../Components/Brand/Brand-Feature/BrandFeature';


function HomePage() {
  return (
    <div className="Home">
      
      <AddsSlider/>
      
      <DiscountSection  discountTitle="Happy New Year"  textColor="#222" background="white" image={Image2}/>

      <HomeCategory /> 

      <ProductsContainer title="More Seller"  btnTitle="More" /> 

      <DiscountSection discountTitle="How to get Delivery" textColor="white" background="#444" image={Image1}/>
      
      <ProductsContainer title="More Rate"  btnTitle="More" /> 

      <BrandFeature title="Brand Popular"  btnTitle="More"/>

      <DiscountSection discountTitle="Happy New Year" textColor="#222" background="white" image={Image2}/>

      

      
      
    </div>
    
  )
}

export default HomePage;
