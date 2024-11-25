
import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa"
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./slice/ProductSlice";

const Post = ({ allPage, activeGrid, categoryFilter, showPrice, brandCategory }) => {
  let { info, loading } = useContext(ApiData);
  let [filterShow, setFilterShow] = useState([]);
  let [count, setCount] = useState(true);

 let dispatch = useDispatch()
 let handleCartProduct = (item) =>{
  dispatch(addToCart({...item, qun:1}))
}

  useEffect(() => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
  }, [categoryFilter]);

  let handleSee = () => {
    setFilterShow(categoryFilter);
    setCount(false);
  };

  let handleSeeless = () => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
    setCount(true);
  };

  return (

    <>

     {brandCategory.length > 0 ? 
     <>
     <div className={`${activeGrid == "active" ? "w-full " : "flex flex-wrap"}`}>
    {brandCategory.map((item) => (
  <div className="lg:w-[30%] w-[75%] md:w-[47%] mr-2">

    <div className="">
      <div className="relative group overflow-hidden ">
        <Link to={`/shop/${item.id}`}>
          <img className="w-full" src={item.thumbnail} alt="" />
        </Link>
        <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
          <li className="py-2">
            Add to Wish List <FaHeart className="inline-block" />
          </li>
          <li className="py-2">
            Compare <IoGitCompare className="inline-block" />
          </li>
          <li className="py-2 cursor-pointer" onClick={()=>handleCartProduct(item)}>
            Add to Cart <FaCartPlus className="inline-block" />
          </li>
        </ul>
      </div>
    </div>

    <div className="flex justify-between pr-3">
      <div className="">
        <h3 className="text-[#262626] font-bold text-[16px] font-sans">
          {item.title}
        </h3>
        <h5 className="text-[#262626] font-normal text-[16px] font-sans">
          {item.brand}
        </h5>
      </div>
      <p className="text-[#262626] font-bold text-[16px] font-sans">
        ${item.price}
      </p>
    </div>
  </div>
  
))}
</div>

   </>
     :
    
      filterShow.length > 0 ? 
        <>
          <div className={`${activeGrid == "active" ? "w-full " : "flex flex-wrap"}`}>
            {filterShow.map((item) => (
              <div className="lg:w-[30%] w-[75%] md:w-[47%] mr-2">
                <div className="">
                  <div className="relative group overflow-hidden ">
                    <Link to={`/shop/${item.id}`}>
                      <img className="w-full" src={item.thumbnail} alt="" />
                    </Link>
                    <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                      <li className="py-2">
                        Add to Wish List <FaHeart className="inline-block" />
                      </li>
                      <li className="py-2">
                        Compare <IoGitCompare className="inline-block" />
                      </li>
                      <li className="py-2 cursor-pointer" onClick={()=>handleCartProduct(item)}>
                        Add to Cart <FaCartPlus className="inline-block" />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between pr-3">
                  <div className="">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                      {item.title}
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                      {item.brand}
                    </h5>
                  </div>
                  <p className="text-[#262626] font-bold text-[16px] font-sans">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" lg:py-5">
            {count
              ? categoryFilter.length > 5 && (
                <div onClick={handleSee} className="">
                  <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[14px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300"> See More</button>
                </div>
              )
              : categoryFilter.length > 5 && (

                <div onClick={handleSeeless} className="">
                  <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[14px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300"> See Less</button>
                </div>
              )}
          </div>
        </>

      
        : 
          <div className={`${activeGrid == "active" ? "w-full " : "flex flex-wrap"}`}>
            {loading ?
              (
                <h2> Loading.....</h2>)
              : (<>

                {allPage.map((item) => (

                  <div className=" lg:w-[30%] w-[75%] md:w-[47%] mr-2">
                    <div className="">
                      <div className="relative group overflow-hidden">
                        <Link to={`/shop/${item.id}`}>
                          <img className="w-full" src={item.thumbnail} alt="" />
                        </Link>
                        <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
                          <li className="py-2">
                            Add to Wish List <FaHeart className="inline-block" />
                          </li>
                          <li className="py-2">
                            Compare <IoGitCompare className="inline-block" />
                          </li>
                          <li className="py-2 cursor-pointer" onClick={()=>handleCartProduct(item)}>
                            Add to Cart <FaCartPlus className="inline-block" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="">
                        <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                          {item.title}
                        </h3>
                        <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                          {item.brand}
                        </h5>
                      </div>
                      <p className="text-[#262626] font-bold text-[16px] font-sans">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}



              </>

              )}

          </div>


        
            }
  
    </>


  )
}

export default Post
