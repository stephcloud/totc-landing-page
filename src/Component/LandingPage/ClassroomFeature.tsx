import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const ClassroomFeature = () => {
  return (
    <div className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            <span className="relative inline-block">
              <span className="absolute -left-2 top-1 size-8 bg-[#1BC5A5]/20 rounded-full"></span>
              <span className="relative text-[#252641]">Everything</span>
            </span>{" "}
            <span className="text-[#252641]">
              you can do in a physical classroom,
            </span>{" "}
            <span className="text-[#1BC5A5]">you can do with TOTC</span>
          </h2>

          <p className="text-gray-500 mt-6">
            TOTC's school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>

          
            <a href="#"
            className="inline-block mt-6 text-[#252641] underline font-medium">
            Learn more
          </a>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#22B4E6] rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#1BC5A5] rounded-br-2xl"></div>

          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/classroom.png"
              alt="Classroom"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full size-16 flex items-center justify-center shadow-lg">
                <FaPlay className="text-[#22B4E6] text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomFeature;