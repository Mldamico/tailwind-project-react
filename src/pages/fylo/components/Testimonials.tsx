import tw from "twin.macro";
import { testimonials } from "../data";
import { BgQuotes } from "../images";
import TestimonialItem from "./TestimonialItem";

const TestimonialsContainer = tw.div`container mx-auto px-6 pt-12 pb-80 md:pb-96`;
const TestimonialRelativeContainer = tw.div`relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12`;

export default function Testimonials() {
  return (
    <section className="bg-gray-50 dark:bg-darkBlue">
      <TestimonialsContainer>
        <TestimonialRelativeContainer>
          <img
            src={BgQuotes}
            alt="Quotes"
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />

          {testimonials.map(
            ({ summary, image, imageAlt, fullName, jobPosition }) => (
              <TestimonialItem
                summary={summary}
                image={image}
                imageAlt={imageAlt}
                fullName={fullName}
                jobPosition={jobPosition}
              />
            )
          )}
        </TestimonialRelativeContainer>
      </TestimonialsContainer>
    </section>
  );
}
