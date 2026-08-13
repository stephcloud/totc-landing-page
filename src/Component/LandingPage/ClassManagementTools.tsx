import React from "react";
import Image from "next/image";

const ClassManagementTools = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            <span className="text-[#1BC5A5]">Class Management</span>
            <br />
            <span className="text-[#252641]">Tools for Educators</span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-md">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
          <div className="flex justify-center mt-12">
            <button className="btn btn-outline rounded-full px-8 border-[#49BBBD] text-[#49BBBD] hover:bg-[#49BBBD] hover:text-white">
              See more features
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/classmanage.png"
            alt="GradeBook"
            width={808}
            height={560}
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassManagementTools;
