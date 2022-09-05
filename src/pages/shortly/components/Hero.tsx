import tw from "twin.macro";
import { IllustrationWorking } from "../images";

const HeroContainer = tw.div`container flex flex-col-reverse mx-auto p-6 lg:flex-row`;
const Heading1 = tw.h1`text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left`;

export default function Hero() {
  return (
    <section>
      <HeroContainer>
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <Heading1>More than just shorter links</Heading1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href="#"
              className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <img src={IllustrationWorking} alt="illustration-working" />
        </div>
      </HeroContainer>
    </section>
  );
}
