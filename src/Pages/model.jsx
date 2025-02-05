import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";
import SpecificationsTabs from "../components/Specification";
import PerformanceSection from "../components/Performance";
import Banner from "../components/Banner";

export default function model() {
  return (
    <>
      <Navbar />
      <Hero />
      <SpecificationsTabs />
      <PerformanceSection />
      <Banner />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
