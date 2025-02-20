import React, { useState, useEffect, useMemo } from "react";
import { TbArrowsSort } from "react-icons/tb";
import useComparisons from "../hooks/useComparisons";
import { CiCircleMinus } from "react-icons/ci";

const SidebarFilter = ({ laptops, setFilteredLaptops, onCompare }) => {
  const [sortConfig, setSortConfig] = useState({ field: "name", direction: "asc" });
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedRam, setSelectedRam] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { comparisons, removeComparison } = useComparisons();

  const extractRamSize = (ramString) => {
    const match = ramString.match(/(\d+)GB/i);
    return match ? parseInt(match[1]) : 0;
  };

  const { uniqueBrands, uniqueStorage, uniqueRam } = useMemo(() => {
    const brands = [...new Set(laptops.map((laptop) => laptop.brand))];
    const storage = [...new Set(laptops.map((laptop) => laptop.memory))].sort(
      (a, b) => parseInt(a) - parseInt(b)
    );
    const ram = [
      ...new Set(laptops.map((laptop) => extractRamSize(laptop.ram))),
    ].sort((a, b) => a - b);

    return {
      uniqueBrands: brands,
      uniqueStorage: storage,
      uniqueRam: ram,
    };
  }, [laptops]);

  useEffect(() => {
    let filtered = laptops.filter(laptop => {
      const ramSize = extractRamSize(laptop.ram);
      const matchesRam =
        selectedRam.length === 0 || selectedRam.includes(ramSize);
      const matchesStorage =
        selectedStorage.length === 0 || selectedStorage.includes(laptop.memory);
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);
      return matchesRam && matchesStorage && matchesBrand;
    });

    
    filtered = [...filtered].sort((a, b) => {
      const direction = sortConfig.direction === "asc" ? 1 : -1;
      
      if (sortConfig.field === "price") {
        return (a.price - b.price) * direction;
      } else if (sortConfig.field === "name") {
        return a.model_name.localeCompare(b.model_name) * direction;
      }
      return 0;
    });

    setFilteredLaptops(filtered);
  }, [sortConfig, selectedStorage, selectedRam, selectedBrands, laptops, setFilteredLaptops]);

  const handleFilterChange = (setter) => (value) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSort = (field) => {
    setSortConfig(prev => ({
      field,
      direction: prev.field === field ? (prev.direction === "asc" ? "desc" : "asc") : "asc"
    }));
  };

  

  return (
    <div className="md:w-full">
      <div className="dropdown mb-3 ">
        <p className="text-md mb-2">Sort By Price</p>
        <button
          className="bg-accent w-full flex justify-between items-center text-sm text-start px-4 py-2 rounded-lg text-primary cursor-pointer transition-all hover:bg-opacity-80 mb-2 "
          onClick={() => handleSort("price")}
        >
          {sortConfig.field === "price" ? (sortConfig.direction === "asc" ? "Lowest" : "Highest") : "Unsorted"}
          <TbArrowsSort className={`transition-transform ${sortConfig.field === "price" && sortConfig.direction === "desc" ? "rotate-180" : ""}`}/>
        </button>
        
        <p className="text-md mb-2">Sort By Name</p>
        <button
          className="bg-accent w-full flex justify-between items-center text-sm text-start px-4 py-2 rounded-lg text-primary cursor-pointer transition-all hover:bg-opacity-80 "
          onClick={() => handleSort("name")}
        >
          {sortConfig.field === "name" ? (sortConfig.direction === "asc" ? "A to Z" : "Z to A") : "Unsorted"}
          <TbArrowsSort className={`transition-transform ${sortConfig.field === "name" && sortConfig.direction === "desc" ? "rotate-180" : ""}`}/>
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
        formatLabel={(ram) => `${ram} GB`}
      />

      <div className="mt-6">
        <button onClick={onCompare} className="w-full text-md text-center bg-accent p-2 text-primary font-semibold rounded-t-lg">
          Compare
        </button>
        <div className="border-accent border flex text-sm flex-col gap-y-2 px-4 py-2 rounded-b-lg text-primary">
          {comparisons.length === 0 ? (
            <p className="text-white text-center opacity-70">
              No comparisons added yet
            </p>
          ) : (
            comparisons.map((laptop, index) => (
              <div key={index} className="flex justify-between items-center gap-x-2 ">
                <p className="text-white opacity-70">{laptop.name}</p>
                <button
                  onClick={() => removeComparison(laptop.id)}
                  className="text-white transition-transform "
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

const FilterSection = ({
  title,
  items,
  selectedItems,
  onChange,
  formatLabel = (item) => item,
}) => (
  <div className="mb-3">
    <p className="text-md mb-2">{title}</p>
    <div className="bg-accent text-sm flex flex-col gap-y-3 p-4 rounded-lg text-primary">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => onChange(item)}
            className="cursor-pointer"
          />
          <p>{formatLabel(item)}</p>
        </label>
      ))}
    </div>
  </div>
);

export default SidebarFilter;