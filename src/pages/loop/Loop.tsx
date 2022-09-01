import React from "react";
import Creations from "./components/Creations";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import GlobalStyles from "./styles/GlobalStyles";

export default function Loop() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Feature />
      <Creations />
      <Footer />
    </>
  );
}
