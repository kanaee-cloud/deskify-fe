import React from "react";
import PackageCard from "../components/PackageCard";
import usePackages from "../hooks/usePackages";

const Package = () => {
  const { packages, page, totalPages, isLoading, error, nextPage, prevPage } =
    usePackages(1);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Packages</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p>
          Page {page} of {totalPages}
        </p>
        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Package;
