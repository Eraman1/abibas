import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";

export default function model() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
