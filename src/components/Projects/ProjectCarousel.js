import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import projectorImg from "../../images/projectorImg.png";

const ProjectCarousel = () => {

  const CarouselComp = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={projectorImg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={projectorImg}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
  return (
    <>
      <CarouselComp />
    </>
  )
}

export default ProjectCarousel