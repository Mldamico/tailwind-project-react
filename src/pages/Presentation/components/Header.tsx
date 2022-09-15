import { Bookmark, Clipboard, Loop } from "../images";
import tw from "twin.macro";
import Navigation from "./Navigation";

const Image = tw.img`w-64 absolute md:max-w-full md:w-1/2 hover:z-50 hover:border-2 hover:border-black hover:scale-110 transition-all duration-150`;

export default function Header() {
  return (
    <header>
      <div className="container flex flex-col mx-auto mt-24 md:h-screen h-96">
        <div className="flex flex-col px-4">
          <h1 className="text-2xl font-bold text-center sm:text-5xl mb-12">
            React-Tailwind Projects
          </h1>
        </div>

        <div className="relative md:w-full">
          <Image
            src={Loop}
            alt="Bookmark image"
            className="right-2 top-16 md:right-12 md:top-24 z-20"
          />
          <Image
            src={Bookmark}
            alt="Loop image"
            className="right-20 top-36 md:right-80 md:top-72 z-30"
          />
          <Image
            src={Clipboard}
            alt="Clipboard image"
            className="left-2 top-4 md:left-12 md:top-12"
          />
        </div>
      </div>
    </header>
  );
}
