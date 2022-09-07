import React from "react";
import tw from "twin.macro";
import { Bookmark } from "../images";

const NavContainer = tw.div`flex items-center justify-between space-x-20 my-6`;
const NavLinksContainer = tw.div`hidden items-center space-x-10 uppercase text-grayishBlue md:flex`;
export default function Nav() {
  return (
    <nav className="container relative mx-auto p-6">
      <NavContainer>
        <div className="z-30">
          <img src={Bookmark} alt="Logo" />
        </div>
        <NavLinksContainer>
          <a href="#features" className="tracking-widest hover:text-softRed">
            Features
          </a>
          <a href="#download" className="tracking-widest hover:text-softRed">
            Download
          </a>
          <a href="#faq" className="tracking-widest hover:text-softRed">
            FAQ
          </a>
          <a
            href="#"
            className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
          >
            Login
          </a>
        </NavLinksContainer>
      </NavContainer>
    </nav>
  );
}
