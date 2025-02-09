import React from "react";

const PackageCardSkeleton = () => {
  return (
    <div className="bg-primary border-solid border-gray-700 border rounded-lg p-4 lg:p-6 relative h-full flex flex-col animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-video bg-gray-700 rounded-lg mb-4"></div>

      {/* Title placeholder */}
      <div className="h-6 bg-gray-700 rounded-lg mb-4 w-1/2 mx-auto"></div>

      {/* Components List placeholder */}
      <div className="flex items-start justify-between">
        <div className="space-y-3 mb-20 w-full">
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
            <div className="flex flex-col w-full">
              <div className="h-4 bg-gray-700 rounded-lg w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded-lg w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
            <div className="flex flex-col w-full">
              <div className="h-4 bg-gray-700 rounded-lg w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded-lg w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
            <div className="flex flex-col w-full">
              <div className="h-4 bg-gray-700 rounded-lg w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded-lg w-2/3"></div>
            </div>
          </div>
        </div>
        <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
      </div>

      {/* Bottom Section placeholder */}
      <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 bg-gray-700 rounded-lg w-1/3"></div>
          <div className="h-4 bg-gray-700 rounded-lg w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

const PackageSkeletonGrid = ({ count = 4 }) => {
    return (
      <div className="grid justify-center mx-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array(count).fill(0).map((_, index) => (
          <PackageCardSkeleton key={index} />
        ))}
      </div>
    );
  };

export default PackageSkeletonGrid;
