import React, { Component } from "react";
import "./LandingPage.css";

class DemoAccount extends Component {
  render() {
    return (
      <section className="LandingPage__DemoAccount">
        <h3>Demo Account</h3>
        <div className="LandingPage__DemoAccount__Box">
          <span>To log in, please use the credientials below.</span>
          <br />
          <br />
          <span>User: greenguru</span>
          <br />
          <br />
          <span>Password: Greenguru1!</span>
          <br />
          <br />
        </div>
      </section>
    );
  }
}

export default DemoAccount;
