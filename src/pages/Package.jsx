//package.jsx
import React, { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";
import usePackages from "../hooks/usePackages";
import PackageSkeletonGrid from "../components/PackageCardSkeleton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Package = () => {
  const { packages, page, totalPages, nextPage, prevPage } =
    usePackages(1);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (packages.length > 0) {
      setIsLoading(false);
    }
  }, [packages]);


  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <section className="relative bg-header bg-no-repeat bg-center h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />
        <div className="text-center z-10 relative">
          <h1 className="md:text-5xl text-3xl font-semibold mb-5 text-white drop-shadow-lg">Setup Pre-Build</h1>
          <p className="md:text-2xl opacity-70 text-gray-200">
            Choose a Pre-Built Design Tailored to Your Needs!
          </p>
        </div>
      </section>
      <div className="p-4 h-fit my-5">
        <div className="relative max-w-[90rem] mx-auto px-12">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:text-primary transition-all duration-300 z-10"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:text-primary transition-all duration-300 z-10"
          >
            <FaArrowRight />
          </button>

          {/* Cards Container */}
          {isLoading ? (
            <PackageSkeletonGrid />
          ) : packages.length > 0 ? (
            <div className="grid justify-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  id={pkg.id}
                  tier={pkg.tier}
                  description={pkg.description}
                  priceRange={pkg.price_range}
                  components={pkg.components}
                />
              ))}
            </div>
          ) : (
            <div className="loader"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Package;
