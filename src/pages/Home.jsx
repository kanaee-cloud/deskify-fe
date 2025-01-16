import React from "react";
import Navbar from "../components/Navbar";
import { PiMonitor } from "react-icons/pi";
// import { RiArrowDownDoubleFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div>
        <div
          id="section1"
          className="bg-home bg-no-repeat bg-center h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-y-10 text-center mb-10">
            <h1 className="text-5xl font-medium text-center">
              Build Your Ultimate Laptop <br /> Setup with Ease.
            </h1>
            <h2 className="text-xl font-light text-center opacity-50">
              We Help You Choose Your Perfect Laptop Setup
            </h2>
          </div>
            <div class="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div
          id="section2"
          className="h-screen flex justify-center items-center"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold">Setup Pre-build</h1>
            <p className="font-normal opacity-70">Choose between setup pre-build that suits your needs.</p>
            <img src="/assets/monitor.png" alt="Monitor" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold">Laptop Comparison</h1>
            <p className="font-normal opacity-70">Find and compare your perfect laptop.</p>
            <img src="/assets/laptop.png" alt="Laptop" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
