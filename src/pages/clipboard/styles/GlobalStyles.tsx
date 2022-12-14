import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";
import { BgDesktop, BgMobile } from "../images";

const breakpoint = `@media (max-width: 576px)`;

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    backgroundImage: `url(${BgDesktop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",

    ...tw`antialiased`,
  },
  [`@media(max-width: 576px)`]: {
    body: {
      backgroundImage: `url(${BgMobile})`,
    },
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
