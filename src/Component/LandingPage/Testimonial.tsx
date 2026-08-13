import React from "react";
import Image from "next/image";
import { HiArrowRight, HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1BC5A5]"></span>
            <span className="text-[#1BC5A5] text-sm font-semibold tracking-wide">
              TESTIMONIAL
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#252641]">
            What They Say?
          </h2>

          <p className="text-gray-500 mt-6">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p className="text-gray-500 mt-4">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="text-gray-500 mt-4">
            Are you too? Please give your assessment
          </p>

          <button className="btn btn-outline rounded-full mt-6 gap-2 border-[#1BC5A5] text-[#1BC5A5] hover:bg-[#1BC5A5] hover:text-white">
            Write your assessment <HiArrowRight />
          </button>
        </div>

        <div className="relative flex justify-center">
          <Image
            src="/images/testimonial-photo.png"
            alt="Gloria Rose"
            width={560}
            height={700}
            className="w-full max-w-sm h-auto object-cover rounded-2xl"
          />

          <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-white rounded-full shadow-md size-10 flex items-center justify-center">
            <HiArrowRight className="text-[#252641]" />
          </button>

          <div className="absolute -bottom-6 left-1 w-3 h-40 bg-[#F67766] rounded-l-2xl"></div>

          <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-2xl shadow-xl p-5">
            <p className="text-gray-600 text-sm italic">
              ... "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>

            <div className="flex items-center justify-between mt-4">
              <p className="font-semibold text-[#252641] text-sm">
                Gloria Rose
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-xs text-right">
              12 reviews at Yelp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
