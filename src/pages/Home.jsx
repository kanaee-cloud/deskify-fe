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
          <div className="flex flex-col gap-y-10 text-center">
            <h1 className="text-6xl font-medium text-center">
              Build Your Ultimate Laptop <br /> Setup with Ease.
            </h1>
            <h2 className="text-xl font-light text-center opacity-50">
              We Help You Choose Your Perfect Laptop Setup
            </h2>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="section2"
          className="h-screen flex justify-center items-center gap-x-20"
        >
          {/* Setup Pre-build Section */}
          <div className="flex flex-col items-center text-center group p-6 rounded-lg relative overflow-hidden">
            {/* Sliding background overlay */}
            <div className="absolute inset-0 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full -z-10 " />

            <h1 className="text-4xl font-medium group-hover:text-sanctuary transition-colors duration-300">
              Setup Pre-build
            </h1>
            <p className="font-normal opacity-70 group-hover:text-sanctuary group-hover:opacity-100 transition-all duration-300">
              Choose between setup pre-build that suits your needs.
            </p>
            <img
              src="/assets/monitor.png"
              alt="Monitor"
              className="w-40 mt-4 group-hover:hidden transition-all duration-300"
            />
            <img
              src="/assets/monitor-hover.png"
              alt="Monitor Hover"
              className="w-48 mt-4 hidden group-hover:block transition-all duration-300"
            />
          </div>

          {/* Vertical Line (Image) */}
          <img src="/assets/garis.png" alt="Vertical Line" className="h-60" />

          {/* Laptop Comparison Section */}
          <div className="flex flex-col items-center text-center group p-6 rounded-lg relative overflow-hidden">
            <div
              className="absolute inset-0 bg-accent transition-all duration-300 ease-out right-0 w-0 group-hover:w-full -z-10"
              style={{ left: "auto" }} // Ini akan memastikan background mulai dari kanan
            />

            <h1 className="text-4xl font-medium group-hover:text-sanctuary transition-colors duration-300">
              Laptop Comparison
            </h1>
            <p className="font-normal opacity-70 group-hover:text-sanctuary group-hover:opacity-100 transition-all duration-300">
              Find and compare your perfect laptop.
            </p>
            <img
              src="/assets/laptop.png"
              alt="Laptop"
              className="w-44 mt-4 group-hover:hidden transition-all duration-300"
            />
            <img
              src="/assets/laptop-hover.png"
              alt="Laptop Hover"
              className="w-44 mt-4 hidden group-hover:block transition-all duration-300"
            />
          </div>
        </div>

        <div id="section3" className="h-screen text-white">
          <div className="max-w-screen-lg mx-auto flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-semibold mb-7">
                Why You Might Ask?
              </h1>
              <p className="text-lg font-light text-gray-300">
                We believe laptop can improve productivity anywhere you go.
                <br />
                So why not combine that into a comfy setup with the same portability that match your need?
              </p>
            </div>
            <div className="ml-8">
              <div className="w-32 h-32 rounded-full flex items-center justify-center">
                <img src="/assets/tanya.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
