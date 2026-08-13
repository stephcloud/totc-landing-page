import React from "react";
import Image from "next/image";
import { HiViewGrid, HiCollection, HiUsers } from "react-icons/hi";

const OurFeatures = () => {
  const points = [
    {
      icon: <HiViewGrid />,
      bg: "bg-[#6C63FF]",
      text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    },
    {
      icon: <HiCollection />,
      bg: "bg-[#F48C06]",
      text: "TA's and presenters can be moved to the front of the class.",
    },
    {
      icon: <HiUsers />,
      bg: "bg-[#22B4E6]",
      text: "Teachers can easily see all students and class data at one time.",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#252641]">
          Our <span className="text-[#1BC5A5]">Features</span>
        </h2>
        <p className="text-gray-500 mt-4">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
        <div className="relative flex justify-center">
          <div
            className="absolute rounded-full -z-10"
            style={{
              width: "15.6%",
              height: "12.5%",
              top: "-6.8%",
              left: "7%",
              backgroundColor: "#33EFA0",
            }}
          ></div>

          <div
            className="absolute rounded-full"
            style={{
              width: "3.35%",
              height: "2.7%",
              top: "-6.1%",
              left: "25%",
              backgroundColor: "#33D9EF",
            }}
          ></div>

          <div
            className="absolute rounded-full"
            style={{
              width: "3.35%",
              height: "2.7%",
              top: "46.5%",
              left: "64.5%",
              backgroundColor: "#F56666",
            }}
          ></div>

          <Image
            src="/images/ourfuture.png"
            alt="Video call interface"
            width={896}
            height={1122}
            className="relative z-0 w-full max-w-md h-auto object-contain"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#252641] mb-8">
            A <span className="text-[#1BC5A5]">user interface</span> designed
            for the classroom
          </h3>

          <div className="flex flex-col gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`${point.bg} text-white rounded-full size-10 flex items-center justify-center shrink-0`}
                >
                  {point.icon}
                </div>
                <p className="text-gray-500">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
