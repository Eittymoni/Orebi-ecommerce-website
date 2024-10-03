import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { CgMenuLeftAlt } from "react-icons/cg";

import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoCaretDown } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import { ImCross } from "react-icons/im";



const Navbar = () => {
    let cateRef = useRef()  ;
  let accRef = useRef();
  let cardRef= useRef();

    let [isCateNav, setisCateNav] = useState(false);
    let [isAcc, setisAcc] = useState(false);
    let[ card, setCard] = useState(false)
    useEffect(() => {
        document.addEventListener("click", (e) => {
          if (cateRef.current.contains(e.target)) {
            setisCateNav(!isCateNav);
          } else {
            setisCateNav(false);
          }
          if (accRef.current.contains(e.target)) {
            setisAcc(!isAcc);
          } else {
            setisAcc(false);
          }
          if (cardRef.current.contains(e.target)) {
            setCard(!card);
          } else {
            setCard(false);
          }
        });
      }, [isCateNav, isAcc, card]);

  return (
    <section className='bg-[#F5F5F3] lg:py-[25px] py-[10px] border-[1px] border-[#D8D8D8]'>
        <Container>
            <Flex className="items-center justify-between">
                <div className=" lg:w-1/4  relative">
                <div  ref={ cateRef} className=" flex items-center gap-x-2">

                     <CgMenuLeftAlt/> 
                    <h3 className='px-3 font-sans lg:text-[14px] text-[12px] text-[#262626] '>Shop by Category</h3>
                </div>
                     { isCateNav && (           
                   
                    <div className="bg-[#262626] w-[300px] absolute left-0 top-[60px] z-[1]">
                            <ul className= "py-3">
                            <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out ">Accessories</li>
                            <li className=" font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">Furniture</li>
                            <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out ">Electronics</li>
                            <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out ">Clothing</li>
                            <li className=" font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">Bags</li>
                            </ul>

                    </div>
                    )} 
                    </div>
                
                <div className=" lg:w-1/2">
                <div className=" relative">
                <input type="search" placeholder="Search Products..." className="w-full lg:py-[16px] py-[10px] px-[20px] outline-none border-none lg:text-[16px] md:text-[16px] text-[12px] font-normal font-sans "  />
                <IoSearch className=' absolute top-[50%]  translate-y-[-50%] right-4'/>

                </div>
                </div>
                <div className="lg:w-1/4">
                <div className="flex justify-end gap-x-6 relative">
          
              <div ref={accRef} className="flex items-center relative ">
                <FaUserLarge/>
                <IoCaretDown />
              </div>
              
              {isAcc && (
                <div className="bg-[#262626] w-[200px] absolute right-[50px] top-[50px] z-[1]">
                  <ul className="py-3">
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out">
                      Account
                    </li>
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                      LogOut
                    </li>
                  </ul>
                </div>
              )}

              <div  ref={ cardRef} className=" relative">  <FaShoppingCart /></div>
             
              {card && ( 
              <div className=" w-[360px] bg-white absolute z-[1]  top-[20px] right-[5px]">
                <div className=" flex  justify-between  items-center p-[20px] gap-1 bg-[#F5F5F3]">
                    <div className=" w-[25%] h-[50px] bg-[#979797]"></div>
                    <div className="w-[68%]  pl-4"> <h2 className='font-sans text-[14px] text-[#262626] font-bold '> Black Smart Watch</h2>
                    <h2 className='font-sans text-[14px] text-[#262626] font-bold '> $44.00</h2>
                    </div>
                    <div className=" w-[5%]"> <ImCross/></div>
                </div>
                <div className=" p-[20px]">
                    <h1 className=' text-[#767676] font-sans font-normal text-[16px] pb-2'>Subtotal: <span className='font-sans text-[#262626] font-bold'>$44.00</span></h1>
                    <div className=" flex justify-between items-center gap-2">
                        <div className="  w-[50%] py-[16px] px-[40px] border-2 border-[#262626]  bg-white font-bold text-center font-sans text-[#262626] hover:bg-[#262626] hover:text-white hover:border-0">View Cart </div>
                        <div className="  w-[50%] py-[16px] px-[40px] border-2 border-[#262626]  bg-white font-bold text-center font-sans text-[#262626] hover:bg-[#262626] hover:text-white hover:border-0">Checkout </div>
                    </div>
                </div>
              </div>
                 )}

                </div>
                </div>
            </Flex>
        </Container>
       
    </section>
  )
}

export default Navbar
