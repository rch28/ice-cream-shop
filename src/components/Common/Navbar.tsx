"use client";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "Flavors", path: "/flavors" },
  { id: "3", name: "Track Delivery", path: "/track-delivery" },
  { id: "4", name: "About Us", path: "/about-us" },
];
const Navbar = () => {
  const [isSticky, setSetIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        console.log("scrolling");
        setSetIsSticky(true);
      } else {
        setSetIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` bg-white z-50 w-full transition-all duration-300 ease-linear   ${
        isSticky ? "sticky top-0 left-0 " : " block"
      } `}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ease-linear  ${
          isSticky ? " py-4" : "py-4 sm:py-6 md:py-8"
        }`}
      >
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between lg:justify-around px-3">
          <div className="flex gap-1  justify-center md:justify-start ">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt=""
                width={100}
                height={100}
                priority
                className={` transition-all duration-300 ease-linear cursor-pointer  ${
                  isSticky ? "h-12 w-12" : "h-16 w-16"
                }`}
              />
            </Link>
            <div className="text-center md:text-left">
              <Link
                href="/"
                className={` font-bold text-gray-800 transition-all duration-300 ease-linear ${
                  isSticky ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
                } `}
              >
                Ice Cream Shop
              </Link>
              <p
                className={` font-bold text-gray-600 transition-all duration-300 ease-linear ${
                  isSticky ? "text-xs" : "text-sm"
                } `}
              >
                Taste the best ice cream in town
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative bg-gray-light  w-64 lg:w-96 mx-auto ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
            <input
              type="text"
              placeholder={"Search"}
              className="w-full pl-10 pr-4 py-2 focus:outline-none rounded-sm transition ease-linear  shadow-sm border border-gray-300 focus:border-gray-400"
            />
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="flex ml-3 gap-3 sm:gap-3">
              <Link href="/order">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
              <Link href="/order">
                <Button variant="default" className="cursor-pointer">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* //* --- desktop navbar ---  */}
      <nav
        className={`hidden md:block bg-pink-200 text-black transition-all duration-300 ease-linear ${
          isSticky ? "h-10" : "h-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 ">
          <div
            className={`flex items-center justify-start gap-4 ${
              isSticky ? "h-10" : "h-12"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="px-3 h-full flex items-center hover:bg-pink-400 font-semibold hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* //* --- mobile navbar ---  */}

      {/* //* navbar list  */}
    </div>
  );
};

export default Navbar;
