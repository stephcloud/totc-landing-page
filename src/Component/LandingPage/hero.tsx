import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiOutlineChartBar, HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="bg-[#49BBBD] w-full
    pt-8 pb-24
    md:pt-10 md:pb-28
    rounded-[0_0_50%_50%/0_0_10%_10%]
    md:rounded-[0_0_50%_50%/0_0_8%_8%]"
      >
        <div
          className="w-full max-w-[1425px] mx-auto
                     grid grid-cols-1 md:grid-cols-2
                     gap-8 items-center
                     px-8 md:px-12 lg:px-16"
        >
          {/* LEFT SIDE */}
          <div className="text-white flex flex-col justify-center gap-6">
            <p className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-[600px]">
              <span className="text-[#F48C06]">Studying</span> Online is now
              much easier
            </p>

            <p className="text-lg md:text-xl leading-relaxed max-w-[600px]">
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button className="btn-ghost-totc">Join for free</button>

              <div className="flex items-center gap-5">
                <div className="bg-white rounded-full size-12 flex items-center justify-center">
                  <FaPlay className="text-[#49BBBD] text-sm" />
                </div>

                <button className="text-white">Watch how it works</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center min-h-[30rem]">
            <Image
              src="/images/hero-lady.png"
              alt="Student"
              width={420}
              height={480}
              priority
              className="relative z-10 object-contain"
            />

            {/* Assisted Student */}
            <div className="absolute top-10 left-0 md:left-4 z-20 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded-lg p-2">
                <HiOutlineChartBar />
              </div>

              <div>
                <p className="font-bold text-sm text-[#252641]">250k</p>

                <p className="text-xs text-gray-500">Assisted Student</p>
              </div>
            </div>

            {/* Congratulations */}
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

            {/* Pink Chart */}
            <div className="absolute top-0 right-20 md:right-28 z-20 bg-[#F94892] rounded-2xl shadow-lg p-3">
              <HiOutlineChartBar className="text-white text-xl" />
            </div>

            {/* User Experience Class */}
            <div className="absolute bottom-16 left-0 md:left-4 z-20 bg-white rounded-xl shadow-lg p-3 w-52">
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
