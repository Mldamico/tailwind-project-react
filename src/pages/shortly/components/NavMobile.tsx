import React from "react";
import { links } from "../data";
import tw from "twin.macro";

const NavMobileContainer = tw.div`flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm`;

export default function NavMobile() {
  return (
    <div className="absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
      <NavMobileContainer>
        {links.map((link) => (
          <a href="#" className="w-full text-center" key={link}>
            {link}
          </a>
        ))}
        <a
          href="#"
          className="w-full pt-6 border-t border-gray-400 text-center"
        >
          Login
        </a>
        <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">
          Sign Up
        </a>
      </NavMobileContainer>
    </div>
  );
}
