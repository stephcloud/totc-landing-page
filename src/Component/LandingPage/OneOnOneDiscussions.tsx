import React from "react";
import Image from "next/image";
import { HiUsers } from "react-icons/hi";

const OneOnOneDiscussions = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center min-h-[22rem]">
          <div className="absolute -top-6 right-10 w-16 h-16 -z-0">
            <Image
              src="/images/Ellipse-blue.png"
              alt=""
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4 w-96">
            <div className="flex gap-2 mb-3">
              <span className="size-3 rounded-full bg-red-400"></span>
              <span className="size-3 rounded-full bg-yellow-400"></span>
              <span className="size-3 rounded-full bg-green-400"></span>
            </div>

            <div className="absolute -top-4 -left-4 bg-white rounded-full shadow-md p-2 z-20">
              <div className="bg-[#22B4E6] text-white rounded-full size-9 flex items-center justify-center">
                <HiUsers />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/avatar-1.png"
                  alt="Instructor"
                  width={180}
                  height={140}
                  className="w-full h-32 object-cover"
                />
              </div>

              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/avatar-4.png"
                  alt="Patricia Mendoza"
                  width={180}
                  height={140}
                  className="w-full h-32 object-cover object-top"
                />
                <span className="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">
                  Patricia Mendoza
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="font-semibold text-[#252641] text-sm">
                  Private Discussion
                </p>
                <p className="text-gray-400 text-xs">
                  Your video can't be seen by others
                </p>
              </div>
              <button className="btn btn-sm bg-[#F94892] border-none text-white rounded-full">
                End Discussion
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            <span className="text-[#252641]">One-on-One</span>
            <br />
            <span className="text-[#1BC5A5]">Discussions</span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-md">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button className="btn btn-outline rounded-full px-8 border-[#49BBBD] text-[#49BBBD] hover:bg-[#49BBBD] hover:text-white">
          See more features
        </button>
      </div>
    </div>
  );
};

export default OneOnOneDiscussions;
