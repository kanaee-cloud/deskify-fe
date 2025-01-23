import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { PiMonitor } from "react-icons/pi";
// import { RiArrowDownDoubleFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="bg-home bg-no-repeat bg-center h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-y-10 text-center">
            <h1 className="lg:text-6xl text-3xl font-medium text-center">
              Build Your Ultimate Laptop <br /> Setup with Ease.
            </h1>
            <h2 className="lg:text-xl mb-10 font-light text-center opacity-50">
              We Help You Choose Your Perfect Laptop Setup
            </h2>
          </div>
          <a href="#section2">
            <div className="arrow">
              <span></span>
              <span></span>
            </div>
          </a>
        </div>

        <div
          id="section2"
          className="md:h-screen flex justify-center items-center md:gap-x-20 gap-x-10"
        >
          {/* Setup Pre-build Section */}
          <div className="w-full flex flex-col items-center text-center group p-6 rounded-lg relative overflow-hidden">
            {/* Sliding background overlay */}
            <div className="absolute inset-0 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full -z-10 " />

            <h1 className="md:text-4xl font-medium group-hover:text-sanctuary transition-colors duration-300">
              Setup Pre-build
            </h1>
            <p className="md:text-lg text-xs font-normal opacity-70 group-hover:text-sanctuary group-hover:opacity-100 transition-all duration-300">
              Between setup pre-build that suits your needs.
            </p>
            <img
              src="/assets/monitor.png"
              alt="Monitor"
              className="md:w-40 mt-4 group-hover:hidden transition-all duration-300"
            />
            <img
              src="/assets/monitor-hover.png"
              alt="Monitor Hover"
              className="md:w-48 mt-4 hidden group-hover:block transition-all duration-300"
            />
          </div>

          {/* Vertical Line (Image) */}
          <img src="/assets/garis.png" alt="Vertical Line" className="h-60" />

          {/* Laptop Comparison Section */}
          <div className="w-full flex flex-col items-center text-center group p-6 rounded-lg relative overflow-hidden">
            <div
              className="absolute inset-0 bg-accent transition-all duration-300 ease-out right-0 w-0 group-hover:w-full -z-10"
              style={{ left: "auto" }} // Ini akan memastikan background mulai dari kanan
            />

            <h1 className="md:text-4xl font-medium group-hover:text-sanctuary transition-colors duration-300">
              Laptop Comparison
            </h1>
            <p className="md:text-lg text-xs font-normal opacity-70 group-hover:text-sanctuary group-hover:opacity-100 transition-all duration-300">
              Find and compare your perfect laptop.
            </p>
            <img
              src="/assets/laptop.png"
              alt="Laptop"
              className="md:w-44 mt-4 group-hover:hidden transition-all duration-300"
            />
            <img
              src="/assets/laptop-hover.png"
              alt="Laptop Hover"
              className="md:w-44 mt-4 hidden group-hover:block transition-all duration-300"
            />
          </div>
        </div>

        <div
          id="section3"
          className="h-3/4 text-white flex items-center justify-center"
        >
          <div className="mt-12 mx-auto p-4 md:flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl md:text-5xl font-medium mb-7">Why You Might Ask?</h1>
              <p className="text-justify md:text-xl font-light text-gray-300">
                We believe laptop can improve productivity anywhere you go.
                <br />
                So why not combine that into a comfy setup with the same
                portability that match your need?
              </p>
            </div>
            <div className="ml-32">
              <div className="w-36 h-36 rounded-full flex items-center justify-center">
                <img src="/assets/tanya.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          id="section4"
          className="bg-information bg-no-repeat bg-center h-screen flex flex-col justify-center items-center"
        >
          <div className="max-w-full md:text-center px-4">
            <h1 className="text-2xl md:text-4xl font-medium text-white mb-4">
              We Respect Your Data
            </h1>
            <h2 className="textjustify md:text-xl font-light text-gray-300 leading-relaxed">
              No registration required - jump right in and explore our website.
              Your privacy matters to us, and we've <br /> designed everything
              to work without collecting any of your personal information.
            </h2>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
