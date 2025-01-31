import React, { useEffect, useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import useLaptops from "../hooks/useLaptops";
import LaptopCard from "../components/LaptopCard";
import SearchLaptops from "../components/SearchLaptops";
import LaptopSkeletonGrid from "../components/LaptopCardSkeleton";

const Laptop = () => {
  const { laptops } = useLaptops();
  const [filteredLaptops, setFilteredLaptops] = useState(laptops);
  const [isLoading, setIsLoading] = useState(true);
  const [initialCount, setInitialCount] = useState(laptops.length);

  useEffect(() => {
    if (laptops.length > 0) {
      setFilteredLaptops(laptops);
      setInitialCount(laptops.length); // Set actual count from API
      setIsLoading(false);
    }
  }, [laptops]);

  console.log(laptops);

  return (
    <>
      <section className="bg-header bg-no-repeat bg-center h-[70vh]  flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <h1 className="md:text-5xl font-semibold mb-5">Laptop Comparison</h1>
          {/* <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Brands, Name ..."
              className="px-6 outline-none rounded-full text-primary py-2 placeholder:font-normal w-full pr-12"
            />
            <button className="absolute right-2 top-1/2 transform bg-accent p-1 px-2 rounded-full -translate-y-1/2">
              <IoIosSearch className="text-black text-xl" />
            </button>
          </div> */}

          <SearchLaptops setFilteredLaptops={setFilteredLaptops} />
        </div>
      </section>
      <section className="md:flex px-8 py-4 gap-6">
        <div className="md:w-1/4">
          <div className="mb-3">
            <p className="text-md mb-2">Sort By</p>
            <div className="bg-accent  text-sm flex items-center px-4 py-2 rounded-lg justify-between text-primary">
              <p>Price</p>
              <TbArrowsSort />
            </div>
          </div>
          <div>
            <p className="text-md mb-2">Brands</p>
            <div className="bg-accent flex text-sm flex-col gap-y-2 mb-3 px-4 py-2 rounded-lg  text-primary">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>Dell</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>Lenovo</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>Asus</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>Acer</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>Axioo</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>HP</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-md mb-2">Ram</p>
            <div className="bg-accent flex mb-3 flex-col gap-y-2 text-sm px-4 py-2 rounded-lg  text-primary">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>8GB</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>16GB</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>32GB</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-md mb-2">Storage</p>
            <div className="bg-accent flex flex-col gap-y-2 px-4 py-2 rounded-lg text-sm  text-primary">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>256GB</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>512GB</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>1TB</p>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="bg-accent" />
                <p>2TB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {isLoading ? (
            <LaptopSkeletonGrid />
          ) : filteredLaptops.length > 0 ? (
            <div className="grid justify-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredLaptops.map((laptop) => (
                <LaptopCard
                  key={laptop.id}
                  name={laptop.model_name}
                  image={laptop.image_url}
                  ram={laptop.ram}
                  memory={laptop.memory}
                  display={laptop.display}
                  id={laptop.id}
                />
              ))}
            </div>
          ) : (
            <div className="h-full flex justify-center items-center">
              tidak ada yang tersedia
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Laptop;
