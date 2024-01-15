import React from "react";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Card from "./components/Card";
import arr from "./data/cardData";

const App = () => {
  return (
    <>
      <NavBar />
      <AboutUs />
      <Contact />
      <Footer />

      {arr.map((val, idx) => (
        <Card key={idx} data={val} />
      ))}
    </>
  );
};

export default App;
