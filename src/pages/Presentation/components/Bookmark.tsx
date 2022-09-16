import React from "react";
import {
  Bookmark1,
  Bookmark2,
  Bookmark3,
  Bookmark4,
  Bookmark5,
  BookmarkHeroCode,
  BookmarkHeroStylesCode,
  BookmarkNavCode,
  BookmarkTabCode,
} from "../images";
import { Button } from "./Button";

export default function Bookmark() {
  return (
    <section>
      <div className="flex flex-col  mx-auto w-full md:space-x-6">
        <div className="flex flex-1 justify-center">
          <h2 className="text-3xl md:text-5xl">Bookmark</h2>
        </div>
        <div className="flex md:flex-1 items-center flex-col mt-16 space-y-12">
          <div className="flex w-[90%] flex-col-reverse md:flex-row">
            <div className="md:flex-1 md:relative hidden md:flex">
              <img
                src={BookmarkHeroCode}
                alt="Hero code"
                className=" md:w-1/2 md:absolute md:-top-24 md:left-16 hover:z-20 hover:scale-150 transition-all duration-300"
              />
              <img
                src={BookmarkHeroStylesCode}
                alt="Hero Styles code"
                className="md:w-1/2 md:absolute md:right-0 md:bottom-0 hover:z-20 hover:scale-150 transition-all duration-300"
              />
              <img
                src={BookmarkNavCode}
                alt="Navigation code"
                className="md:w-1/2 md:absolute md:right-0 md:top-0 hover:z-20 hover:scale-150 transition-all duration-300"
              />
            </div>
            <img
              src={Bookmark1}
              alt="Bookmark Hero"
              className=" self-center md:w-1/2 flex-1 md:self-end hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
            />
          </div>
          <div className="flex w-[90%] flex-col md:flex-row">
            <img
              src={Bookmark2}
              alt="Bookmark Features"
              className="md:w-1/2 hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
            />
            <div className="flex-1 md:relative hidden md:flex">
              <img
                src={BookmarkTabCode}
                alt="Tab code"
                className="md:w-1/2 absolute md:top-16 md:left-24 hover:z-20 hover:scale-150 transition-all duration-300"
              />
            </div>
          </div>
          <div className="flex w-[90%] flex-col md:flex-row">
            <div className="flex-1 md:relative hidden md:flex">
              <img
                src={""}
                alt="Access code"
                className="md:w-1/2 md:absolute md:top-16 md:left-32 hover:z-20 hover:scale-150 transition-all duration-300"
              />
            </div>
            <img
              src={Bookmark3}
              alt="Bookmark "
              className="md:w-1/2 flex-1 self-end hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
            />
          </div>
          <div className="flex w-[90%] flex-col md:flex-row">
            <img
              src={Bookmark4}
              alt="Clipboard Middle 2"
              className="md:w-1/2 hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
            />
            <div className="flex-1 md:relative hidden md:flex">
              <img
                src={""}
                alt="References code"
                className="md:w-1/2 md:absolute md:bottom-0 md:left-24 z-10 hover:z-20 hover:scale-150 transition-all duration-300"
              />
              <img
                src={""}
                alt="Supercharge code"
                className="md:w-1/2 md:absolute md:right-16 md:top-0 hover:z-20 hover:scale-150 transition-all duration-300"
              />
            </div>
          </div>

          <img
            src={Bookmark5}
            alt="Bookmark Footer"
            className="w-[90%] md:w-1/2 self-center hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
          />
        </div>
      </div>
      <div className="flex justify-center my-12">
        <Button text="Bookmark" link="/bookmark" />
      </div>
    </section>
  );
}
