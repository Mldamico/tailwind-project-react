import styled from "@emotion/styled";
import { PhoneIcon, EmailIcon, Facebook, Twitter, Instagram } from "../images";

const ImgFilter = styled.img`
  &:hover {
    filter: invert(80%) sepia(37%) saturate(7048%) hue-rotate(132deg)
      brightness(105%) contrast(104%);
  }
`;

export default function Footer() {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto pt-12 px-5 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6 ">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src={PhoneIcon} alt="Phone icon" className="scale-10" />
              </div>
              <p>+1-543-123-4567</p>
            </div>

            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src={EmailIcon} alt="Phone icon" className="scale-10" />
              </div>
              <p>example@fylo.com</p>
            </div>
          </div>

          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#">
                <ImgFilter
                  src={Facebook}
                  alt="Facebook"
                  className="p-2 bg-darkBlue rounded-full"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <ImgFilter
                  src={Twitter}
                  alt="Twitter"
                  className="p-2 bg-darkBlue rounded-full"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <ImgFilter
                  src={Instagram}
                  alt="Instagram"
                  className="p-2 bg-darkBlue rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
