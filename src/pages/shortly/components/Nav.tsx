import { Logo } from "../images";
import Hamburger from "./Hamburger";
import React from "react";
import { links } from "../data";
import NavMobile from "./NavMobile";

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

      {sidebarOpen && <NavMobile />}
    </nav>
  );
}
