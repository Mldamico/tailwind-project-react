import { Heading5, ItemContainer, SectionContainer } from "../styles/styles";
import { Computer } from "../images";
import tw from "twin.macro";

const FeaturesContainer = tw.div`relative flex flex-col md:flex-row md:space-x-32`;

export default function Features() {
  return (
    <section id="features">
      <SectionContainer className="my-20">
        <FeaturesContainer>
          <div className="md:w-1/2">
            <img
              src={Computer}
              alt="Computer"
              className="md:absolute top-0 right-[50%]"
            />
          </div>
          <ItemContainer>
            <div>
              <Heading5>Quick Search</Heading5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application and more.
              </p>
            </div>
            <div>
              <Heading5>iCloud Sync</Heading5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <Heading5>Completely History</Heading5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from any moment.
              </p>
            </div>
          </ItemContainer>
        </FeaturesContainer>
      </SectionContainer>
    </section>
  );
}
