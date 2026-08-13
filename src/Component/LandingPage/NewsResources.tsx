import React from "react";
import Image from "next/image";

const NewsResources = () => {
  const smallNews = [
    {
      image: "/images/news-girl-writing.png",
      badge: "PRESS RELEASE",
      badgeColor: "bg-[#22B4E6]",
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      desc: "Class Technologies Inc., the company that created Class,...",
    },
    {
      image: "/images/news-headphones.png",
      badge: "NEWS",
      badgeColor: "bg-[#1BC5A5]",
      title:
        "Zoom's earliest investors are betting millions on a better Zoom for schools",
      desc: "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
      image: "/images/news-catcall.png",
      badge: "NEWS",
      badgeColor: "bg-[#1BC5A5]",
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      desc: "This year, investors have reaped big financial returns from betting on Zoom...",
    },
  ];

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#252641]">
          Lastest News and Resources
        </h2>
        <p className="text-gray-500 mt-2">
          See the developments that have occurred to TOTC in the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/news-video-call.png"
              alt="Featured news"
              width={640}
              height={340}
              className="w-full h-auto object-cover"
            />
          </div>

          <span className="inline-block bg-[#1BC5A5] text-white text-xs font-semibold px-3 py-1 rounded-full mt-4">
            NEWS
          </span>

          <h3 className="font-semibold text-[#252641] text-lg mt-3">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>

          <a
            href="#"
            className="text-[#252641] underline text-sm font-medium mt-3 inline-block"
          >
            Read more
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {smallNews.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative rounded-xl overflow-hidden shrink-0 w-28 h-24">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={112}
                  height={96}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`${item.badgeColor} absolute bottom-1 left-1 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full`}
                >
                  {item.badge}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-[#252641] text-sm">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsResources;
