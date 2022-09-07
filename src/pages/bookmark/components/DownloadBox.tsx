import React from "react";

interface IBox {
  image: string;
  version: string;
  title: string;
}

export default function DownloadBox({ image, version, title }: IBox) {
  return (
    // <div className="w-full md:w-1/3">
    <>
      <div className="flex justify-center">
        <img src={image} alt={title} />
      </div>

      <h5 className="pt-6 text-xl font-bold">Add to {title}</h5>
      <p className="text-gray-400">Minimum Version {version}</p>

      <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
        <a
          href="#"
          className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
        >
          Add & Install Extension
        </a>
      </div>
    </>
    // </div>
  );
}
