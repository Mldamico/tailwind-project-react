import React from "react";
import Download from "./components/Download";
import DownloadBoxes from "./components/DownloadBoxes";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Tabs from "./components/Tabs";
import FaqAccordion from "./components/FaqAccordion";
import Newsletter from "./components/Newsletter";

export default function Bookmark() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Tabs />
      <Download />
      <DownloadBoxes />
      <Faq />
      <FaqAccordion />
      <Newsletter />
    </>
  );
}
