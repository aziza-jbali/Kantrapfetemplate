import React, { useState } from "react";

function SearchSection() {
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleSearch = () => {
    console.log("Searching cars:", { pickupDate, dropDate });
  };

  return (
    <section className="bg-white py-8 px-6 shadow-lg rounded-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Find Your Car
      </h2>

      {/* Flex Row */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Pickup Date */}
        <div className="w-full md:w-1/3">
          <label className="block text-gray-700 font-medium mb-2">
            Pickup Date
          </label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-gray-700"
          />
        </div>

        {/* Drop Date */}
        <div className="w-full md:w-1/3">
          <label className="block text-gray-700 font-medium mb-2">
            Drop Date
          </label>
          <input
            type="date"
            value={dropDate}
            onChange={(e) => setDropDate(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-gray-700"
          />
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto flex items-end">
          <button
            onClick={handleSearch}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 w-full md:w-auto"
          >
            🔍 Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
