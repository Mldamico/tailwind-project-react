import React from "react";
import FooterLink from "./FooterLink";
import tw from "twin.macro";
import {
  Logo,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
  FacebookIcon,
} from "../images";
import FooterIcon from "./FooterIcon";

const columnA = ["Link Shortening", "Branded Links", "Analytics"];
const columnB = ["Blog", "Developers", "Support"];
const columnC = ["About", "Our Team", "Careers", "Contact"];

const icons = [
  {
    icon: TwitterIcon,
    altText: "Twitter Icon",
  },
  {
    icon: FacebookIcon,
    altText: "Facebook Icon",
  },
  {
    icon: InstagramIcon,
    altText: "Instagram Icon",
  },
  {
    icon: PinterestIcon,
    altText: "Pinterest Icon",
  },
];

const FooterContainer = tw.div`container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start`;

export default function Footer() {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <FooterContainer>
        <img src={Logo} alt="Logo Shortly" />

        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              {columnA.map((link) => (
                <FooterLink link={link} key={link} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              {columnB.map((link) => (
                <FooterLink link={link} key={link} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              {columnC.map((link) => (
                <FooterLink link={link} key={link} />
              ))}
            </div>
          </div>
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
