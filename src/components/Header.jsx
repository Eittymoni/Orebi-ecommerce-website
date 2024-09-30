import React, { useState } from 'react'
import Container from './Container'
import Flex from "./Flex"
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";

import { ImCross } from "react-icons/im";
import 'animate.css';

const Header = () => {
  let [show, setShow] = useState(false)
  return (
  <header>
     <Container>
     <Flex className=" justify-between items-center lg:py-[32px] py-[20px] relative" >
     <div className=" w-1/4">
      <img src={Logo} alt="" />
     </div>
     <div className=" w-3/4 lg:hidden flex justify-end " onClick={ ()=> setShow(!show)}>
     {show?  < ImCross className='z-10'/>: < FaBars className='z-10'/>}
     
    
    
     </div>

     <div className={`block absolute left-0 top-[40px] z-10  lg:flex bg-white lg:static lg:w-2/4 lg:bg-transparent duration-300 ease-in-out ${ show ? " right-0 top-[40px] w-full": " hidden  "}`}>
    
     <ul className="flex flex-col lg:flex-row items-center lg:justify-end py-4 lg:py-0">
      <li className="px-[20px] py-2 lg:py-0 font-sans text-[14px] font-bold text-[#767676] hover:text-black animate__animated animate__backInLeft lg:animate-none">Home</li>
      <li className="px-[20px] py-2 lg:py-0 font-sans text-[14px] font-bold text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none">Shop</li>
      <li className="px-[20px] py-2 lg:py-0 font-sans text-[14px] font-bold text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none">About</li>
      <li className="px-[20px] py-2 lg:py-0 font-sans text-[14px] font-bold text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none">Contact</li>
      <li className="px-[20px] py-2 lg:py-0 font-sans text-[14px] font-bold text-[#767676] animate__animated animate__backInLeft hover:text-black lg:animate-none">Journals</li>
      </ul>
      
     </div>
     </Flex>
   </Container>
  </header>
  )
}

export default Header
