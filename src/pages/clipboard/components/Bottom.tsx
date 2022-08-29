import {
  SectionContainer,
  SectionText,
  ButtonContainer,
} from "../styles/styles";
import { Button } from "./Button";
import { Heading3 } from "../styles/styles";

export default function Bottom() {
  return (
    <section>
      <SectionContainer className="my-20">
        <Heading3>Clipboard for any device</Heading3>
        <SectionText>
          Available for free on App Store, Microsoft Store and Play Store.
          Download for Windows, Mac, Ios or Android. You can Sync with iCloud
          and be ready to start adding to your clipboard.
        </SectionText>
        <ButtonContainer>
          <Button color="bg-androidColor">Download For Android</Button>
          <Button color="bg-strongCyan">Download For iOS</Button>
          <Button color="bg-lightBlue">Download For Mac</Button>
          <Button color="bg-windowsColor">Download For Windows</Button>
        </ButtonContainer>
      </SectionContainer>
    </section>
  );
}
