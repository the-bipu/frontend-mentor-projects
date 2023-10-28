import React from 'react';

import './Home.scss';
import images from '../../constants/images';

const Home = () => {

  return (
    <div className='main__div'>
        <h1>Room Homepage Picture Gallery</h1>
            <img src={images.desktopHeroI1} alt="" />
            <img src={images.desktopHeroI2} alt="" />
            <img src={images.desktopHeroI3} alt="" />
            <img src={images.mobileHeroI1} alt="" />
            <img src={images.mobileHeroI2} alt="" />
            <img src={images.mobileHeroI3} alt="" />
            <img src={images.aboutDark} alt="" />
            <img src={images.aboutLight} alt="" />
            <img src={images.iconArrow} alt="" />
            <img src={images.iconClose} alt="" />
            <img src={images.iconHamburger} alt="" />
            <img src={images.iconLeft} alt="" />
            <img src={images.iconRight} alt="" />
            <img src={images.logo} alt="" />
    </div>
  )
}

export default Home;