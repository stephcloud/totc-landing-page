import React from "react";
import Image from "next/image";
import { HiX, HiCheck, HiPaperAirplane } from "react-icons/hi";

const AssessmentsQuizzes = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center min-h-[28rem]">
          <Image
            src="/images/purple-blob.png"
            alt=""
            width={100}
            height={100}
            className="absolute top-16 -left-4 w-24 h-24 z-0"
          />

          <Image
            src="/images/dot-orange.png"
            alt=""
            width={23}
            height={23}
            className="absolute top-2 left-28 z-0"
          />

          <span className="absolute top-1/2 right-2 size-3 bg-[#F94892] rounded-full z-0"></span>
          <span className="absolute bottom-4 left-8 size-3 bg-[#1BC5A5] rounded-full z-0"></span>

          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 w-80">
            <span className="inline-block bg-[#E8E7FB] text-[#6C63FF] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Question 1
            </span>

            <h3 className="font-semibold text-[#252641] text-lg mb-4">
              True or false? This play takes place in Italy
            </h3>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/venice.png"
                alt="Venice"
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />

              <div className="absolute -top-3 -right-3 flex flex-col gap-2">
                <button className="bg-white text-red-500 rounded-full size-9 flex items-center justify-center shadow-md">
                  <HiX />
                </button>
                <button className="bg-white text-green-500 rounded-full size-9 flex items-center justify-center shadow-md">
                  <HiCheck />
                </button>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-12 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 w-64">
              <div className="bg-[#1BC5A5]/10 text-[#1BC5A5] rounded-full size-10 flex items-center justify-center shrink-0">
                <HiPaperAirplane className="rotate-45" />
              </div>
              <p className="text-sm font-semibold text-[#252641]">
                Your answer was sent successfully
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            <span className="text-[#252641]">Assessments,</span>
            <br />
            <span className="text-[#1BC5A5]">Quizzes</span>
            <span className="text-[#252641]">, Tests</span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-md">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsQuizzes;
