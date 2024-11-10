import React from 'react'
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
    return (
        <section className='  bg-gradient-to-l from  bg-gray-100 via-gray-300  mt-10 pl-11 pr-10' >
            <Container>
                <div className=" text-left">
                    <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
                        Contacts
                    </h3>
                    <div className="flex items-center py-4">
                        <h2 className="font-sans font-bold text-base text-[#767676] ">
                            <Link to="/">Home</Link>
                        </h2>
                        <IoIosArrowForward />
                        <h2 className="font-sans font-bold text-base text-[#767676] ">
                            <Link to="/contact">Contacts</Link>
                        </h2>
                    </div>
                </div>
                <div className="  h-screen  ">
                    <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 ">
                        <div className=" ">
                            <h3 className="font-sans font-bold text-[39px] text-[#262626] pb-8">
                                Fill up a Form
                            </h3>
                        </div>

                        <form action="">
                            <label className="input  flex items-center w-full  gap-2 border border-gray-300 pl-6 pt-3 pb-3 rounded-lg bg-white  " required>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow focus:outline-none  w-full" placeholder="Username" />
                            </label>

                            <label className="input flex items-center gap-2 mt-3 border border-gray-300 pl-6 pt-3 pb-3 rounded-lg bg-white  " required>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70 ">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow focus:outline-none w-full" placeholder=" Enter Your Email" />
                            </label>

                            <textarea id="message" rows="4" class=" p-6 mt-3 w-full  bg-white rounded-lg border border-gray-300  dark:placeholder-gray-400 focus:outline-none resize-none  " placeholder="Write your thoughts here..."></textarea>

                            <div className="pt-[30px]">
                                <button type="submit" className="px-10 py-4 border border-black  bg-black text-white">
                                    Contact
                                </button>
                            </div>


                        </form>





                    </div>
                </div>

                <div className="pt-[25px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1467488049316!2d90.3798147743258!3d23.742145789095115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b067dbaf61%3A0x75c5b9a41c0b3c4a!2sCreative%20IT%20Institute%20(Campus%202)!5e0!3m2!1sen!2sbd!4v1726727168636!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </Container>
        </section>
    )
}

export default Contact
