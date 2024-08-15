import React, { useState } from 'react';

import './Home.scss';
import images from '../../constants/images';

const Home = () => {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [selectedContent, setSelectedContent] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const backgroundOptions = [
    `url(${images.desktopHeroI1})`,
    `url(${images.desktopHeroI2})`,
    `url(${images.desktopHeroI3})`,
  ];

  const contentOptions = [
    { heading: "Discover innovative ways to decorate", para: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." },
    { heading: "We are available all across the globe", para: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." },
    { heading: "Manufactured with the best materials", para: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office." }
  ];

  const changeLeft = () => {
    console.log("1st background changed !!");
    setSelectedBackground((prevBackground) => (prevBackground - 1 + backgroundOptions.length) % backgroundOptions.length);
    setSelectedContent((prevContent) => (prevContent - 1 + contentOptions.length) % contentOptions.length);
  };

  const changeRight = () => {
    console.log("2nd background changed !!")
    setSelectedBackground((prevBackground) => (prevBackground + 1) % backgroundOptions.length);
    setSelectedContent((prevContent) => (prevContent + 1) % contentOptions.length);
  };

  const currentContent = contentOptions[selectedContent];

  return (
    <div className='w-full h-full min-h-screen bg-white flex flex-col'>

      <div className='flex md:flex-row flex-col w-full'>

        <div
          className="md:w-[60%] w-full min-h-[500px]"
          style={{
            backgroundImage: backgroundOptions[selectedBackground],
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className={`navbar w-full flex items-center md:justify-start justify-center flex-row lowercase gap-9 text-white md:py-12 py-8 md:pl-16 pl-8 relative ${drawerOpen && 'bg-white w-full h-20'}`}>

            <div className='md:hidden flex absolute left-8 top-8'>
              <img src={images.iconHamburger} alt="" onClick={() => setDrawerOpen(!drawerOpen)} className={`${drawerOpen ? 'hidden' : ''}`} />
              <img src={images.iconClose} alt="" onClick={() => setDrawerOpen(!drawerOpen)} className={`${drawerOpen ? '' : 'hidden'}`} />
            </div>

            <div className={`flex gap-3 text-xl justify-center flex-row text-black ${drawerOpen ? 'flex' : 'hidden'}`}>
              <div className="nav-item">Home</div>
              <div className="nav-item">Shop</div>
              <div className="nav-item">About</div>
              <div className="nav-item">Contact</div>
            </div>

            <div className={`navbar-head ${drawerOpen && 'hidden'}`}>
              <img src={images.logo} alt="" />
            </div>

            <div className="md:flex hidden flex-row gap-7 justify-center items-center text-xl nav-items">
              <div className="nav-item">Home</div>
              <div className="nav-item">Shop</div>
              <div className="nav-item">About</div>
              <div className="nav-item">Contact</div>
            </div>

          </div>
        </div>

        <div className='md:w-[40%] w-full md:py-32 py-20 md:px-24 px-10 relative'>

          <div className={`w-full h-auto`}>

            <div className=" text-5xl font-bold text-black">
              {currentContent.heading}
            </div>
            <div className="text-base mt-6 font-normal leading-5">
              {currentContent.para}
            </div>
            <button className='flex flex-row gap-3 text-sm mt-6 uppercase leading-3 text-black bg-transparent border-none'>
              Shop now
              &nbsp;
              <img src={images.iconArrow} alt="" />
            </button>

            <div className="absolute bottom-0 left-0 w-40 h-20 md:flex flex-row bg-black arrowDiv">
              <button onClick={changeLeft} className="firstArrow">
                <img src={images.iconLeft} alt="" />
              </button>
              <button onClick={changeRight} className="secondArrow">
                <img src={images.iconRight} alt="" />
              </button>
            </div>

            <div className="md:hidden flex absolute -top-20 right-0 arrowDiv">
              <button onClick={changeLeft} className="firstArrow">
                <img src={images.iconLeft} alt="" />
              </button>
              <button onClick={changeRight} className="secondArrow">
                <img src={images.iconRight} alt="" />
              </button>
            </div>

          </div>
        </div>

      </div>

      <div className='flex md:flex-row flex-col w-full'>

        <div className='bg-aboutDark min-w-[30%] h-full'></div>

        <div className="w-auto p-12 flex flex-col items-start justify-center">
          <div className="text-lg font-bold uppercase mb-7 text-black">
            About our furniture
          </div>
          <div className="text-base leading-5 text-[#a1a1a1]">
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </div>
        </div>

        <div className='bg-aboutLight min-w-[30%] h-full'></div>
      </div>
    </div>

    //   <div className="attribution">
    //     Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
    //     Coded by <a href="https://github.com/the-bipu">The Bipu</a>.
    //   </div>
  )
}

export default Home;