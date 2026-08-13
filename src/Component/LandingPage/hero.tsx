import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#49BBBD]
                   w-full min-h-[30rem] md:min-h-[45rem]
                   px-6 md:px-0
                   rounded-b-[50%] scale-x-125 pb-20"
      >
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-8 scale-x-[0.8] mx-auto w-full max-w-6xl">
          <div className="text-white px-2 md:px-16 flex flex-col justify-center gap-6">
            <p className="font-bold text-2xl md:text-4xl">
              <span className="text-[#F48C06]">Studying</span> Online is now
              much easier
            </p>

            <small className="text-lg md:text-xl">
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </small>

            <div className="flex items-center gap-4">
              <button className="btn-ghost-totc">Join for free</button>
              <div className="flex items-center gap-6">
                <div className="bg-white rounded-full size-12 flex items-center justify-center">
                  <FaPlay className="text-[#49BBBD]" />
                </div>
                <button className="text-white">Watch how it works</button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center min-h-[24rem]">
            <Image
              src="/images/hero-lady.png"
              alt="Student"
              width={420}
              height={480}
              className="relative z-10 object-contain"
            />

            <div className="absolute top-10 left-0 md:left-4 z-20 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded-lg p-2">
                <HiOutlineChartBar />
              </div>
              <div>
                <p className="font-bold text-sm text-[#252641]">250k</p>
                <p className="text-xs text-gray-500">Assisted Student</p>
              </div>
            </div>

            <div className="absolute top-1/3 right-0 z-20 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="bg-[#F48C06] text-white rounded-lg p-2">
                <HiOutlineMail />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#252641]">
                  Congratulations
                </p>
                <p className="text-xs text-gray-500">
                  Your admission completed
                </p>
              </div>
            </div>

            <div className="absolute top-0 right-24 md:right-32 z-20 bg-[#F94892] rounded-2xl shadow-lg p-3">
              <HiOutlineChartBar className="text-white text-xl" />
            </div>

            <div className="absolute bottom-8 left-0 md:left-4 z-20 bg-white rounded-xl shadow-lg p-3 w-52">
              <p className="font-semibold text-sm text-[#252641]">
                User Experience Class
              </p>
              <p className="text-xs text-gray-500 mb-2">Today at 12.00 PM</p>
              <button className="btn btn-xs bg-[#F48C06] border-none text-white rounded-full">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
