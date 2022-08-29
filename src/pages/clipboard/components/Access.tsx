import { SectionContainer, SectionText, Heading3 } from "../styles/styles";
import { Devices } from "../images";

export default function Access() {
  return (
    <section>
      <SectionContainer className="my-20">
        <Heading3>Access clipboard anywhere</Heading3>
        <SectionText>
          Whether you're on the go or at your computer, you can access all your
          clipboard snippets in a few simple steps.
        </SectionText>
        <img src={Devices} alt="Devices" className="mx-auto" />
      </SectionContainer>
    </section>
  );
}
