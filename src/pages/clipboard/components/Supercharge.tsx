import {
  SectionContainer,
  SectionText,
  Heading5,
  Heading3,
} from "../styles/styles";

import { TextIcon, PreviewIcon, BlistIcon } from "../images";
import tw from "twin.macro";

const SuperchargeContainer = tw.div`flex flex-col justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12`;
const SuperchargeItem = tw.div`flex flex-col items-center space-y-5 w-1/3`;

export default function Supercharge() {
  return (
    <section>
      <SectionContainer className="my-20">
        <Heading3>Supercharge your workflow</Heading3>
        <SectionText className="mb-16">
          We've got the tools to boost your productivity.
        </SectionText>
        <SuperchargeContainer>
          <SuperchargeItem>
            <img className="mb-6" src={BlistIcon} alt="Blacklist Icon" />
            <Heading5>Create Blacklists</Heading5>
            <p className="max-w-md text-grayishBlue">
              Blacklist whatever you want anytime.
            </p>
          </SuperchargeItem>
          <SuperchargeItem>
            <img className="mb-6" src={TextIcon} alt="Text Icon" />
            <Heading5>Plain Text Snippets</Heading5>
            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </SuperchargeItem>
          <SuperchargeItem>
            <img className="mb-6" src={PreviewIcon} alt="Preview Icon" />
            <Heading5>Sneak Preview</Heading5>
            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your clipboard for easy access.
            </p>
          </SuperchargeItem>
        </SuperchargeContainer>
      </SectionContainer>
    </section>
  );
}
