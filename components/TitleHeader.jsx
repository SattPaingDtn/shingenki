import React from "react";

const TitleHeader = ({ title }) => {
  return (
    <div className="w-full h-[100px] hero-bg border-b border-b-gray-200">
      <div className="max-w-[1152px] px-4 relative h-full mx-auto flex-start">
        <div className="text-2xl font-medium ml-3 text-primary-green">
          {title}
        </div>
        <div className="absolute w-1 h-8 bg-primary-green rounded-full"></div>
      </div>
    </div>
  );
};

export default TitleHeader;
