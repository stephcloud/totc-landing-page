import React from "react";
import { HiDocumentText, HiCalendar, HiUsers } from "react-icons/hi";

const Features = () => { 
  const features = [
    {
      icon: <HiDocumentText />,
      bg: "bg-[#6C63FF]",
      title: "Online Billing, Invoicing, & Contracts",
      desc: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
    },
    {
      icon: <HiCalendar />,
      bg: "bg-[#1BC5A5]",
      title: "Easy Scheduling & Attendance Tracking",
      desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      icon: <HiUsers />,
      bg: "bg-[#22B4E6]",
      title: "Customer Tracking",
      desc: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
    },
  ];

  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#252641]">
        All-In-One <span className="text-[#1BC5A5]">Cloud Software.</span>
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mt-4">
        TOTC is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-md p-6 relative pt-10 h-full">
            <div
              className={`${item.bg} text-white rounded-full size-14 flex items-center justify-center text-2xl absolute -top-7 left-1/2 -translate-x-1/2`}
            >
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg text-[#252641] mt-4">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;