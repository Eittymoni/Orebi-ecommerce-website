import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Container from "../components/Container";
import Flex from "../components/Flex";
import ShopImg from "../assets/new.png";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    let productId = useParams()
    let [show, setShow] = useState(false);
    let [singleProduct, setSingleProduct] = useState({});
    console.log(productId.id);
  
    let getSingleProduct = () => {
      axios
        .get(`https://dummyjson.com/products/${productId.id}`)
        .then((response) => {
          setSingleProduct(response.data);
        });
    };
  
    useEffect(() => {
      getSingleProduct();
    }, []);
    
  return (
   <>
    <Container>
        <h2 className="text-[#262626] font-normal text-[20px] font-sans pt-8">
          <Link to="/">Home</Link> &#62; <Link to="/shop">Products</Link>
        </h2>
        <Flex className="justify-between pt-8">
          <div className="w-[48%]">
            <img className="w-full" src={ShopImg} alt="" />
          </div>
          <div className="w-[48%]">
            <img className="w-full" src={ShopImg} alt="" />
          </div>
        </Flex>
        <h3 className="text-[#262626] font-bold text-[20px] font-sans pt-8">
          Product
        </h3>
        <div className="">
          <div className="flex gap-x-2 items-center">
            <FaStar />
            <FaRegStarHalfStroke />
            <FaRegStar /> |<span>Review</span>
          </div>
        </div>
        <div className="">
          <h2>00</h2>
        </div>
        <h3>STATUS:</h3>
        <div className="flex flex-wrap md:flex-nowrap my-5">
          <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
            Add to Wish List
          </button>
          <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
            Add to Cart
          </button>
        </div>

        <div className="w-[50%] py-10">
          <div
            className="flex items-center justify-between"
            onClick={() => setShow(!show)}
          >
            <h3>FEATURES & DETAILS</h3>
            {show ? <span>-</span> : <span>+</span>}
          </div>
          {show && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sint earum eveniet, cum quis illo. Itaque alias iure corrupti
              aspernatur repudiandae assumenda fuga natus in. Modi ipsum,
              necessitatibus fugiat dolorum a velit qui, ducimus libero porro
              culpa expedita commodi sequi.
            </p>
          )}
        </div>
      </Container>
   </>
  )
}

export default ProductDetails
