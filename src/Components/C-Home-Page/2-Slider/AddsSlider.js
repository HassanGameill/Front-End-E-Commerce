import './addsSlider.css'

import Carousel from 'react-bootstrap/Carousel';

import image1 from '../../../Assets/Image/banner1.png'
import image2 from '../../../Assets/Image/banner2.png'
import image3 from '../../../Assets/Image/banner3.png'
import image4 from '../../../Assets/Image/banner4.png'
import image5 from '../../../Assets/Image/banner5.png'



function AddsSlider() {
  return (
    <Carousel className='container'>
      <Carousel.Item interval={4000}>
        <div className='slider'>
            <img src={image1} alt='New Year Image' />
        </div>
      </Carousel.Item>


      <Carousel.Item interval={4000}>
        <div className='slider'>
            <img src={image2} alt='New Year Image' />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <div className='slider'>
            <img src={image5} alt='New Year Image' />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <div className='slider'>
            <img src={image3} alt='New Year Image' />
        </div>
      </Carousel.Item>


      <Carousel.Item interval={4000}>
        <div className='slider'>
            <img src={image4} alt='New Year Image' />
        </div>
      </Carousel.Item>



      
    </Carousel>
  )
}

export default AddsSlider
