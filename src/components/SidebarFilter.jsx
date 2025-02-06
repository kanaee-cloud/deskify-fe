import React, { useState, useEffect } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import useComparisons from "../hooks/useComparisons";

const SidebarFilter = ({ laptops, setFilteredLaptops }) => {
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortByStorage, setSortByStorage] = useState(false);
  const [sortByRam, setSortByRam] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { comparisons, removeComparison } = useComparisons();

  // useEffect(() => {
  //   const savedComparisons =
  //     JSON.parse(localStorage.getItem("comparisons")) || [];
  //   setComparisons(savedComparisons);
  // }, []);

  useEffect(() => {
    let filtered = [...laptops];

    if (sortByPrice) {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortByStorage) {
      filtered.sort((a, b) => parseInt(a.memory) - parseInt(b.memory));
    }

    if (sortByRam) {
      filtered.sort((a, b) => parseInt(a.ram) - parseInt(b.ram));
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((laptop) =>
        selectedBrands.includes(laptop.brand)
      );
    }

    setFilteredLaptops(filtered);
  }, [
    sortByPrice,
    sortByStorage,
    sortByRam,
    selectedBrands,
    laptops,
    setFilteredLaptops,
  ]);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const uniqueBrands = [...new Set(laptops.map((laptop) => laptop.brand))];

  return (
    <div className="md:w-1/4">
      <div className="mb-3">
        <p className="text-md mb-2">Sort By</p>
        <div
          className="bg-accent text-sm flex items-center px-4 py-2 rounded-lg justify-between text-primary cursor-pointer"
          onClick={() => setSortByPrice(!sortByPrice)}
        >
          <p>Price</p>
          <TbArrowsSort />
        </div>
      </div>
      <div>
        <p className="text-md mb-2">Brands</p>
        <div className="bg-accent flex text-sm flex-col gap-y-2 mb-3 px-4 py-2 rounded-lg text-primary">
          {uniqueBrands.map((brand) => (
            <label key={brand} className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <p>{brand}</p>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <p className="text-md mb-2">Storage</p>
        <div
          className="bg-accent text-sm flex items-center px-4 py-2 rounded-lg justify-between text-primary cursor-pointer mt-2"
          onClick={() => setSortByStorage(!sortByStorage)}
        >
          <p>Storage</p>
          <TbArrowsSort />
        </div>
      </div>
      <div className="mb-3">
        <p className="text-md mb-2">Ram</p>
        <div
          className="bg-accent text-sm flex items-center px-4 py-2 rounded-lg justify-between text-primary cursor-pointer mt-2"
          onClick={() => setSortByRam(!sortByRam)}
        >
          <p>Ram</p>
          <TbArrowsSort />
        </div>
      </div>
      <div className="mb-3">
        <p className="text-md text-center bg-accent p-2 text-primary font-semibold rounded-md">Compare</p>
        <div className="border-accent border flex text-sm flex-col gap-y-2 mb-3 px-4 py-2 rounded-b-lg text-primary">
          {comparisons.map((laptop, index) => (
            <div key={index} className="flex justify-between items-center gap-x-2">
              <p className="text-white opacity-70">{laptop.name}</p>
              <button
                onClick={() => {
                  removeComparison(laptop.id)
                }}
                className="text-white"
              >
                <CiCircleMinus size={20} className="text-red-500"/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
