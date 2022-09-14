import { Logo } from "../images";
import { ButtonContainer, Heading3, SectionContainer } from "../styles/styles";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section>
      <SectionContainer className="mb-40 pt-16">
        <img className="mx-auto my-16" src={Logo} alt="Logo Clipboard" />
        <Heading3>The copy lifesaver dream</Heading3>
        <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard from any device.
        </p>
        <ButtonContainer>
          <Button>Download For Android</Button>
          <Button color="bg-strongCyan">Download For iOS</Button>
          <Button color="bg-lightBlue">Download For Mac</Button>
          <Button color="bg-windowsColor">Download For Windows</Button>
        </ButtonContainer>
      </SectionContainer>
    </section>
  );
}
