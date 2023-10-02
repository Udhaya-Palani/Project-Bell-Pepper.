import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './assets/food-4.jpg';
import Image2 from './assets/food-3.jpg';
import Image3 from './assets/food-2.jpg';
import "./home.css";

export default function Home() {
  return (
    <>
      <Carousel className='w-80 car'>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src={Image1}
            alt="First slide"
          />
          <button className=' button'>Order online</button>
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src={Image2}
            alt="Second slide"
          />
             <button className=' button'>Order online</button>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src={Image3}
            alt="Third slide"
          />


<button className=' button'>Order online</button>
        </Carousel.Item>
      </Carousel>

      <div className='con-div'>
        <p>Try our NEW digital-exclusive! <a href='#'>Order Soft & Chilli Chiken Chips</a> </p>
      </div>
    </>
  );
}
