import tw from "twin.macro";
import Clipboard from "./components/Clipboard";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const Image = tw.img`w-64 absolute md:max-w-full md:w-1/2 hover:z-50 hover:border-2 hover:border-black hover:scale-110 transition-all duration-150`;

export default function Presentation() {
  return (
    <>
      <Header />
      <Navigation />
      <Clipboard />
    </>
  );
}
