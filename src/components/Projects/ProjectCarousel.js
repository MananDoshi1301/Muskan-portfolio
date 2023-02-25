import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const ProjectCarousel = () => {

  const data = [
    { title: "0", },
    { title: "1", },
    { title: "2", },
  ];
  const CarouselTile = ({ item }) => {
    return (
      <div>
        <img src={"https://images.ctfassets.net/hrltx12pl8hq/5mO7yOCen5hp7ZzjxKEiUK/3edb66cca1df3c6c7b458d98dfe6a3f2/aerial-shutterstock_1303849930.jpg?fit=fill&w=1024&h=683&fm=webp"} />
        <p className="legend">Legend 1</p>
      </div>
    )
  }
  return (
    <>
      <Carousel>
        {
          data.map((item, key) => (
            <CarouselTile item={item} />
          ))
        }
      </Carousel>
    </>
  )
}

export default ProjectCarousel