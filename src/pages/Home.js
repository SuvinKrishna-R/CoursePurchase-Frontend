import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Courses from '../components/Courses';






function Home() {
  return (
    <div className='p-5'>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'70vh'}}
          src="https://i.postimg.cc/L4QyP6Cb/training-3207841-640.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <p style={{fontSize:'70px'}} className='text-white' >It always seems impossible until it’s done</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'70vh'}}
          src="https://i.postimg.cc/L4QyP6Cb/training-3207841-640.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p style={{fontSize:'70px'}} className='text-white'>The future belongs to those who believe in the beauty of their dreams.
</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item > 
        <img
          className="d-block w-100" style={{height:'70vh'}}
          src="https://i.postimg.cc/L4QyP6Cb/training-3207841-640.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p style={{fontSize:'70px'}} className='text-white'>Work smarter, not harder</p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Courses></Courses>
       
    </div>
    
  )
}

export default Home