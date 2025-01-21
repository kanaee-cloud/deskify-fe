import React from "react";

const PackageCard = ({ tier, description, priceRange, components }) => {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-accent">{tier}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-sm font-medium mt-4">Price Range:</p>
      <p className="text-green-600">{priceRange}</p>
      {components?.laptop && (
        <div className="mt-4">
          <h3 className="text-sm font-medium">Laptop:</h3>
          <p className="text-sm">
            {components.laptop.model_name} ({components.laptop.year})
          </p>
          <img
            src={components.laptop.image_url.front}
            alt={components.laptop.model_name}
            className="w-full mt-2 rounded-md"
          />
        </div>
      )}
      {/* Add more components like mouse, keyboard, etc., as needed */}
    </div>
  );
};
export default PackageCard;
