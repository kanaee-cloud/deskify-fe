import React, { useEffect, useState } from "react";
import useLaptops from "../hooks/useLaptops";
import LaptopCard from "../components/LaptopCard";
import SearchLaptops from "../components/SearchLaptops";
import LaptopSkeletonGrid from "../components/LaptopCardSkeleton";
import SidebarFilter from "../components/SidebarFilter";
import Comparison from "../components/Comparison";
import useComparisons from "../hooks/useComparisons";

const Laptop = () => {
  const { laptops } = useLaptops();
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const { comparisons } = useComparisons();

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 21);
  };

  useEffect(() => {
    if (laptops.length > 0) {
      const sortedLaptops = [...laptops].sort((a, b) =>
        a.model_name.localeCompare(b.model_name)
      );
      setFilteredLaptops(sortedLaptops);
      setIsLoading(false);
    }
  }, [laptops]);

  return (
    <>
      {!isComparisonOpen ? (
        <>
          <section className="bg-header bg-no-repeat bg-center h-[30vh] mt-24 flex items-center justify-center">
            <div className="text-center flex flex-col items-center">
              <h1 className="md:text-5xl font-semibold mb-5">Laptop Comparison</h1>
              <SearchLaptops setFilteredLaptops={setFilteredLaptops} />
            </div>
          </section>
          <section className="md:flex px-8 py-4 gap-6">
            <SidebarFilter
              laptops={laptops}
              setFilteredLaptops={setFilteredLaptops}
              onCompare={() => setIsComparisonOpen(true)}
            />
            <div className="flex-1">
              {isLoading ? (
                <LaptopSkeletonGrid />
              ) : filteredLaptops.length > 0 ? (
                <>
                  <div className="grid justify-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredLaptops.slice(0, visibleCount).map((laptop) => (
                      <LaptopCard
                        key={laptop.id}
                        name={laptop.model_name}
                        image={laptop.image_url}
                        ram={laptop.ram}
                        memory={laptop.memory}
                        display={laptop.display}
                        price={laptop.price}
                        processor={laptop.processor}
                        gpu={laptop.gpu}
                        id={laptop.id}
                      />
                    ))}
                  </div>
                  {visibleCount < filteredLaptops.length && (
                    <div className="flex justify-center mt-6">
                      <button
                        className="px-4 py-2 bg-accent w-full rounded-lg text-primary"
                        onClick={handleShowMore}
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="h-full flex justify-center items-center">
                  Tidak ada yang tersedia
                </div>
              )}
            </div>
          </section>
        </>
      ) : (
        <div className="mt-24">
          <Comparison onClose={() => setIsComparisonOpen(false)} comparisons={comparisons} />
        </div>
      )}
    </>
  );
};

export default Laptop;