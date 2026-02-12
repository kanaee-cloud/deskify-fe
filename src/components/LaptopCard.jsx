import React, { useEffect, useState } from "react";
// import { truncateText } from "../utilities/TruncateText";
import { CgSmartphoneRam } from "react-icons/cg";
import { extractText } from "../utilities/ExtractText";
import { FormatMoney } from "../utilities/FormatMoney";
import { FaDatabase } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { TwoChar } from "../utilities/TwoChar";
import useComparisons from "../hooks/useComparisons";
import LaptopDetailModal from "./LaptopDetailModal";
import useLocalLaptop from "../hooks/useLocalLaptop";

const LaptopCard = ({
  id,
  name,
  image,
  brand,
  ram,
  memory,
  display,
  processor,
  gpu,
  price,
  refresh_rate
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addLaptop, laptop } = useLocalLaptop();
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedLaptop = JSON.parse(localStorage.getItem("laptop")) || [];
    setIsBookmarked(savedLaptop.some((item) => String(item.id) === String(id)));
  }, [laptop, id])


  // const handleAddComparison = () => {
  //   const laptopDetails = { id, name, image, ram, memory, display };
  //   const comparisons = JSON.parse(localStorage.getItem("comparisons")) || [];
  //   comparisons.push(laptopDetails);
  //   localStorage.setItem("comparisons", JSON.stringify(comparisons));
  //   alert(`${name} added to comparison!`);

  //   window.location.reload();
  // };

  const handleBookmarkClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      addLaptop({ id, name, image, ram, memory, display, price, processor, gpu });
      setIsLoading(false);
    }, 1000);
  };

  const { addComparison } = useComparisons();

  return (
    <>
      <div className="group relative flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(227,185,81,0.2)] hover:border-accent/40">
        <div
          className="flex items-center gap-x-5 w-full px-4 py-4 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div>
            <img
              src={image}
              alt={name}
              className="w-auto h-[15vh] object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h1 className="w-full text-sm font-light ">{name}</h1>
            <div className="flex w-full gap-x-4 opacity-70 items-center">
              <p className="flex items-center text-xs gap-x-1">
                <CgSmartphoneRam size={15} className="text-accent" />
                {extractText(ram)}
              </p>

              <p className="flex items-center text-xs gap-x-1">
                <FiMonitor size={15} className="text-accent" />
                {TwoChar(display)}
              </p>

              <p className="flex items-center text-xs gap-x-1">
                <FaDatabase size={15} className="text-accent" />
                {extractText(memory)}
              </p>
            </div>
            <h3 className="text-sm font-light">{FormatMoney(price)}</h3>
          </div>
        </div>
        <button
          onClick={() =>
            addComparison({ id, name, image, brand, processor, gpu, price, ram, memory, display, refresh_rate })
          }
          className="bg-accent hover:bg-yellow-500 transition-all w-full py-2 text-sm font-medium text-primary mt-auto"
        >
          Add Comparison
        </button>
      </div>
      <LaptopDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        laptopData={{
          id,
          name,
          image,
          brand,
          ram,
          memory,
          display,
          processor,
          gpu,
          price,
          refresh_rate
        }}
        addComparison={addComparison}
        handleBookmarkClick={handleBookmarkClick}
        isLoading={isLoading}
        isBookmarked={isBookmarked}
      />
    </>
  );
};

export default LaptopCard;
