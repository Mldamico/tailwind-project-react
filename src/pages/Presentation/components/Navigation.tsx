import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";

const Button = tw.button`px-4 py-2 outline-none cursor-pointer`;
const BorderButton = tw.div`border-r-2 border-gray-500`;

export default function Navigation() {
  return (
    <div className="text-center">
      <nav className="border-2 border-gray-500 min-w-min inline-block rounded-xl bg-gray-100 mb-6">
        <div className="flex flex-row">
          <BorderButton>
            <Button>Clipboard</Button>
          </BorderButton>
          <BorderButton>
            <Button>Bookmark</Button>
          </BorderButton>
          <BorderButton>
            <Button>Fylo</Button>
          </BorderButton>
          <BorderButton>
            <Button>Shortly</Button>
          </BorderButton>
          <BorderButton>
            <Button>Testimonial</Button>
          </BorderButton>
          <div>
            <Button>Loop</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
