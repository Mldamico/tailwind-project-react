import React from "react";
import tw from "twin.macro";
import FeatureBox from "./FeatureBox";
import { BrandIcon, DetailedIcon, CustomizableIcon } from "../images";
const VerticalLine = tw.div`absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden`;
const HorizontalLine = tw.div`hidden absolute top-24 left-16 h-3 bg-cyan w-10/12 md:block`;

export default function Features() {
  return (
    <section className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        <HorizontalLine />

        <VerticalLine />
        <FeatureBox
          image={BrandIcon}
          title="Brand Recognition"
          summary="Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content."
        />

        <FeatureBox
          image={DetailedIcon}
          title="Detailed Records"
          summary="Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions."
          margin="mt-16 md:mt-8"
        />
        <FeatureBox
          image={CustomizableIcon}
          title="Fully customizable"
          summary="Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement."
          margin="mt-16 md:mt-16"
        />
      </div>
    </section>
  );
}
