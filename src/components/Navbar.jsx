import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { CgMenuLeftAlt } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoCaretDown } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";


const Navbar = () => {
    let [show,setShow]= useState(false)
    let [up,setUp]= useState(false)
  return (
    <section className='bg-[#F5F5F3] lg:py-[25px] py-[10px]'>
        <Container>
            <Flex className="items-center justify-between">
                <div className=" lg:w-1/4 ">
                    <div className=" flex items-center relative">
                        <div className='text-[14px]' onClick={ ()=> setShow(!show)}>
                            {show?<CgMenuLeftAlt className='text-2xl'/> :< CgMenuLeft className='text-2xl'/> }
                            </div> 
                            <ul className={` ${show? "absolute lg:top-[50px] top-[35px] left-0 mt-2 bg-[#262626] shadow-lg py-2 w-48": "hidden"}`}>
                            <li className="px-4 py-2 text-[rgba(254,207,236,0.61)] cursor-pointer hover:text-white hover:border-b-[1px] border-[#2D2D2D]">Accessories</li>
                            <li className="px-4 py-2 text-[rgba(254,207,236,0.61)] cursor-pointer hover:text-white hover:border-b-[1px] border-[#2D2D2D]">Furniture</li>
                            <li className="px-4 py-2 text-[rgba(254,207,236,0.61)] cursor-pointer hover:text-white hover:border-b-[1px] border-[#2D2D2D]">Electronics</li>
                            <li className="px-4 py-2 text-[rgba(254,207,236,0.61)] cursor-pointer hover:text-white hover:border-b-[1px] border-[#2D2D2D]">Clothing</li>
                            <li className="px-4 py-2 text-[rgba(254,207,236,0.61)] cursor-pointer hover:text-white hover:border-b-[1px] border-[#2D2D2D]">Bags</li>
                            </ul>
                        <h3 className='px-3 hidden lg:block font-sans text-[14px] text-[#262626]'>Shop by Category</h3>
                    </div>
                </div>
                <div className=" lg:w-1/2">
                <div className=" relative">
                <input type="search" placeholder="Search Products..." className="w-full lg:py-[16px] py-[10px] px-[20px] outline-none border-none lg:text-[16px] md:text-[16px] text-[12px] font-normal font-sans "  />
                <IoSearch className=' absolute top-[50%]  translate-y-[-50%] right-4'/>

                </div>
                </div>
                <div className="lg:w-1/4">
                <div className=" flex justify-end gap-x-6">
                    <div className=" flex items-center">
                        <FaUserLarge />

                        <div className="relative" onClick={()=> setUp(!up)}>
                            {up? <FaCaretUp/>:< IoCaretDown/>} 

                            <ul className={` ${up? "absolute top-[30px] left-[-35px] sm:left-[-40px] mt-2 w-[98px] sm:w-[103px] md:w-[102px] bg-[#262626] shadow-lg z-10":"hidden"}`}>
                                <li className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">Sign In </li>
                                <li className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">Sign Up</li>
                                </ul> 
                            </div>

                          
                
                    </div>
                    <FaShoppingCart />
                </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navbar
