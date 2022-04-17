import React from "react";
import Banner from "../Banner/Banner";
import DiscussedTopics from "../DiscussedTopics/DiscussedTopics";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <DiscussedTopics />
      <Services />
      <Footer />
    </main>
  );
}
