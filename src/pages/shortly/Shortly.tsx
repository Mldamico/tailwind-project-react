import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Shorten from "./components/Shorten";
import GlobalStyles from "./styles/GlobalStyles";

export default function Shortly() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Hero />
      <Shorten />
    </>
  );
}
