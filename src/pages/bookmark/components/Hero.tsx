import React from "react";
import { HeroIllustration } from "../images";
import tw from "twin.macro";
import { styled } from "twin.macro";

const Link = tw.a`p-4 text-sm font-semibold rounded shadow-md border-2 md:text-base hover:bg-white`;
const BgBlueRight = styled.div([
  `
  @media (min-width: 976px){
     width: 2000px;
    height: 300px;
    left: 30%;
     
   }`,
]);
export default function Hero() {
  return (
    <section>
      <div className="container flex flex-col-reverse p-6 mx-auto lg:flex-row lg:mb-0">
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
            <Link
              href="#"
              className="text-white bg-softBlue border-softBlue  hover:text-softBlue"
            >
              Get It On Chrome
            </Link>
            <Link
              href="#"
              className="text-black bg-gray-300 border-gray-300 hover:text-gray-600"
            >
              Get It On Firefox
            </Link>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <BgBlueRight className="absolute rounded-l-full top-52 bg-softBlue" />
          <img
            src={HeroIllustration}
            alt="Illustration hero"
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </section>
  );
}
