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
  let cateRef = useRef();
  let accRef = useRef();
  let cardRef = useRef();

  let [isCateNav, setisCateNav] = useState(false);
  let [isAcc, setisAcc] = useState(false);
  let [card, setCard] = useState(false)
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
    <section className='bg-[#F5F5F3] lg:py-6 py-5  px-10'>
      <Container>
        <Flex className="items-center justify-between flex-wrap">
          <div className=" lg:w-1/4  w-full relative">
            <div ref={cateRef} className=" flex items-center gap-x-2 cursor-pointer">

              <CgMenuLeftAlt />
              <h3 className='px-3 font-sans lg:text-[16px] text-[14px] text-[#262626] '>Shop by Category</h3>
            </div>
            {isCateNav && (

              <div className="bg-[#262626] w-[300px] absolute left-0 top-[60px] z-[10]">
                <ul className="py-3">
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out  cursor-pointer">Accessories</li>
                  <li className=" font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out cursor-pointer">Furniture</li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out cursor-pointer">Electronics</li>
                  <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] hover:pl-6 duration-300 ease-in-out cursor-pointer">Clothing</li>
                  <li className=" font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out cursor-pointer">Bags</li>
                </ul>

              </div>
            )}
          </div>

          <div className=" lg:w-1/2 w-full py-4 lg:py-0 ">
            <div className=" relative">
              <input type="search" placeholder="Search Products..." className="w-full lg:py-[16px] py-[10px] px-[20px] outline-none border-none lg:text-[16px] md:text-[16px] text-[12px] font-normal font-sans " />
              <IoSearch className=' absolute top-[50%]  translate-y-[-50%] right-4' />

            </div>
          </div>
          <div className="lg:w-1/4 w-full">
            <div className="flex justify-end gap-x-6 relative">

              <div ref={accRef} className="flex items-center relative cursor-pointer ">
                <FaUserLarge />
                <IoCaretDown />
              </div>

              {isAcc && (
                <div className="bg-[#262626] w-[200px] absolute right-[50px] top-[50px] z-[1]">
                  <ul className="py-3">
                    <li className="font-sans text-[14px] text-white font-normal pl-3 pt-3 pb-2 border-b-[1px] border-[#D8D8D8] cursor-pointer hover:pl-6 duration-300 ease-in-out">
                      Account
                    </li>
                    <li className="font-sans text-[14px] cursor-pointer text-white font-normal pl-3 pt-3 pb-2 hover:pl-6 duration-300 ease-in-out">
                      LogOut
                    </li>
                  </ul>
                </div>
              )}

              <div ref={cardRef} className=" relative">  <FaShoppingCart /></div>

              {card && (
                <div className=" w-[360px] bg-white absolute z-[1]  top-[20px] right-[5px]">
                  <div className=" flex  justify-between  items-center p-[20px] gap-1 bg-[#F5F5F3]">
                    <div className=" w-[25%] h-[50px] bg-[#979797]"></div>
                    <div className="w-[68%]  pl-4"> <h2 className='font-sans text-[14px] text-[#262626] font-bold '> Black Smart Watch</h2>
                      <h2 className='font-sans text-[14px] text-[#262626] font-bold '> $44.00</h2>
                    </div>
                    <div className=" w-[5%]"> <ImCross /></div>
                  </div>
                  <div className=" p-[20px]">
                    <h1 className=' text-[#767676] font-sans font-normal text-[16px] pb-2'>Subtotal: <span className='font-sans text-[#262626] font-bold'>$44.00</span></h1>
                    
                    <div className="flex flex-wrap md:flex-nowrap my-5">
                      <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        View Cart
                      </button>
                      <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                        Check Out
                      </button>
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
