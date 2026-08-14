import React from "react";

const OurSuccess = () => {
  return (
    <div className="text-center py-4 md:py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#252641]">
        Our Success
      </h2>

      <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-3 leading-relaxed">
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
        ultrices eu ornare tristique vel nisl orci.
      </p>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 md:gap-y-0 mt-4 md:mt-8 max-w-5xl mx-auto">
        {/* Students */}
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-[#49BBBD]">
            15K+
          </div>
          <div className="text-xs md:text-sm text-gray-500">
            Students
          </div>
        </div>

        {/* Total success */}
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-[#49BBBD]">
            75%
          </div>
          <div className="text-xs md:text-sm text-gray-500">
            Total success
          </div>
        </div>

        {/* Main questions */}
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-[#49BBBD]">
            35
          </div>
          <div className="text-xs md:text-sm text-gray-500">
            Main questions
          </div>
        </div>

        {/* Chief experts */}
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-[#49BBBD]">
            26
          </div>
          <div className="text-xs md:text-sm text-gray-500">
            Chief experts
          </div>
        </div>

        {/* Years of experience */}
        <div className="flex flex-col items-center col-span-2 md:col-span-1">
          <div className="text-2xl md:text-3xl font-bold text-[#49BBBD]">
            16
          </div>
          <div className="text-xs md:text-sm text-gray-500">
            Years of experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;