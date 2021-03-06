import React from "react";
import Footer from "../partials/Footer";
import HowItWorks from "../partials/HowItWorks";
import Landing from "../partials/Landing";
import Navbar from "../partials/Navbar";
import ProductSection from "../partials/ProductSection";
import VersatileToken from "../partials/VersatileToken";
import WhyUs from "../partials/WhyUs";
import FAQs from "../partials/FAQs";
import Roadmap from "../partials/Roadmap";
import ProdSection from "../partials/ProdSection";

export default function Home() {
  return (
    <>
      <div className="page-wrap">
        <Navbar />
        <Landing />
        {/* <ProductSection /> */}
        <ProdSection />
        <HowItWorks />
        <Roadmap />
        <WhyUs />
        {/* <VersatileToken /> */}
        {/* <FAQs /> */}
        <Footer />
      </div>
    </>
  );
}
