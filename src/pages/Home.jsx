import React from "react";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div>
        <div id="section1" className="bg-home bg-no-repeat bg-center h-screen flex flex-col justify-center items-center">
          <h1>Section 1</h1>
        </div>
        <div id="section2" className="h-screen flex flex-col justify-center items-center">
          <h1>Section 2</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
