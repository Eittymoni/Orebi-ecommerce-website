import React from 'react'
import BanImg from "../assets/banner.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FaCarSide } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";
import Container from './Container';
import Flex from './Flex';


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        
        appendDots: dots => (
          <div
            style={{
           
              borderRadius: "10px",
              padding: "10px",
              position:"absolute",
              left:"50px",
              top:"50%",
              transform:"translateY(-50%)"
            }}
          >
            <ul className='one' style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div  className='two'
            style={{
              width: "30px",
              color: "transparent",
              borderRight: "3px solid white",
              padding:"10px 0"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
    <section  className='border-b-[1px] border-[#D8D8D8] '>
        <Slider {...settings}>

        <div className="">
        <Link to="/shop"> <img src={BanImg} alt="" /></Link>

        </div>
        <div className="">
        <Link to="/shop"> <img src={BanImg} alt="" /></Link>

        </div>
        <div className="">
        <Link to="/shop"> <img src={BanImg} alt="" /></Link>

        </div>
       
        
        </Slider>
        <Container>
                <Flex className="justify-between pb-4 items-center lg:py-0 py-2">
                    <div className=" flex items-center">
                        <div className=" ">
                            <span className='font-dm text-[#262626] font-bold lg:text-[24px]   text-[12px] pr-2'>2</span> 
                            <span className='font-dm text-[#6D6D6D] font-normal lg:text-[16px] text-[10px]'>Two years warranty</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <FaCarSide />
                            <span className='font-dm text-[#6D6D6D] font-normal lg:text-[16px] text-[10px] ml-2'>Free shipping</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <IoReloadOutline />
                            <span className='font-dm text-[#6D6D6D] font-normal lg:text-[16px] text-[10px] ml-2'>Free shipping</span>
                        </div>

                    </div>
                </Flex>
            </Container>
    
    </section>
  )
}

export default Banner
