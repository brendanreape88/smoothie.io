import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import SmoothieContext from "../../contexts/SmoothieContext";
import "./Header.css";

class Header extends Component {
  static contextType = SmoothieContext;

  logOut = () => {
    this.context.logOut();
  };

  render() {
    const user = this.context.user;
    return (
      <nav className="Header">
        <div className="Header__Logo">
          <div className="Icon">
            <Link to="/">
              <FontAwesomeIcon icon={faLeaf} />
            </Link>
          </div>
          <div className="Title">
            <h1>
              <Link to="/">Smoothie.io</Link>
            </h1>
          </div>
        </div>
        <div className="Header__Menu">
          <span>
            {user ? (
              <Link to="/" onClick={this.logOut}>
                logout
              </Link>
            ) : (
              <Link to="/login">login</Link>
            )}
          </span>
          <span>
            <Link to="/home">smoothies</Link>
          </span>
          <span>
            <Link to="/create">create</Link>
          </span>
        </div>
      </nav>
    );
  }
}

export default Header;
