import React from "react";
import tw from "twin.macro";

interface IFeatureBox {
  image: string;
  title: string;
  summary: string;
  margin?: string;
}

const Heading5 = tw.h5`pt-6 text-xl font-bold text-center capitalize md:text-left`;
const BoxContainer = tw.div`relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3`;
const ImageContainer = tw.div`flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet`;
export default function FeatureBox({
  image,
  title,
  summary,
  margin,
}: IFeatureBox) {
  return (
    <BoxContainer className={margin}>
      <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
        <ImageContainer>
          <img src={image} alt={title} />
        </ImageContainer>
      </div>
      <Heading5>{title}</Heading5>
      <p className="text-center text-gray-400 md:text-left">{summary}</p>
    </BoxContainer>
  );
}
