import React from "react";
import tw from "twin.macro";
import logo from "../images/logo.svg";
const SectionContainer = tw.div`max-w-6xl mx-auto text-center px-10`;

const Heading3 = tw.h3`mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl`;

const ButtonContainer = tw.div`flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4`;

export default function Hero() {
  return (
    <section id="hero">
      <SectionContainer className="mb-40 pt-16">
        <img className="mx-auto my-16" src={logo} alt="Logo Clipboard" />
        <Heading3>The copy lifesaver dream</Heading3>
        <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard from any device.
        </p>
        <ButtonContainer>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-androidColor duration-250 hover:opacity-80 hover:-translate-y-2 transition ease-in-out"
          >
            Download For Android
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 hover:-translate-y-2 transition ease-in-out"
          >
            Download For iOS
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 hover:-translate-y-2 transition ease-in-out"
          >
            Download For Mac
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-windowsColor duration-200 hover:opacity-80 hover:-translate-y-2 transition ease-in-out"
          >
            Download For Windows
          </a>
        </ButtonContainer>
      </SectionContainer>
    </section>
  );
}
