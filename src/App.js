import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Virtuals from "./components/Virtuals/Virtuals";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtuals/>
      <Products/>
      <Testimonials/>
    </div>
  );
}

export default App;
