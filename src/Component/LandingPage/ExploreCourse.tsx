import React from "react";
import Image from "next/image";
import { HiArrowRight, HiStar } from "react-icons/hi";

const ExploreCourse = () => {
  const tags = [
    { label: "Ut Sed Eros", color: "#FF6F00" },
    { label: "Curabitur Egestas", color: "#F17C67" },
    { label: "Quisque Consequat", color: "#6B3E26" },
    { label: "Cras Convallis", color: "#F4A100" },
    { label: "Vestibulum fauci...", color: "#A85FE0" },
    { label: "Ut Sed Eros", color: "#22B4E6" },
    { label: "Vestibulum faucibu", color: "#3E7C6B" },
  ];

  return (
    <div className="bg-[#EAF6F8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#252641]">
          Explore Course
        </h2>
        <p className="text-gray-500 mt-2">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>

        {/* Row 1: Lorem Ipsum */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#252641]">Lorem Ipsum</h3>
            <a
              href="#"
              className="text-[#22B4E6] text-sm font-medium flex items-center gap-1"
            >
              SEE ALL <HiArrowRight />
            </a>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="shrink-0 w-16 h-72 rounded-full flex items-center justify-center rotate-6"
                style={{ backgroundColor: tag.color }}
              >
                <span
                  className="text-white text-xs font-semibold whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {tag.label}
                </span>
              </div>
            ))}

            <div className="shrink-0 w-72 bg-white rounded-2xl shadow-md p-4 flex gap-3">
              <Image
                src="/images/course-food.png"
                alt="Course"
                width={100}
                height={100}
                className="w-24 h-24 rounded-xl object-cover shrink-0"
              />
              <div>
                <h4 className="font-semibold text-[#252641] text-sm">
                  Integer id Orc Sed Ante Tincidunt
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  Cras convallis lacus orci, tristique tincidunt magna fringilla
                  at faucibus vel.
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                  <span className="text-xs font-semibold text-[#252641] ml-2">
                    $ 450
                  </span>
                </div>
                <button className="btn btn-xs btn-outline rounded-full mt-2 w-full">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Quisque a Consequat */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#252641]">
              Quisque a Consequat
            </h3>
            <a
              href="#"
              className="text-[#22B4E6] text-sm font-medium flex items-center gap-1"
            >
              SEE ALL <HiArrowRight />
            </a>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <div
                key={index}
                className="shrink-0 w-16 h-72 rounded-full flex items-center justify-center rotate-6"
                style={{ backgroundColor: tag.color }}
              >
                <span
                  className="text-white text-xs font-semibold whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {tag.label}
                </span>
              </div>
            ))}

            <div className="shrink-0 w-72 bg-white rounded-2xl shadow-md p-4 flex gap-3">
              <Image
                src="/images/course-moon.png"
                alt="Course"
                width={100}
                height={100}
                className="w-24 h-24 rounded-xl object-cover shrink-0"
              />
              <div>
                <h4 className="font-semibold text-[#252641] text-sm">
                  Integer id Orc Sed Ante Tincidunt
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  Cras convallis lacus orci, tristique tincidunt magna fringilla
                  at faucibus vel.
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                  <span className="text-xs font-semibold text-[#252641] ml-2">
                    $ 450
                  </span>
                </div>
                <button className="btn btn-xs btn-outline rounded-full mt-2 w-full">
                  EXPLORE
                </button>
              </div>
            </div>

            {tags.slice(4).map((tag, index) => (
              <div
                key={index}
                className="shrink-0 w-16 h-72 rounded-full flex items-center justify-center rotate-6"
                style={{ backgroundColor: tag.color }}
              >
                <span
                  className="text-white text-xs font-semibold whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Aenean Facilisis */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#252641]">Aenean Facilisis</h3>
            <a
              href="#"
              className="text-[#22B4E6] text-sm font-medium flex items-center gap-1"
            >
              SEE ALL <HiArrowRight />
            </a>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4">
            {tags.slice(0, 1).map((tag, index) => (
              <div
                key={index}
                className="shrink-0 w-16 h-72 rounded-full flex items-center justify-center rotate-6"
                style={{ backgroundColor: tag.color }}
              >
                <span
                  className="text-white text-xs font-semibold whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {tag.label}
                </span>
              </div>
            ))}

            <div className="shrink-0 w-72 bg-white rounded-2xl shadow-md p-4 flex gap-3">
              <Image
                src="/images/course-camera.png"
                alt="Course"
                width={100}
                height={100}
                className="w-24 h-24 rounded-xl object-cover shrink-0"
              />
              <div>
                <h4 className="font-semibold text-[#252641] text-sm">
                  Integer id Orc Sed Ante Tincidunt
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  Cras convallis lacus orci, tristique tincidunt magna fringilla
                  at faucibus vel.
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                  <span className="text-xs font-semibold text-[#252641] ml-2">
                    $ 450
                  </span>
                </div>
                <button className="btn btn-xs btn-outline rounded-full mt-2 w-full">
                  EXPLORE
                </button>
              </div>
            </div>

            {tags.slice(1).map((tag, index) => (
              <div
                key={index}
                className="shrink-0 w-16 h-72 rounded-full flex items-center justify-center rotate-6"
                style={{ backgroundColor: tag.color }}
              >
                <span
                  className="text-white text-xs font-semibold whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourse;
