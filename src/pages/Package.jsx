//package.jsx
import React from "react";
import PackageCard from "../components/PackageCard";
import usePackages from "../hooks/usePackages";

const Package = () => {
  const { packages, page, totalPages, isLoading, error, nextPage, prevPage } =
    usePackages(1);

  return (
    <div className="p-4">
      {isLoading && <p>Loading...</p>}

      <div className="relative max-w-[90rem] mx-auto px-12">
        {/* Navigation Arrows */}
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50 z-10"
        >
          ←
        </button>

        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50 z-10"
        >
          →
        </button>

        {/* Cards Container */}
        <div className="grid justify-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              tier={pkg.tier}
              description={pkg.description}
              priceRange={pkg.price_range}
              components={pkg.components}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
