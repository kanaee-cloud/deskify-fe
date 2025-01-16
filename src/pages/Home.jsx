import React from "react";
import Navbar from "../components/Navbar";
import { RiArrowDownDoubleFill } from "react-icons/ri";


const Home = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div>
        <div id="section1" className="bg-home bg-no-repeat bg-center h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col gap-y-10 text-center mt-20">
            <h1 className="text-5xl font-medium text-center">Build Your Ultimate Laptop <br /> Setup with Ease.</h1>
            <h2 className="text-xl font-light text-center">We Help You Choose Your Perfect Laptop Setup</h2>
            <RiArrowDownDoubleFill className="mx-auto" size={65}/>
          </div>
        </div>
        <div id="section2" className="h-screen flex flex-col justify-center items-center">
          <h1>Section 2</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
