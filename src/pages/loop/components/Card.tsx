import tw from "twin.macro";
import { Heading5 } from "../styles";

interface ICard {
  imageDesktop: string;
  imageMobile: string;
  text: string;
}
const Gradient = tw.div`absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70`;
export const Card = ({ imageDesktop, imageMobile, text }: ICard) => (
  <div className="group relative overflow-hidden ">
    <img
      src={imageDesktop}
      alt={text}
      className="hidden w-full duration-200 md:block group-hover:scale-110"
    />
    <img src={imageMobile} alt={text} className="w-full md:hidden" />
    <Gradient />
    <Heading5>{text}</Heading5>
  </div>
);
