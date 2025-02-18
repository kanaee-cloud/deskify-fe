import React from "react";

const LaptopCardSkeleton = () => {
  return (
    <div className="border border-gray-300 border-opacity-60 rounded-md">
      <div className="flex items-center gap-x-6 w-full px-4 py-4">
        <div className="animate-pulse">
          <div className="w-32 h-[15vh] bg-gray-200 rounded-lg" />
        </div>
        <div className="flex flex-col gap-y-2 flex-1">
          {/* Title skeleton */}
          <div className="animate-pulse h-4 bg-gray-200 rounded w-full" />
          
          {/* Specs skeleton */}
          <div className="flex w-full gap-x-4 mt-2">
            {/* RAM */}
            <div className="flex items-center gap-x-1">
              <div className="animate-pulse w-4 h-4 bg-gray-200 rounded" />
              <div className="animate-pulse w-4 h-4 bg-gray-200 rounded" />
            </div>
            
            {/* Display */}
            <div className="flex items-center gap-x-1">
              <div className="animate-pulse w-4 h-4 bg-gray-200 rounded" />
              <div className="animate-pulse w-4 h-4 bg-gray-200 rounded" />
            </div>
            
            {/* Storage */}
            <div className="flex items-center gap-x-1">
              <div className="animate-pulse w-4 h-4 bg-gray-200 rounded" />
              <div className="animate-pulse w-4 h-4 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
      {/* Button skeleton */}
      <div className="animate-pulse bg-gray-200 h-7 rounded-b-md" />
    </div>
  );
};

// Grid of skeleton cards that matches API data length
const LaptopSkeletonGrid = ({ count = 12 }) => {
  return (
    <div className="grid justify-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array(count).fill(0).map((_, index) => (
        <LaptopCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default LaptopSkeletonGrid;