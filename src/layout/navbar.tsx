import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Career", path: "/career" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-[#49BBBD] px-4 md:px-8 lg:px-32">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="TOTC logo"
              width={150}
              height={50}
              priority
              className="w-20 md:w-28 lg:w-[150px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={
                    router.pathname === link.path
                      ? "font-semibold text-primary"
                      : "font-normal text-white"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-end gap-2">
          <Link
            href="/login"
            className="btn shadow-none border border-white
                       bg-white text-[#5B5B5B]
                       rounded-full w-[110px] h-[40px]
                       hidden md:flex"
          >
            Login
          </Link>

          <Link
            href="/login?tab=register"
            className="btn shadow-none border border-white
                       bg-white text-[#5B5B5B]
                       rounded-full w-[110px] h-[40px]
                       hidden md:flex"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CiMenuBurger className="size-5 text-white" />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-50 p-4 shadow
                       fixed left-0 right-0 top-[64px]
                       w-full lg:hidden bg-[#49BBBD]"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={
                    router.pathname === link.path
                      ? "font-semibold text-primary"
                      : "font-normal text-white"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Buttons */}
            <div className="flex gap-2 mt-3">
              <Link
                href="/login"
                className="btn shadow-none border border-white
                           bg-white text-[#5B5B5B]
                           rounded-full w-[110px] h-[40px]
                           flex md:hidden"
              >
                Login
              </Link>

              <Link
                href="/login?tab=register"
                className="btn shadow-none border border-white
                           bg-white text-[#5B5B5B]
                           rounded-full w-[110px] h-[40px]
                           flex md:hidden"
              >
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
