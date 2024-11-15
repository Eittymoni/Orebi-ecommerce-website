import React, { useState } from 'react'
import Container from './Container'
import Flex from "./Flex"
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";

import { ImCross } from "react-icons/im";
import 'animate.css';
import { Link } from 'react-router-dom';

const Header = () => {
  let [show, setShow] = useState(false)
  return (
  <header className='lg:py-6 py-[20px]'>
     <Container >
     <Flex className=" justify-between items-center  relative" >
     <div className=" w-1/4">
      <img src={Logo} alt="" />
     </div>
     <div className="  lg:hidden flex justify-end " onClick={ ()=> setShow(!show)}>
     {show?  < ImCross className=' cursor-pointer z-10'/>: < FaBars className=' cursor-pointer z-10'/>}
     </div>

     <div className={`absolute left-0 top-[30px] m-0 z-10 w-full lg:flex bg-white lg:static lg:w-3/4 lg:bg-transparent duration-300 ease-in-out justify-center ${
              show ? 'block' : 'hidden'
            } lg:block`}>
    
     <ul className="flex flex-col lg:flex-row items-center lg:justify-end py-4 lg:py-0">
      <li className="lg:px-[20px] py-2 lg:py-0 font-sans text-[16px]  text-[#767676] hover:text-black animate__animated animate__backInLeft lg:animate-none">
        <Link to="/"> Home</Link>
    </li>
      <li className="lg:px-[20px] py-2 lg:py-0 font-sans text-[16px]  text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none">
      <Link to="/shop"> Shop</Link></li>
      <li className="lg:px-[20px] py-2 lg:py-0 font-sans text-[16px]  text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none"><Link to="/about"> About </Link></li>
      <li className="lg:px-[20px] py-2 lg:py-0 font-sans text-[16px]  text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none"> <Link to="/contact"> Contact </Link></li>
      <li className="lg:px-[20px] py-2 lg:py-0 font-sans text-[16px]  text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none">Journals</li>
      </ul>
      
     </div>
     </Flex>
   </Container>
  </header>
  )
}

export default Header
