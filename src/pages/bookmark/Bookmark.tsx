import React from "react";
import Download from "./components/Download";
import DownloadBoxes from "./components/DownloadBoxes";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Tabs from "./components/Tabs";

export default function Bookmark() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Tabs />
      <Download />
      <DownloadBoxes />
    </>
  );
}
