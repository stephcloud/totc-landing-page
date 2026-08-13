import React from "react";

const OurSuccess = () => {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-3xl font-bold text-[#252641]">Our Success</h2>

      <p className="text-gray-500 max-w-2xl mx-auto mt-4">
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
        ultrices eu ornare tristique vel nisl orci.
      </p>

      <div className="stats stats-vertical md:stats-horizontal shadow mt-10 bg-transparent">
        <div className="stat place-items-center">
          <div className="stat-value text-[#49BBBD]">15K+</div>
          <div className="stat-title">Students</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-[#49BBBD]">75%</div>
          <div className="stat-title">Total success</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-[#49BBBD]">35</div>
          <div className="stat-title">Main questions</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-[#49BBBD]">26</div>
          <div className="stat-title">Chief experts</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-[#49BBBD]">16</div>
          <div className="stat-title">Years of experience</div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;