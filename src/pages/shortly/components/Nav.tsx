import { Logo } from "../images";
import Hamburger from "./Hamburger";
import React from "react";
import { links } from "../data";

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={Logo} alt="Shortly Logo" />

          <div className="hidden space-x-8 font-bold lg:flex">
            {links.map((link) => (
              <a
                href="#"
                key={link}
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" className="hover:text-veryDarkViolet">
            Login
          </a>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        <Hamburger isOpen={sidebarOpen} toggleSidebar={setSidebarOpen} />
      </div>

      {sidebarOpen && (
        <div className="absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full py-3 text-center rounded-full bg-cyan"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
