import EarlyAccess from "./components/EarlyAccess";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import GlobalStyles from "./styles/GlobalStyles";

export default function Fylo() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </div>
  );
}
