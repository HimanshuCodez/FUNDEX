import React from 'react';
import './App.css';
import Carousel from './Carousel';
import ActionCards from './ActionCards';

function App() {
  const slides = [
    {
      image: 'https://techeor.co.in/suceed-15/images/product/b-4.jpg',
      
    },
    {
      image: 'https://techeor.co.in/suceed-15/images/product/b-3.jpg',

    },
    {
      image: 'https://techeor.co.in/suceed-15/images/product/b-2.jpg',

    },
  ];

  return (
    <div className="App">
      {/* Add your video file in the public folder and provide the path here */}
      <video autoPlay loop muted className="background-video">
        <source src="/bgvid.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <Carousel slides={slides} />
        <ActionCards />
      </div>
    </div>
  );
}

export default App;