import Hero from "./components/Hero";
import Snippets from "./components/Snippets";
import Features from "./components/Features";
import Access from "./components/Access";
import Supercharge from "./components/Supercharge";
import References from "./components/References";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

function Clipboard() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Snippets />
      <Features />
      <Access />
      <Supercharge />
      <References />
      <Bottom />
      <Footer />
    </>
  );
}

export default Clipboard;
