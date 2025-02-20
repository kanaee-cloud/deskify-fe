import React, { useEffect, useState } from "react";
import useLaptops from "../hooks/useLaptops";
import LaptopCard from "../components/LaptopCard";
import SearchLaptops from "../components/SearchLaptops";
import LaptopSkeletonGrid from "../components/LaptopCardSkeleton";
import SidebarFilter from "../components/SidebarFilter";
import Comparison from "../components/Comparison";
import useComparisons from "../hooks/useComparisons";
// import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";

const Laptop = () => {
  const { laptops } = useLaptops();
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [showComparison, setShowComparison] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { comparisons } = useComparisons();

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 21);
  };

  const handleCompare = () => {
    setShowComparison(true);
    setIsModalOpen(false);
  };

  const handleBackToList = () => {
    setShowComparison(false);
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

  if (showComparison) {
    return <Comparison onBack={handleBackToList} comparisons={comparisons} />;
  }

  return (
    <>
      <section className="bg-header bg-no-repeat bg-center h-[30vh] flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <h1 className="md:text-5xl font-semibold mb-5">Laptop Comparison</h1>
          <SearchLaptops setFilteredLaptops={setFilteredLaptops} />
        </div>
      </section>

      {/* Filter Button for Mobile */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed top-24 left-4 z-30 bg-primary p-2 rounded-lg border border-accent"
      >
        <LuSettings2 className="h-6 w-6 text-accent" />
      </button>

      <section className="md:flex items-start p-8 gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden md:block sticky top-20 h-fit w-[20%] max-h-screen pr-4 overflow-auto custom-scrollbar">
          <SidebarFilter
            laptops={laptops}
            setFilteredLaptops={setFilteredLaptops}
            onCompare={handleCompare}
          />
        </div>

        {/* Mobile Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Modal Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 bg-primary z-50 md:hidden rounded-t-xl border-t border-accent"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-accent">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 hover:bg-accent/10 rounded-lg"
                  >
                    <FaTimes className="h-6 w-6 text-accent" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 max-h-[70vh] overflow-auto custom-scrollbar">
                  <SidebarFilter
                    laptops={laptops}
                    setFilteredLaptops={setFilteredLaptops}
                    onCompare={handleCompare}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 top-20">
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
                    brand={laptop.brand}
                    ram={laptop.ram}
                    memory={laptop.memory}
                    display={laptop.display}
                    price={laptop.price}
                    processor={laptop.processor}
                    gpu={laptop.gpu}
                    id={laptop.id}
                    refresh_rate={laptop.refresh_rate}
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
            <div className="text-center mt-8">
              <p>No laptops found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Laptop;