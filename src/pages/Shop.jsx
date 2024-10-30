
import React, { useState } from "react";
import Container from "../components/Container";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Post from "../components/Post";
import { useContext } from "react";
import { ApiData } from "../components/ContextApi";
import Pagination from "../components/Pagination";
import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

const Shop = () => {
  let {info,loading} = useContext(ApiData)
  let [show, setShow] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(6);
  let [activeGrid, setActiveGrid] = useState("");
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);

  let pageNumber = [];
  for (let i = 0; i < Math.ceil(info.length / perPage); i++) {
    pageNumber.push(i);
  }

    let paginate = (paginate) => {
    setCurrentPage(paginate + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  let handleMulti = () => {
    setActiveGrid("active");
  };

  return (
    <section>
    <Container>
      <div className="flex">
        <div className=" lg:w-1/5 ">
          <div className="pr-6 pt-8">
            <div
              className="flex justify-between items-center"
              onClick={() => setShow(!show)}
            >
              <h2 className="text-[#262626] font-bold lg:text-[20px] text-[14px] font-sans">
                Shop by Category
              </h2>

              {show ? <FaMinus /> : <FaPlus />}
            </div>
            {show && (
              <ul>
                <li>Categroy</li>
                <li>Categroy</li>
                <li>Categroy</li>
                <li>Categroy</li>
                <li>Categroy</li>
              </ul>
            )}
          </div>
        </div>

        <div className="lg:w-4/5 pt-8">

            <div className=" flex lg:justify-between flex-col-reverse pr-5">
            <div className="flex items-center justify-between">
                <div>
                <div className="flex items-center gap-x-4">
                <div
                    onClick={() => setActiveGrid(" ")}
                    className=   {`p-3 hover:bg-[gray] text-[#222] ${activeGrid == "active" ?  " " : "  bg-[gray] text-white"} `}
                  >
                    <IoGrid className={activeGrid === "active" ?  "text-[#222]" :"text-white" } />
                  </div>
                  <div
                    onClick={handleMulti}
                    className={` p-3  hover:bg-[gray] text-[#222] ${activeGrid== "active"? " bg-[gray]": "  "}`}
                  >
                    <FaList className={activeGrid === "active" ? "text-white":"text-[#222]" }/>
                  </div>
                </div>
                </div>
              </div>

          <div className=" flex  lg:justify-end  items-center lg:gap-x-10">
            <div className="">
              <label className="pr-3 lg:text-[18px] text-[14px]"  htmlFor="">
                Sort By :
              </label>
              <select
                className="lg:w-[60px] w-[50] lg:h-[30px] h-[25px] border-[1px] border-[#262626]"
                name=""
                id=""
              >
                <option className=" text-[12px]" value="">one</option>
                <option className=" text-[12px]" value="">one</option>
                <option  className=" text-[12px]" value="">one</option>
                <option  className=" text-[12px]" value="">one</option>
              </select>
            </div>
            <div className="">
              <label className="pr-3 lg:text-[18px] text-[14px]" htmlFor="">
                Show:
              </label>
              <select
                className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                name=""
                id=""
              >
                <option className=" text-[12px]" value="">one</option>
                <option  className=" text-[12px]" value="">one</option>
                <option  className=" text-[12px]" value="">one</option>
                <option  className=" text-[12px]" value="">one</option>
              </select>
            </div>
          </div>
            </div>

          <div className="flex justify-between flex-wrap py-6 ">
           
              < Post allPage={allPage}  activeGrid={activeGrid}/>
              <div className="py-10 w-full flex justify-center ">
              <Pagination pageNumber={pageNumber}  paginate={paginate}
              next={next}
              prev={prev}
              currentPage={currentPage}
              />
              

              </div>
            


          </div>
        </div>
      </div>
    </Container>
  </section>
  )
}

export default Shop
