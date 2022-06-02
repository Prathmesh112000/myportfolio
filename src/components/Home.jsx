import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import prathmesh from "../assets/Prathmesh.JPG"

const Home = () => {
  // #0a192f
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]' style={{display:"flex"}}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
       Prathmesh Nerle
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>


          

        </div>

        {/* -----------------------------edited------------------ */}
          

        {/* ----------------------------------------------------- */}
      </div>
      <div style={{marginTop:"200px",width:"220px",height:"350px",marginRight:"200px"}}>
            <img src={prathmesh} alt="" srcset=""  style={{height:"auto",borderRadius:'30px'}}/>
          </div>



          



    </div>
  );
};

export default Home;
