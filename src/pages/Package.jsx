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
      <section className="bg-header bg-no-repeat bg-center h-[30vh] flex items-center justify-center">
        <div className="text-center ">
          <h1 className="md:text-5xl font-semibold mb-5">Setup Pre-Build</h1>
          <p className="text-2xl opacity-70">
            Choose a Pre-Built Design Tailored to Your Needs!
          </p>
        </div>
      </section>
      <div className="p-4 h-fit my-5">
        <div className="relative max-w-[90rem] mx-auto px-12">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="absolute left-0 top-1/2 -translate-y-1/2  text-primary bg-white p-2 rounded-full disabled:opacity-50 z-10"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="absolute right-0 top-1/2 -translate-y-1/2  text-primary bg-white p-2 rounded-full disabled:opacity-50 z-10"
          >
            <FaArrowRight  />
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
