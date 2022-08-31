import tw, { styled } from "twin.macro";
import { Logo, HeroDesktop, HeroMobile } from "../images";
import Hamburger from "./Hamburger";
import { MenuMobile, Heading1 } from "../styles/index";
import { links } from "../data";

const Section = styled.section`
  background-image: url(${HeroDesktop});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 576px) {
    #hero {
      background-image: url(${HeroMobile});
      background-position: center;
    }
  }
`;

const SectionContainer = tw.div`container max-w-6xl mx-auto px-6 py-12`;
const NavContainer = tw.div`flex flex-row justify-between items-center font-bold text-white`;

const BottomLineBorder = tw.div`mt-1 group-hover:border-b group-hover:border-blue-50`;

const LinkDesktop = ({ text }: { text: string }) => (
  <div className="group">
    <a href="#">{text}</a>
    <BottomLineBorder />
  </div>
);

export default function Hero() {
  return (
    <Section>
      <SectionContainer>
        <NavContainer>
          <img src={Logo} alt="Loop Logo" />
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            {links.map((link) => (
              <LinkDesktop text={link} />
            ))}
          </div>
          <Hamburger />
        </NavContainer>

        <MenuMobile>
          <a href="#" className="hover:text-pink-500">
            Home
          </a>
          <a href="#" className="hover:text-pink-500">
            About
          </a>
          <a href="#" className="hover:text-pink-500">
            Careers
          </a>
          <a href="#" className="hover:text-pink-500">
            Events
          </a>
          <a href="#" className="hover:text-pink-500">
            Products
          </a>
          <a href="#" className="hover:text-pink-500">
            Support
          </a>
        </MenuMobile>

        <Heading1>Impressive Experiences That Deliver</Heading1>
      </SectionContainer>
    </Section>
  );
}
