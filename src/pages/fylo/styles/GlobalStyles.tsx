import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";
import { useDarkMode } from "../hook/useDarkMode";

const breakpoint = `@media (max-width: 576px)`;

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,

    ...tw`antialiased dark:bg-darkBlue dark:text-white`,
  },
  [`@media(max-width: 576px)`]: {
    body: {},
  },
});

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
};

export default GlobalStyles;
