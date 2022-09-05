import FooterLink from "./FooterLink";
import tw from "twin.macro";
import { Logo } from "../images";
import FooterIcon from "./FooterIcon";
import { columnA, columnB, columnC, icons } from "../data";

const FooterContainer = tw.div`container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start`;
const FooterColumnItems = tw.div`flex flex-col items-center space-y-3 md:items-start`;
const FooterColumn = tw.div`flex flex-col items-center w-full md:items-start`;
const Headeing5 = tw.h5`mb-5 font-bold text-white capitalize`;
export default function Footer() {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <FooterContainer>
        <img src={Logo} alt="Logo Shortly" />

        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          <FooterColumn>
            <Headeing5>Features</Headeing5>
            <FooterColumnItems>
              {columnA.map((link) => (
                <FooterLink link={link} key={link} />
              ))}
            </FooterColumnItems>
          </FooterColumn>

          <FooterColumn>
            <Headeing5>Resources</Headeing5>
            <FooterColumnItems>
              {columnB.map((link) => (
                <FooterLink link={link} key={link} />
              ))}
            </FooterColumnItems>
          </FooterColumn>

          <FooterColumn>
            <Headeing5>Company</Headeing5>
            <FooterColumnItems>
              {columnC.map((link) => (
                <FooterLink link={link} key={link} />
              ))}
            </FooterColumnItems>
          </FooterColumn>
        </div>
        <div className="flex space-x-6">
          {icons.map((icon) => (
            <FooterIcon
              icon={icon.icon}
              altText={icon.altText}
              key={icon.altText}
            />
          ))}
        </div>
      </FooterContainer>
    </footer>
  );
}
