import React, { Component } from "react";
import "./LandingPage.css";

class LandingPageHero extends Component {
  render() {
    return (
      <header className="LandingPage__Hero">
        <h1>Create the perfect smoothie.</h1>
        <h2>
          Smoothie.io gives you amazing smoothie recipes that you can completely
          customize. You can also build your own from scratch and share them
          with the world!
        </h2>
      </header>
    );
  }
}

export default LandingPageHero;
