import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  // const ToggleOpen =()=>{
  //   setIsOpen(true)
  // }

  // const ToggleClose =()=>{
  //   setIsOpen(false)
  // }

  const ToggleChange=()=>{
    isOpen===false?setIsOpen(true):setIsOpen(false)
  }


  return (
    <>
      <div>
        <header className='bg-white border-b border-grey-200 relative mt-0'>
          <div className='container mx-auto flex justify-between items-center py-5'>
            <div>
              <Link to='/'>
              <h3 className='font-bold text-2xl'>
                Cryp<span className='text-[#1900ff]'>Update</span>
              </h3>
              </Link>
            </div>
            <div className='hidden md:block'>
            <ul className='flex items-center text-lg justify-center font-semibold'>
              <Link to="/">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>Home</li>
              </Link>
              <Link to="/news">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>News</li>
              </Link>
              <Link to="/about">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>About</li>
              </Link>
              <Link to="/contact">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>Contact</li>
              </Link>
            </ul>
            </div>

            {
              isOpen?(<div>
              <ul className='flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-slate-400 text-white items-center justify-center font-semibold'>
                <Link to="/">
                <li className='mt-5 hover:text-grey-900 cursor-pointer'onClick={ToggleChange}>Home</li>
                </Link>
                <Link to="/news">
                <li className='mt-5 hover:text-grey-900 cursor-pointer'onClick={ToggleChange}>News</li>
                </Link>
                <Link to="/about">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'onClick={ToggleChange}>About</li>
              </Link>
              <Link to="/contact">
                <li className='mr-5 hover:text-grey-900 cursor-pointer' onClick={ToggleChange}>Contact</li>
              </Link>
              </ul>
              <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer' onClick={ToggleChange}><RxCross2 size={30} /></button>
              </div>):("")
            }


            <div className='flex justify-center items-center gap-3'>  
              {
                isOpen?"":<button className='md:hidden' onClick={ToggleChange}><GiHamburgerMenu size={25}/></button>
              }
              </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar; 