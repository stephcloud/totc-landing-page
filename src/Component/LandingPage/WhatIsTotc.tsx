import React from "react";

const WhatIsTotc = () => {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="text-[#252641]">What is</span>{" "}
        <span className="text-[#1BC5A5]">TOTC?</span>
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mt-4">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage
        assignments, quizzes and exams; monitor due dates; grade results and
        provide students with feedback all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden h-80 bg-cover bg-center flex flex-col items-center justify-center gap-4"
          style={{ backgroundImage: "url('/Images/instructor.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <h3 className="relative text-white text-xl font-bold tracking-wide">
            FOR INSTRUCTORS
          </h3>
          <button className="relative btn btn-outline text-white border-white rounded-full hover:bg-white hover:text-[#252641]">
            Start a class today
          </button>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden h-80 bg-cover bg-center flex flex-col items-center justify-center gap-4"
          style={{ backgroundImage: "url('/Images/students.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <h3 className="relative text-white text-xl font-bold tracking-wide">
            FOR STUDENTS
          </h3>
          <button className="relative btn bg-[#22B4E6] border-none text-white rounded-full hover:bg-[#1a9bc9]">
            Enter access code
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatIsTotc;