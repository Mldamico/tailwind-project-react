import { icons, links } from "../data";
import { Link } from "./Link";
import { Logo } from "../images";
import tw from "twin.macro";

const Icons = ({ Icon, altText }: { Icon: string; altText: string }) => (
  <div className="h-8 group">
    <a href="#">
      <img src={Icon} alt={altText} className="h-6" />
    </a>
  </div>
);

const FooterContainer = tw.div`flex flex-col items-center mb-8 space-y-6 md:flex-row md:justify-between md:space-y-0 md:items-start`;
const FooterLeft = tw.div`flex flex-col items-center space-y-8 md:items-start md:space-y-4`;
const FooterRight = tw.div`flex flex-col items-center md:items-start justify-between space-y-4 text-gray-500`;
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <FooterContainer>
          <FooterLeft>
            <div className="h-8">
              <img className="w-44 md:ml-3" src={Logo} alt="Loop Logo" />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {links.map((link) => (
                <Link text={link} key={link} hasHeight />
              ))}
            </div>
          </FooterLeft>
          <FooterRight>
            <div className="flex items-center justify-center space-x-4 md:justify-end md:space-x-12">
              {icons.map((icon) => (
                <Icons Icon={icon.icon} altText={icon.text} key={icon.text} />
              ))}
            </div>
            <p className="font-bold">&copy;2002 Loop. All Rights Reserved</p>
          </FooterRight>
        </FooterContainer>
      </div>
    </footer>
  );
}
