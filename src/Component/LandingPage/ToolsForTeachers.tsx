import React from "react";
import Image from "next/image";
import { HiViewGrid, HiChat } from "react-icons/hi";

const ToolsForTeachers = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            <span className="text-[#1BC5A5]">Tools</span>{" "}
            <span className="text-[#252641]">For Teachers</span>
            <br />
            <span className="text-[#252641]">And Learners</span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-md">
            Class has a dynamic set of teaching tools built to be deployed
            and used during class. Teachers can handout assignments in
            real-time for students to complete and submit.
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[24rem]">
          <div className="absolute w-64 h-64 bg-[#F94892]/70 rounded-full -z-10"></div>

          <span className="absolute top-10 right-16 size-3 bg-[#1BC5A5] rounded-full"></span>
          <span className="absolute bottom-16 right-4 size-3 bg-[#6C63FF] rounded-full"></span>
          <span className="absolute bottom-10 left-4 size-3 bg-[#F48C06] rounded-full"></span>

          <Image
            src="/images/student-lady.png"
            alt="Student"
            width={350}
            height={420}
            className="relative z-10 h-80 md:h-96 w-auto object-contain"
          />

          <div className="absolute top-16 left-0 md:left-4 z-20 bg-white rounded-xl shadow-lg p-3">
            <HiViewGrid className="text-[#6C63FF] text-2xl" />
          </div>

          <div className="absolute bottom-24 right-0 md:right-4 z-20 bg-white rounded-xl shadow-lg p-3">
            <HiChat className="text-[#22B4E6] text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsForTeachers;