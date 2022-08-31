import { Card } from "./Card";
import { items } from "../data/index";

export default function Creations() {
  return (
    <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="hidden btn md:block">See All</button>
        </div>
        <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:space-y-0 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-8">
          {items.map((item) => (
            <Card
              imageDesktop={item.imageDesktop}
              imageMobile={item.imageMobile}
              text={item.text}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
}
