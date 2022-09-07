import React from "react";

interface ITab {
  image: string;
  title: string;
  text: string;
}

export default function Tab({ image, title, text }: ITab) {
  return (
    <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
      <div className="flex justify-center md:w-1/2">
        <img src={image} alt={title} className="relative z-10" />
      </div>
      <div className="flex flex-col space-y-8 md:w-1/2">
        <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
          {title}
        </h3>
        <p className="max-w-md text-center text-grayishBlue md:text-left">
          {text}
        </p>
        <div className="mx-auto md:mx-0">
          <a
            href="#"
            className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}
