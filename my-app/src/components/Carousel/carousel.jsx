import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css'; // Importe les styles spécifiques au carousel

function CarouselSection() {
  return (
    <Carousel interval={3000} controls={true} indicators={true} className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png?text=Slide+1" // Remplace par ton image
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png?text=Slide+2" // Remplace par ton image
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png?text=Slide+3" // Remplace par ton image
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
