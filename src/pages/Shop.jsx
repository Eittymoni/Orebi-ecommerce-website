
import React, { useState } from "react";
import Container from "../components/Container";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Post from "../components/Post";

const Shop = () => {
  let [show, setShow] = useState(false);
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
        <div className="lg:w-4/5">
          <div className="pt-8 flex justify-end items-center gap-x-10">
            <div className="">
              <label className="pr-3" htmlFor="">
                Sort By :
              </label>
              <select
                className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                name=""
                id=""
              >
                <option value="">one</option>
                <option value="">one</option>
                <option value="">one</option>
                <option value="">one</option>
              </select>
            </div>
            <div className="">
              <label className="pr-3" htmlFor="">
                Show:
              </label>
              <select
                className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                name=""
                id=""
              >
                <option value="">one</option>
                <option value="">one</option>
                <option value="">one</option>
                <option value="">one</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between flex-wrap">
           
              <Post/>


          </div>
        </div>
      </div>
    </Container>
  </section>
  )
}

export default Shop
