"use client";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/store";
import MobileMenu from "./MobileMenu";
const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "Flavors", path: "/flavors" },
  { id: "3", name: "Track Delivery", path: "/track-delivery" },
  { id: "4", name: "About Us", path: "/about-us" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setSetIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useStore();

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
      className={`bg-white z-50 w-full transition-all duration-300 ease-linear ${
        isSticky ? "sticky top-0 left-0 shadow-md bg-opacity-95" : "block"
      } `}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ease-linear  ${
          isSticky ? " py-4" : "py-4 sm:py-6 md:py-8"
        }`}
      >
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between lg:justify-around px-3">
          <div className="flex gap-1  justify-center md:justify-start ">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt=""
                width={100}
                height={100}
                priority
                className={`transition-all duration-300 ease-linear cursor-pointer hover:scale-105 ${
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
                Ice Cream Company
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
              className="w-full pl-10 pr-4 py-2 focus:outline-none rounded-full shadow-sm border border-gray-300 focus:border-gray-400 bg-gray-100"
            />
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="flex ml-3 gap-3 sm:gap-3 ">
              <Link href="/order" className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <ShoppingCart className="h-5 w-5 " />
                  <span className="sr-only">Cart</span>
                </Button>
                <span className="text-red-600 font-bold text-sm absolute top-0 right-1">
                  {getCartCount()}
                </span>
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
        className={`hidden md:block bg-gray-200 border-t text-black transition-all duration-300 ease-linear ${
          isSticky ? "h-10" : "h-12"
        }`}
      >
        <div
          className={`max-w-7xl flex items-center mx-auto px-16 ${
            isSticky ? "h-10" : "h-12"
          }`}
        >
          <div className="hidden md:flex items-center space-x-8 py-1">
            {navLinks.map(({ id, path, name }) => (
              <Link
                key={id}
                href={path}
                className={`relative px-1 py-1 text-gray-800 font-medium transition-all duration-200
                    hover:text-black group`}
              >
                <span
                  className={`${path === pathname ? "text-secondary" : ""}`}
                >
                  {name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* //* --- mobile navbar ---  */}
      <div className="relative px-4">
        {/* Mobile menu toggle button */}
        <button
          className="md:hidden cursor-pointer text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-8 w-8" />
          <span className="sr-only">Open menu</span>
        </button>

        {/* Mobile menu */}
        <MobileMenu
          navLinks={navLinks}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
