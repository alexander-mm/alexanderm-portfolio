import React from 'react'
import html from "../assets/img/techs/html.png"
import css from "../assets/img/techs/css.png"
import bootstrap from "../assets/img/techs/bootstrap.png"
import js from "../assets/img/techs/javascript.png"
import reactjs from "../assets/img/techs/reactjs.png"
import redux from "../assets/img/techs/redux.png"
import nodejs from "../assets/img/techs/nodejs.png"
import git from "../assets/img/techs/git.png"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <Carousel responsive={responsive}>
      <div><img src={html} className='skills-item'/></div>
      <div><img src={css} className='skills-item'/></div>
      <div><img src={bootstrap} className='skills-item'/></div>
      <div><img src={js} className='skills-item'/></div>
      <div><img src={reactjs} className='skills-item'/></div>
      <div><img src={redux} className='skills-item'/></div>
      <div><img src={nodejs} className='skills-item'/></div>
      <div><img src={git} className='skills-item'/></div>
    </Carousel>
  )
}
export default Skills