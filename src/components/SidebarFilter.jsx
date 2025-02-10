import React, { useState, useEffect, useMemo } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import useComparisons from "../hooks/useComparisons";

const SidebarFilter = ({ laptops, setFilteredLaptops }) => {
  const [sortOption, setSortOption] = useState("name");
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedRam, setSelectedRam] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { comparisons, removeComparison } = useComparisons();

  // Extract RAM size from RAM string (e.g., "16GB DDR4" -> 16)
  const extractRamSize = (ramString) => {
    const match = ramString.match(/(\d+)GB/i);
    return match ? parseInt(match[1]) : 0;
  };

  // Memoized unique values
  const { uniqueBrands, uniqueStorage, uniqueRam } = useMemo(() => {
    const brands = [...new Set(laptops.map((laptop) => laptop.brand))];
    const storage = [...new Set(laptops.map((laptop) => laptop.memory))].sort((a, b) => 
      parseInt(a) - parseInt(b)
    );
    const ram = [...new Set(laptops.map((laptop) => extractRamSize(laptop.ram)))].sort((a, b) => a - b);

    return {
      uniqueBrands: brands,
      uniqueStorage: storage,
      uniqueRam: ram
    };
  }, [laptops]);

  // Combined filter and sort effect
  useEffect(() => {
    const filtered = laptops.filter(laptop => {
      const ramSize = extractRamSize(laptop.ram);
      
      const matchesRam = selectedRam.length === 0 || selectedRam.includes(ramSize);
      const matchesStorage = selectedStorage.length === 0 || selectedStorage.includes(laptop.memory);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);

      return matchesRam && matchesStorage && matchesBrand;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortOption === "price") {
        return a.price - b.price;
      }
      return a.model_name.localeCompare(b.model_name);
    });

    setFilteredLaptops(sorted);
  }, [sortOption, selectedStorage, selectedRam, selectedBrands, laptops, setFilteredLaptops]);

  const handleFilterChange = (setter) => (value) => {
    setter((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]);
  };

  return (
    <div className="md:w-1/4">
      <div className="dropdown mb-3">
        <p className="text-md mb-2">Sort By</p>
        <button
            className="bg-accent w-full flex justify-between items-center text-sm text-start px-4 py-2 rounded-lg text-primary cursor-pointer "
          onClick={() => setSortOption(prevOption => prevOption === "name" ? "price" : "name")}
        >
          {sortOption === "price" ? "Price" : "Name"}
          <TbArrowsSort/>
        </button>
      </div>

      <FilterSection
        title="Brands"
        items={uniqueBrands}
        selectedItems={selectedBrands}
        onChange={handleFilterChange(setSelectedBrands)}
        formatLabel={(brand) => brand.charAt(0).toUpperCase() + brand.slice(1)}
      />

      <FilterSection
        title="Storage"
        items={uniqueStorage}
        selectedItems={selectedStorage}
        onChange={handleFilterChange(setSelectedStorage)}
      />

      <FilterSection
        title="Ram"
        items={uniqueRam}
        selectedItems={selectedRam}
        onChange={handleFilterChange(setSelectedRam)}
        formatLabel={(ram) => `${ram}GB`}
      />

      <div className="mb-3">
        <p className="text-md text-center bg-accent p-2 text-primary font-semibold rounded-t-lg">
          Compare
        </p>
        <div className="border-accent border flex text-sm flex-col gap-y-2 mb-3 px-4 py-2 rounded-b-lg text-primary">
          {comparisons.length === 0 ? (
            <p className="text-white text-center opacity-70">No comparisons added yet</p>
          ) : (
            comparisons.map((laptop, index) => (
              <div key={index} className="flex justify-between items-center gap-x-2">
                <p className="text-white opacity-70">{laptop.name}</p>
                <button
                  onClick={() => removeComparison(laptop.id)}
                  className="text-white"
                >
                  <CiCircleMinus size={20} className="text-red-500" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable FilterSection component
const FilterSection = ({ title, items, selectedItems, onChange, formatLabel = (item) => item }) => (
  <div className="mb-3">
    <p className="text-md mb-2">{title}</p>
    <div className="bg-accent text-sm flex flex-col gap-y-3 p-4 rounded-lg text-primary">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => onChange(item)}
          />
          <p>{formatLabel(item)}</p>
        </label>
      ))}
    </div>
  </div>
);

export default SidebarFilter;