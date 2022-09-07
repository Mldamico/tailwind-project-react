import React from "react";

import { Chrome, Firefox, Opera } from "../images";
import DownloadBox from "./DownloadBox";

const browsers = [
  {
    image: Chrome,
    title: "Chrome",
    version: "62",
  },
  {
    image: Firefox,
    title: "Firefox",
    version: "55",
  },
  {
    image: Opera,
    title: "Opera",
    version: "46",
  },
];

export default function DownloadBoxes() {
  return (
    <section className="py-32">
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
          <DownloadBox
            image={browsers[0].image}
            title={browsers[0].title}
            version={browsers[0].version}
          />
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
            <DownloadBox
              image={browsers[1].image}
              title={browsers[1].title}
              version={browsers[1].version}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
            <DownloadBox
              image={browsers[2].image}
              title={browsers[2].title}
              version={browsers[2].version}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
