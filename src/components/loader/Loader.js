// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-300"></div>
    </div>
  );
};

export default Loader;
