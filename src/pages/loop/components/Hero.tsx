import tw, { styled } from "twin.macro";
import { Logo, HeroDesktop, HeroMobile } from "../images";
import Hamburger from "./Hamburger";
import { MenuMobile, Heading1 } from "../styles/index";
import { links } from "../data";
import { Link } from "./Link";
import React from "react";

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

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  return (
    <Section>
      <SectionContainer>
        <NavContainer>
          <img src={Logo} alt="Loop Logo" />
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            {links.map((link) => (
              <Link text={link} key={link} />
            ))}
          </div>
          <Hamburger isOpen={sidebarOpen} toggleSidebar={setSidebarOpen} />
        </NavContainer>
        {sidebarOpen && (
          <MenuMobile open={sidebarOpen}>
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
        )}
        <Heading1>Impressive Experiences That Deliver</Heading1>
      </SectionContainer>
    </Section>
  );
}
