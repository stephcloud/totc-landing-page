import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#252641] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3">
          <Image src="/images/logo.png" alt="TOTC" width={40} height={40} />
          <p className="text-left text-sm leading-tight">
            Virtual Class
            <br />
            for Zoom
          </p>
        </div>

        <h3 className="font-semibold mt-10">Subscribe to get our Newsletter</h3>

        <div className="flex items-center justify-center gap-2 mt-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered bg-transparent border-white/30 text-white placeholder:text-white/50 flex-1 rounded-full"
          />
          <button className="btn bg-[#1BC5A5] border-none text-white rounded-full">
            Subscribe
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-white/70 mt-10">
          <a href="#" className="hover:text-white">
            Careers
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Terms &amp; Conditions
          </a>
        </div>

        <p className="text-white/50 text-xs mt-4">
          © 2021 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
