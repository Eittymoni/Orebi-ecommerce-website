import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { CgMenuLeftAlt } from "react-icons/cg";

import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoCaretDown } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from './slice/ProductSlice';
import { ApiData } from "./ContextApi";




const Navbar = () => {
  let data = useSelector ((state)=> state.product.cartItem)
  let{info,loading} = useContext(ApiData)
 
  let dispatch = useDispatch()
  let navigate = useNavigate()
 
  
  let cateRef = useRef();
  let accRef = useRef();
  let cardRef = useRef();
  let showCartRef = useRef()

  let [isCateNav, setisCateNav] = useState(false);
  let [isAcc, setisAcc] = useState(false);
  let [card, setCard] = useState(false)
  let [search, setSearch] = useState("")
  let [searchFilter, setSearchFilter] = useState([])

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
     
      if(showCartRef.current.contains(e.target)){
        setCard(true)
      }

    });
  }, [isCateNav, isAcc, card]);



  let handleCartPage = () =>{
    
    navigate("/cart")
    setCard(false)
  }

  let handleCheckout = ()=>{
    navigate("/checkout")
      setCard(false)
  }
  let handleChange = (e) =>{
  setSearch(e.target.value);
  let searchOneByOne = info.filter((item)=> item.title.toLowerCase().includes( e.target.value.toLowerCase()))
  setSearchFilter(searchOneByOne);
  
  }
  let handleSearchId = (id) =>{
    navigate(`/shop/${id}`)
    setSearchFilter([])
    setSearch("")
   }
   
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
            <div  className=" relative" >
              <input type="search" onChange={handleChange} placeholder="Search Products..."  value={search} className="w-full lg:py-[16px] py-[10px] px-[20px] outline-none border-none lg:text-[16px] md:text-[16px] text-[12px] font-normal font-sans " />
              <IoSearch className=' absolute top-[50%]  translate-y-[-50%] right-4' />

             
              {searchFilter.length > 0 &&
              <div className="absolute left-0 top-[50px] mt-2 w-[560px] h-[400px] overflow-y-scroll bg-[rgba(233,230,230,0.9)] z-[1]">

              {searchFilter.map((item, i)=>(
                       
                       <div onClick={()=>handleSearchId(item.id)} className="flex items-center bg-white py-4 px-5 cursor-pointer">
                         <div>
                           <img
                             className="w-[80px] md:w-[150px]"
                             src={item.thumbnail}
                             alt="Cart item"
                           />
                         </div>
                         <div className="flex-grow">
                           <div className="font-DM font-bold text-[14px] ml-3">
                             <h3>{item.title}</h3>
                           </div>
                           <div className="font-DM font-bold text-[14px] ml-3">
                             <h3>${item.price}</h3>
                           </div>
                         </div>
                         <div onClick={()=>dispatch(removeProduct(i))} className="ms-auto text-[20px] cursor-pointer">
                           <RxCross2/>
                         </div>
                       </div>
                       
                       
                       ))}

            </div>
}
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

              <div ref={cardRef} className=" relative cursor-pointer"> 
                
                {data.length > 0 &&
                <div className="absolute left-[6px] top-[-12px] h-[15px] w-[15px] bg-[white] rounded-full text-black text-center leading-[15px] text-[12px]">
                {data.length}
                </div>
                }
                 <FaShoppingCart />
                 </div>
<div className="" ref={showCartRef}>
{card && (
                       <div className="absolute right-0 top-full mt-2 w-full md:w-[360px] bg-[rgba(233,230,230,0.9)] z-[1]">
                       {data.map((item, i)=>(
                       <div className="">
                       <div className="flex items-center bg-white py-4 px-5">
                         <div>
                           <img
                             className="w-[80px] md:w-[150px]"
                             src={item.thumbnail}
                             alt="Cart item"
                           />
                         </div>
                         <div className="flex-grow">
                           <div className="font-DM font-bold text-[14px] ml-3">
                             <h3>{item.title}</h3>
                           </div>
                           <div className="font-DM font-bold text-[14px] ml-3">
                             <h3>${item.price}</h3>
                           </div>
                         </div>
                         <div onClick={()=>dispatch(removeProduct(i))} className="ms-auto text-[20px] cursor-pointer">
                           <RxCross2/>
                         </div>
                       </div>
                       
                       </div>
                       ))}
                       <div className="bg-white py-4 px-5">
                         <div className="flex flex-wrap md:flex-nowrap my-5">
                          
                           <button onClick={handleCartPage} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                             View Cart
                           </button>
                           
                       
                           <button onClick={handleCheckout} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
                             Check Out
                           </button>
                           
                         </div>
                       </div>
                     </div>

              )}
</div>
             

            </div>
          </div>
        </Flex>
      </Container>

    </section>
  )
}

export default Navbar
