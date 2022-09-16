import React from "react";
import { HeroIllustration } from "../images";
import tw from "twin.macro";
import { styled } from "twin.macro";
const HeroContainer = tw.div`container flex flex-col-reverse p-6 mx-auto lg:flex-row lg:mb-0`;
const Link = tw.a`p-4 text-sm font-semibold rounded shadow-md border-2 md:text-base hover:bg-white`;
const HeroHeader = tw.header`flex flex-col space-y-10 lg:mt-16 lg:w-1/2`;
const Title = tw.h1`text-3xl font-semibold text-center lg:text-6xl lg:text-left`;
const Subtitle = tw.p`max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0`;
const LinkContainer = tw.div`flex items-center justify-center w-full space-x-4 lg:justify-start`;
const BgBlueRight = styled.div([
  `
  @media (min-width: 976px){
    width: 2000px;
    height: 300px;
    left: 30%;
   }`,
]);

export default function Hero() {
  return (
    <section>
      <HeroContainer>
        <HeroHeader>
          <Title>A Simple Bookmark Manager</Title>
          <Subtitle>
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Subtitle>
          <LinkContainer>
            <Link
              href="#"
              className="text-white bg-softBlue border-softBlue  hover:text-softBlue"
            >
              Get It On Chrome
            </Link>
            <Link
              href="#"
              className="text-black bg-gray-300 border-gray-300 hover:text-gray-600"
            >
              Get It On Firefox
            </Link>
          </LinkContainer>
        </HeroHeader>

        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <BgBlueRight className="absolute rounded-l-full top-52 bg-softBlue" />
          <img
            src={HeroIllustration}
            alt="Illustration hero"
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </HeroContainer>
    </section>
  );
}
