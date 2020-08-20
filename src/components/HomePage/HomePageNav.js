import React, { Component } from "react";
import { Link } from "react-router-dom";
import SmoothieContex from "../../contexts/SmoothieContext";
import "./HomePage.css";

function classFor(section, currentSection) {
  if (section !== currentSection) return "homeNotActive";
  else return "homeActive";
}

class HomePageNav extends Component {
  static contextType = SmoothieContex;

  render() {
    const id = this.context.user ? this.context.user.id : 0;
    return (
      <div className="HomePage__HomeDisplay__Nav">
        <ul>
          {id === 0 ? (
            <li>
              <Link to="/home" className={classFor("all", this.props.section)}>
                All Recipes
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/home"
                  className={classFor("all", this.props.section)}
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/home/favorites"
                  className={classFor("favorites", this.props.section)}
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/home/my-recipes"
                  className={classFor("user", this.props.section)}
                >
                  My Recipes
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default HomePageNav;
