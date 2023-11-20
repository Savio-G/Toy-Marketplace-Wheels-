import React from 'react';
import Navbar from '../../SharedComponents/Navbar';

const Hero = () => {
  return (
    // main div
    <div className='min-h-screen w-[100%] '>
      {/* back div */}
      <div className='h-[100vh] w-[100%] '>
        <img className='w-[100%] h-[100vh] md:h-[100%] object-cover  ' src="https://images.unsplash.com/photo-1625687095627-70abbf6cf29b?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      {/* Top div */}
      <div className='absolute top-0 left-0 h-[100vh] w-[100%] pointer-events-none'>
        {/* working area for home page */}
        <div className='relative h-[100vh] w-[100%] lg:w-[80%] max-w-[1920px] mx-auto'>
          <div className='pointer-events-auto'>
            <Navbar ></Navbar>
          </div>
          {/* main hero section */}
          {/* hero container */}
          <div className='p-[1.5rem] lg:p-0 absolute top-[50%] lg:top-[50%] left-0 transform translate-y-[-50%] translate-x-[0] w-[100%] lg:flex lg:justify-between'>

            {/* hero left */}

            <div className='w-[100%] lg:min-w-[50%] h-[5vw] '>
              <div className='sm:mb-3vw'>
                <h1 className=' text-white text-[10vw] md:text-[7vw] lg:text-[6vw] tracking-[-0.10em] leading-[.9] font-custom2 uppercase'>Daring Designs</h1>
                <h1 className=' text-white text-[10vw] md:text-[7vw] lg:text-[6vw] tracking-[-0.10em] leading-[.9] font-custom2 uppercase'>Speed that</h1>
                <h1 className=' text-white text-[10vw] md:text-[7vw] lg:text-[6vw] tracking-[-0.10em] leading-[.9] font-custom2 uppercase'>Hot Flies</h1>
              </div>
              <button className='bg-white mt-[5vw] lg:px-[4vw] lg:py-[0.8vw] lg:mt-[2.5vw] lg:text-[1.5vw] font-custom2 tracking-[-0.09em] font-bold uppercase pointer-events-auto'>Explore Now</button>
            </div>
            {/* hero right */}
            <div className='mt-[25vh] lg:mt-0 w-[100%] lg:w-[30%]  flex flex-col lg:items-end  text-white font-custom'>
              <h1 className='text-sm-base mb-[1vw] lg:text-base lg:mb-[1vw]'>Lorem ipsum dolor sit amet.</h1>
              {/* img div */}
              <div className='h-[200px] md:h-[300px] w-[100%] mb-10 lg:mb-[1vw]  object-cover '>
                <img className='h-[100%] w-[100%] object-cover' src="https://images.unsplash.com/photo-1622481714836-1100101a43cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div>
                <p className='lg:text-right text-sm-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repudiandae dignissimos obcaecati molestias similique adipisci facere beatae quo voluptatem, amet aliquam ipsum quae. Id ipsum sapiente nobis illum omnis alias!</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;