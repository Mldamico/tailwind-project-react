import { SectionContainer } from "../styles/styles";
import { Logo, FacebookIcon, TwitterIcon, InstagramIcon } from "../images";
import tw, { styled } from "twin.macro";

const ImgFilter = styled.img`
  &:hover {
    filter: invert(53%) sepia(68%) saturate(434%) hue-rotate(121deg)
      brightness(101%) contrast(94%);
  }
`;

const FooterSection = tw.div`flex flex-col items-center justify-between md:flex-row`;
const LinksContainer = tw.div`flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue`;
const LinkColumn = tw.div`flex flex-col space-y-4 text-center md:text-left`;
export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <SectionContainer>
        <FooterSection>
          <img src={Logo} alt="Clipboard Logo" className="scale-50" />
          <LinksContainer>
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <LinkColumn>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQ
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </LinkColumn>
              <LinkColumn>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </LinkColumn>
              <LinkColumn>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </LinkColumn>
            </div>
            <div className="flex justify-between w-32 py-1">
              <a href="#">
                <ImgFilter
                  className="duration-200"
                  src={FacebookIcon}
                  alt="Facebook Icon"
                />
              </a>
              <a href="#">
                <ImgFilter
                  className="duration-200"
                  src={TwitterIcon}
                  alt="Twitter Icon"
                />
              </a>
              <a href="#">
                <ImgFilter
                  className="duration-200"
                  src={InstagramIcon}
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </LinksContainer>
        </FooterSection>
      </SectionContainer>
    </footer>
  );
}
