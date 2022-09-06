import React from "react";
import { testimonials } from "../data";
import Testimony from "./Testimony";

export default function MainTestimonial() {
  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-10">
      <div className="grid gap-6 grid-cols-1  text-white md:grid-cols-4 md:grid-rows-1">
        {testimonials.map((testimonial) => (
          <Testimony
            key={testimonial.name}
            name={testimonial.name}
            image={testimonial.image}
            title={testimonial.title}
            summary={testimonial.summary}
            backgroundColor={testimonial.backgroundColor!}
            gridColumn={testimonial.gridColumn || "auto"}
            hasBackground={true}
            gridRow={testimonial.gridRow}
            clamp={testimonial.clamp!}
            hasQuotes={testimonial.hasQuote}
          />
        ))}
      </div>
    </div>
  );
}
