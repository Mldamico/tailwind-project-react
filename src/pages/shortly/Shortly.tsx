import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";
import GlobalStyles from "./styles/GlobalStyles";

export default function Shortly() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Hero />
      <Shorten />
      <Stats />
      <Features />
      <Cta />
      <Footer />
    </>
  );
}
