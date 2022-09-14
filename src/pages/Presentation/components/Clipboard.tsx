import React from "react";
import {
  Clipboard1,
  Clipboard2,
  Clipboard3,
  Clipboard4,
  Clipboard as Cb,
  ClipboardHero,
  ClipboardButton,
  ClipboardFeatures,
  ClipboardSnippets,
  ClipboardStyles,
  ClipboardAccess,
  ClipboardReferences,
  ClipboardSupercharge,
} from "../images";
export default function Clipboard() {
  return (
    <section className="container flex flex-col  mx-auto w-full space-x-6">
      <div className="flex flex-1 justify-center">
        <h2 className="text-3xl md:text-5xl">Clipboard</h2>
      </div>
      <div className="flex flex-1 flex-col mt-16 space-y-12">
        <div className="flex md:flex-row">
          <div className="flex-1 relative">
            <img
              src={ClipboardHero}
              alt="Hero code"
              className="md:w-1/2 absolute top-0 left-16 hover:z-20 hover:scale-150 transition-all duration-300"
            />
            <img
              src={ClipboardButton}
              alt="Button code"
              className="md:w-1/2 absolute right-16 bottom-0 hover:z-20 hover:scale-150 transition-all duration-300"
            />
          </div>
          <img
            src={Cb}
            alt="Clipboard top"
            className="md:w-1/2 flex-1 self-end hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
          />
        </div>
        <div className="flex md:flex-row">
          <img
            src={Clipboard2}
            alt="Clipboard top"
            className="md:w-1/2 hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
          />
          <div className="flex-1 relative">
            <img
              src={ClipboardFeatures}
              alt="Features code"
              className="md:w-1/2 absolute top-0 left-16 hover:z-20 hover:scale-150 transition-all duration-300"
            />
            <img
              src={ClipboardSnippets}
              alt="Snippets code"
              className="md:w-1/2 absolute right-16 z-10 top-8 hover:z-20 hover:scale-150 transition-all duration-300"
            />
            <img
              src={ClipboardStyles}
              alt="Styles code"
              className="md:w-1/2 absolute right-16 z-5 bottom-0 hover:z-20 hover:scale-150 transition-all duration-300"
            />
          </div>
        </div>
        <div className="flex md:flex-row">
          <div className="flex-1 relative">
            <img
              src={ClipboardAccess}
              alt="Access code"
              className="md:w-1/2 absolute top-16 left-32 hover:z-20 hover:scale-150 transition-all duration-300"
            />
          </div>
          <img
            src={Clipboard3}
            alt="Clipboard Access"
            className="md:w-1/2 flex-1 self-end hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
          />
        </div>
        <div className="flex md:flex-row">
          <img
            src={Clipboard4}
            alt="Clipboard Middle 2"
            className="md:w-1/2 hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
          />
          <div className="flex-1 relative">
            <img
              src={ClipboardReferences}
              alt="References code"
              className="md:w-1/2 absolute bottom-0 left-24  z-10 hover:z-20 hover:scale-150 transition-all duration-300"
            />
            <img
              src={ClipboardSupercharge}
              alt="Supercharge code"
              className="md:w-1/2 absolute right-16 top-0 hover:z-20 hover:scale-150 transition-all duration-300"
            />
          </div>
        </div>

        <img
          src={Clipboard1}
          alt="Clipboard Footer"
          className="md:w-1/2 self-center hover:scale-125 hover:border-gray-300 hover:border-2 transition-all  duration-200"
        />
      </div>
      <button></button>
    </section>
  );
}
