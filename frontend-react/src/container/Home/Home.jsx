import React from 'react';

import './Home.scss';
import images from '../../constants/images';

const Home = () => {
  return (
    <div className='main__div'>
      <div className="main__div-nav">
          <div className="nav">
            <div className="nav-head">
              Room
            </div>
            <div className="nav-itemCon">
              <div className="nav-items">Home</div>
              <div className="nav-items">Shop</div>
              <div className="nav-items">About</div>
              <div className="nav-items">Contact</div>
            </div>
          </div>
      </div>

      <div className="main__div-content">
        <div className="main__div-content-heading">
          Discover innovative ways to decorate
        </div>
        <div className="main__div-content-para">
          We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in your 
          own style with our collection and make your property a reflection of you and what you love.
        </div>
        <button className='shopNow__button'>
          Shop now
        </button>

        <div className="arrowDiv">
          <div className="firstArrow">
            <img src="" alt="" />
          </div>
          <div className="secondArrow">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      {/* <div class="main__div-content">
        We are available all across the globe

        With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.

        Shop now
      </div>

      <div class="main__div-content">
        Manufactured with the best materials

        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.

        Shop now
      </div> */}

      <div className="mini__div-image1">
        <img src={images.aboutDark} alt="" />
      </div>

      <div className="mini__div-content">
        <div className="mini__div-content-heading">
          About our furniture
        </div>
        <div className="mini__div-content-para">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </div>
      </div>
      
      <div className="mini__div-image2">
        <img src={images.aboutLight} alt="" />
      </div>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">The Bipu</a>.
      </div>
    </div>
  )
}

export default Home;