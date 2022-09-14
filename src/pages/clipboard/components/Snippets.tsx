import { SectionContainer, SectionText, Heading3 } from "../styles/styles";

export default function Snippets() {
  return (
    <section>
      <SectionContainer className="my-20">
        <Heading3>Keep track of your snippets</Heading3>
        <SectionText>
          Clipboard stores everything you copy in the cloud. While is Mac or
          windows, iOS or Android. You can keep everything safe and organized.
        </SectionText>
      </SectionContainer>
    </section>
  );
}
