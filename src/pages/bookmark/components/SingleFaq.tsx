import React from "react";

interface ISingleFaq {
  id: number;
  title: string;
  summary: string;
  setSelection: Function;
  selection: boolean;
}

export default function SingleFaq({
  id,
  title,
  summary,
  setSelection,
  selection,
}: ISingleFaq) {
  return (
    <div
      className="py-1 border-b outline-none group"
      onClick={() => setSelection(0)}
    >
      <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in">
        <div className="transition duration-500 ease-in group-hover:text-red">
          {title}
        </div>
        <div className="transition duration-500 ease-in group-focus:-rotate-180 group-focus:text-red">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>
      {selection && (
        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen ease">
          <p className="py-2 text-justify text-gray-400">{summary}</p>
        </div>
      )}
    </div>
  );
}
