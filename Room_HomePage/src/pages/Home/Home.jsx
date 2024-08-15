import React, { useState } from 'react';

import './Home.scss';
import images from '../../constants/images';

const Home = () => {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [selectedContent, setSelectedContent] = useState(0);

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
    // <div className='flex flex-col w-full min-h-screen'>

    //   <div className='flex flex-row w-full h-[60%]'>

    //     <div className="main__div-nav w-[58%]" style={{ background: backgroundOptions[selectedBackground] }}>
    //       <div className="nav">
    //         <div className="nav-head">
    //           <img src={images.logo} alt="" />
    //         </div>
    //         <div className="nav-itemCon">
    //           <div className="nav-items">Home</div>
    //           <div className="nav-items">Shop</div>
    //           <div className="nav-items">About</div>
    //           <div className="nav-items">Contact</div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="main__div-content w-[40%]">

    //       <div className={`main__div-contentCons relative`}>

    //         <div className="main__div-content-heading">
    //           {currentContent.heading}
    //         </div>
    //         <div className="main__div-content-para">
    //           {currentContent.para}
    //         </div>
    //         <button className='shopNow__button flex flex-row gap-3'>
    //           Shop now
    //           &nbsp;
    //           <img src={images.iconArrow} alt="" />
    //         </button>

    //         <div className="arrowDiv absolute bottom-0 left-0">
    //           <button onClick={changeLeft} className="firstArrow">
    //             <img src={images.iconLeft} alt="" />
    //           </button>
    //           <button onClick={changeRight} className="secondArrow">
    //             <img src={images.iconRight} alt="" />
    //           </button>
    //         </div>

    //       </div>

    //     </div>

    //   </div>

    //   <div className='flex flex-row w-full'>

    //     <div className='bg-aboutDark w-[32%] h-full'></div>

    //     <div className="mini__div-content w-[33%]">
    //       <div className="mini__div-content-heading">
    //         About our furniture
    //       </div>
    //       <div className="mini__div-content-para">
    //         Our multifunctional collection blends design and function to suit your individual taste.
    //         Make each room unique, or pick a cohesive theme that best express your interests and what
    //         inspires you. Find the furniture pieces you need, from traditional to contemporary styles
    //         or anything in between. Product specialists are available to help you create your dream space.
    //       </div>
    //     </div>

    //     <div className='bg-aboutLight w-[32%] h-full'></div>

    //   </div>

    //   <div className="attribution">
    //     Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
    //     Coded by <a href="https://github.com/the-bipu">The Bipu</a>.
    //   </div>
    // </div>

    <div className='w-full h-full min-h-screen bg-white flex flex-col'>

      <div className='flex md:flex-row flex-col w-full'>

        <div
          className="w-[60%] min-h-[500px]"
          style={{
            backgroundImage: backgroundOptions[selectedBackground],
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="navbar flex items-center">
            <div className="navbar-head">
              <img src={images.logo} alt="" />
            </div>
            <div className="flex flex-row gap-4 nav-items">
              <div className="nav-item">Home</div>
              <div className="nav-item">Shop</div>
              <div className="nav-item">About</div>
              <div className="nav-item">Contact</div>
            </div>
          </div>
        </div>

        <div className='w-[40%] py-32 px-24 relative'>

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

            <div className="absolute bottom-0 left-0 arrowDiv">
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

      <div className='flex md:flex-row flex-col w-full bg-yellow-300'></div>
    </div>
  )
}

export default Home;