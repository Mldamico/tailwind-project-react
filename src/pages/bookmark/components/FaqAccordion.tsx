import React from "react";
import SingleFaq from "./SingleFaq";
import { FAQData } from "../data";

export default function FaqAccordion() {
  const [selection, setSelection] = React.useState<number>();

  return (
    <section>
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-2xl m-8 mx-auto overflow-hidden">
          {FAQData.map((item) => (
            <SingleFaq
              id={item.id}
              title={item.title}
              summary={item.summary}
              key={item.id}
              selection={selection == item.id}
              setSelection={() => setSelection(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
