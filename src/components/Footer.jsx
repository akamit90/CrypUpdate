import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Footer() {
    const ScrollToTop=()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  return (
    <>
      <footer className='bg-black text-white mt-4'>
        <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-64 md:mx-0 mx-auto text-center md:text-left'>
            <h3 className='font-bold text-2xl'>
            Cryp<span className='text-[#1900ff]'>Update</span>
            </h3>
          </div>
          <div className='flex-grow flex flex-wrap md:pl-20 mb-10 md:mt-0 mt-10 md:text-left text-center'>
            <div className='lg:w-1/4 md:w1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                MENU
              </h2>
              <ul className='list-none mb-10'>
              <Link to="/">
                <li className='mr-5 hover:text-grey-900 cursor-pointer' onClick={ScrollToTop}>Home</li>
              </Link>
              <Link to="/news">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'onClick={ScrollToTop}>News</li>
              </Link>
              <Link to="/about">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'onClick={ScrollToTop}>About</li>
              </Link>
              <Link to="/contact">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'onClick={ScrollToTop}>Contact</li>
              </Link>
              </ul>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                COMPANY
              </h2>
              <ul className='list-none mb-10'>
              <Link to="/about">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>About</li>
              </Link>
              <Link to="/login">
                <li className='mr-5 hover:text-grey-900 cursor-pointer'>Login</li>
              </Link>
                <li className='mt-1'>Privacy Policy</li>
                <li className='mt-1'>Term & Policy</li>
              </ul>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                CONTACT
              </h2>
              <ul className='list-none mb-10'>
                <li className='mt-1'>Contact Sales</li>
                <li className='mt-1'>+123456789</li>
                <li className='mt-1'>News Blog</li>
                <li className='mt-1'>+91897877</li>
              </ul>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                TECH SUPPORT
              </h2>
              <ul className='list-none mb-10'>
                <li className='mt-1'>Contact Support</li>
                <li className='mt-1'>Iinfo Center</li>
                <li className='mt-1'>Activate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-grey-500 text-white'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-sm text-center sm:text-left'>
            © 2024 ApnaCart <span>@copyright</span>
            </p>
            <p className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <span><FaFacebookSquare size={30} /></span>
            <span><FaInstagram size={30}/></span>
            <span><IoLogoTwitter size={30}/></span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
