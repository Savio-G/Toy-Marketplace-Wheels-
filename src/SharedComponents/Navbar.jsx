import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className='hidden lg:flex w-full p-5  align-middle justify-between '>
        {/* This is the left navigation */}


        <ul className=' lg:flex items-center gap-4 uppercase'>
          <h1 className='text-sub text-white font-black'><Link to="/">Wheels</Link></h1>


          <li className='font-semibold font-custom text-sm-base tracking-wide text-white'><Link to="/Mytoys">My toys</Link></li>
          <li className='font-semibold font-custom text-sm-base tracking-wide text-white'><Link to="/">Home</Link></li>
          <li className='font-semibold font-custom text-sm-base tracking-wide text-white'><Link to="/Alltoys">All Toys</Link></li>

        </ul>

        {/* This is the right navigation */}
        <ul className=' lg:flex items-center gap-4  uppercase text-sm-base text-white tracking-wide'>
          <li className='font-semibold font-custom'>
            <Link to="/Addatoy">Add a Toy</Link>
          </li>
          <li className='font-semibold font-custom'>
            <Link to="/Login">Login</Link>
          </li>

        </ul>
      </nav>


      <nav className='relative z-10 lg:hidden w-[100%]  p-3 h-[40px] '>
        <IconContext.Provider value={{ size: '20px' }}>
          <li onClick={() => setIsOpen(!isOpen)} className=' grid  justify-end text-white' ><AiOutlineArrowsAlt></AiOutlineArrowsAlt></li>
        </IconContext.Provider>
        {
          isOpen && <div className=' absolute top-0 left-0 h-[100vh] w-full bg-[black]
transition-transform transform duration-1000 ease-in-out
          '
            style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }}
          >
            {/* closing navigation control for mobile */}
            <div className='h-[40px] p-3'>
              <IconContext.Provider value={{ size: '15px' }}>
                <li onClick={() => setIsOpen(!isOpen)} className=' grid  justify-end text-white' ><BsArrowsAngleContract></BsArrowsAngleContract></li>
              </IconContext.Provider>
            </div >
            {/* mobile nav body */}
            <div className='min-h-[calc(100vh-40px)] flex flex-col justify-center p-[20px]'>
              <div className=' h-[60vh] w-full '>

                <ul className='text-[white]'>
                  <Link className='block font-custom text-[2rem]  mt-5'>Home</Link>
                  <hr />
                  <Link className='block font-custom text-[2rem] mt-5'>All Toys</Link> <hr />
                  <Link className='block font-custom text-[2rem] mt-5'>My Toys</Link> <hr />
                  <Link className='block font-custom text-[2rem] mt-5'>Add A Toy</Link> <hr />
                  <Link className='block font-custom text-[2rem] mt-5'>Login</Link> <hr />
                </ul>
              </div>
            </div>

          </div>
        }
      </nav>

    </>
  );
};

export default Navbar;