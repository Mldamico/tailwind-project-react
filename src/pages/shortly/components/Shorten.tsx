import tw from "twin.macro";
import { shorteLinks } from "../data";
import { ShortenList } from "./ShortenList";

const FormContainer = tw.form`relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3`;
const ShortenButton = tw.button`px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2`;
const ShortenInput = tw.input`flex-1 p-3 border-2 rounded-lg placeholder-gray-500 focus:outline-none`;
export default function Shorten() {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <FormContainer>
          <ShortenInput
            type="text"
            placeholder="Shorten a link here"
            id="link-input"
          />
          <ShortenButton>Shorten It!</ShortenButton>
          <div
            className="absolute left-7 bottom-3 text-red text-sm italic"
            id="err-msg"
          ></div>
        </FormContainer>
        {shorteLinks.map((short, index) => (
          <ShortenList
            link={short.link}
            short={short.short}
            color={index % 2 === 0 ? "bg-cyan" : "bg-darkViolet"}
          />
        ))}
      </div>
    </section>
  );
}
