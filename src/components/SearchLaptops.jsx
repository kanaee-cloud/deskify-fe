import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useLaptops from "../hooks/useLaptops";

const SearchLaptops = ({ setFilteredLaptops }) => {
  const { laptops } = useLaptops();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = laptops.filter(
      (laptop) =>
        laptop.model_name.toLowerCase().includes(value) ||
        laptop.brand.toLowerCase().includes(value)
    );

    setFilteredLaptops(filtered);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search Brands, Name ..."
        className="px-6 outline-none rounded-full text-primary py-2 placeholder:font-normal w-full pr-12"
      />
      <button className="absolute right-2 top-1/2 transform bg-accent p-1 px-2 rounded-full -translate-y-1/2">
        <IoIosSearch className="text-black text-xl" />
      </button>
    </div>
  );
};

export default SearchLaptops;
