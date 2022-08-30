import { IllustrationIntro } from "../images";
import tw from "twin.macro";

export const Button = tw.button`w-full p-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95`;
const HerroContainer = tw.div`container mx-auto px-6 text-center md:pt-20 pb-52`;
const Heading1 = tw.h1`max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl`;
const Text = tw.p`max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg`;
export default function Hero() {
  return (
    <div className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
      <HerroContainer>
        <img
          src={IllustrationIntro}
          alt="Intro Illustration"
          className="mx-auto"
        />
        <Heading1>
          All your files in one secure location, accesible anywhere.
        </Heading1>
        <Text>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </Text>
        <Button>Get Started</Button>
      </HerroContainer>
    </div>
  );
}
