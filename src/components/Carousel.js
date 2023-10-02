import React from 'react'
import { useState } from 'react';

const Carousel = () => {
  const [slideActive, setSlideActive] = useState(0)
  const content = [
    {
      text: "We create blablabla blablabla blablabla",
      date: "17.20.23"
    },
    {
      text: "We create blablabla blablabla blablabla",
      date: "17.20.23"
    },
    {
      text: "We create blablabla blablabla blablabla",
      date: "17.20.23"
    },
  ]
  const carouselContent = [];
  content.map((data, key) => {
    carouselContent.push(<div key={key} className='carousel__content'>
      <p className='carousel__title'>{data.text}</p>
      <p className='carousel__date'>{data.date}</p>
      <span className='carousel__button'>Details</span>
    </div>)
    return true;
  })
  const changeActiveSlide = (e) => {
    if (slideActive !== content.length - 1) {

      setSlideActive(slideActive + 1);
    }
    else {
      setSlideActive(0)
    }
  }

  return (
    <div className='carousel'>
      <span onClick={(e) => changeActiveSlide(e)} className='fa fa-chevron-up carousel__icon'></span>
      <div className='carousel__wrapper'>
        {carouselContent}
      </div>
    </div>
  )
}

export default Carousel