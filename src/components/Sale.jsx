import React from 'react'
import Container from "./Container"
import Flex from "./Flex"
import Sale1Img from "../assets/sale1.png"
import Sale2Img from "../assets/sale2.png"
import Sale3Img from "../assets/sale3.png"
import { Link } from 'react-router-dom'

const Sale = () => {
  return (
 <section className='py-10'>
  <Container>
  <Flex className="justify-between">
            <div className="w-[49%] ">
                <div className="">
                  <Link to="/shop">  <img src={Sale1Img} alt="sale" /></Link>
                </div>
            </div>
            <div className="w-[49%] ">
                <div className="">
                <Link to="/shop">  <img src={Sale2Img} alt="sale" /></Link>
                </div>
                <div className=" lg:pt-10  pt-3">
                <Link to="/shop">  <img src={Sale3Img} alt="sale" /></Link>
                </div>
            </div>
        </Flex>
  </Container>

       
   
 </section>
  )
}

export default Sale
