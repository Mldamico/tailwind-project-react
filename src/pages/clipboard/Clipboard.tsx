import React from "react";
import Hero from "./components/Hero";
import bgImg from "./images/bg-header-desktop.png";

import { styled } from "twin.macro";
const MainStyles = styled.main`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: contain;
`;
function Clipboard() {
  return (
    <MainStyles>
      <Hero />
    </MainStyles>
  );
}

export default Clipboard;
