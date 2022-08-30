import { features } from "../data";
import tw from "twin.macro";
import FeatureItem from "./FeatureItem";

const FeaturesContainer = tw.section`pt-12 bg-gray-50 dark:bg-darkBlue1`;
const ItemContainer = tw.div`flex flex-col space-y-24 text-center md:flex-row md:space-y-0`;

export default function Features() {
  return (
    <FeaturesContainer>
      <div className="container mx-auto px-6 pb-32">
        <ItemContainer>
          {features.map(
            (feature, index) =>
              index % 2 === 0 && (
                <FeatureItem
                  image={feature.image}
                  altText={feature.altText}
                  title={feature.title}
                  text={feature.text}
                />
              )
          )}
        </ItemContainer>

        <ItemContainer>
          {features.map(
            (feature, index) =>
              index % 2 !== 0 && (
                <FeatureItem
                  image={feature.image}
                  altText={feature.altText}
                  title={feature.title}
                  text={feature.text}
                />
              )
          )}
        </ItemContainer>
      </div>
    </FeaturesContainer>
  );
}
