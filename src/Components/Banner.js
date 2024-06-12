import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src='Images/slide1.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='Images/slide2.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='Images/slide3.jpg'/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner