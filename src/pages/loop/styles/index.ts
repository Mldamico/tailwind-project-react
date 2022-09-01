import tw from "twin.macro";

import { styled } from "twin.macro";
interface IMobile {
  open: boolean;
}
export const Heading2 = tw.h2`max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left`;

export const Heading5 = tw.h5`absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black`;

export const Heading1 = tw.h1`max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl`;
export const MenuMobile = styled.div(({ open }: IMobile) => [
  tw`absolute top-0 bottom-0 left-0 flex-col self-end hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-gradient-to-b from-gray-500 to-black`, // Add base styles first
  open ? tw`flex` : tw`hidden`, // Then add conditional styles
]);
