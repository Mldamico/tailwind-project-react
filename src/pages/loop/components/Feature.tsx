import tw from "twin.macro";
import { InteractiveDesktop } from "../images";
import { Heading2 } from "../styles/index";

const FeatureContainer = tw.div`relative flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0`;

export default function Feature() {
  return (
    <section>
      <FeatureContainer className="container">
        <img src={InteractiveDesktop} alt="image-interactive" />

        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <Heading2>The leader in interactive VR</Heading2>
          <p className="max-w-md text-center md:text-left">
            Founded in 2010, Loop has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our
            award-winning creations have transformed businesses through digital
            experiences that bind to their brand.
          </p>
        </div>
      </FeatureContainer>
    </section>
  );
}
