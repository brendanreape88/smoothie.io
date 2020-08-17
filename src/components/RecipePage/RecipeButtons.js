import React, { Component } from "react";
import { Link } from "react-router-dom";
import SmoothieContext from "../../contexts/SmoothieContext";
import "./RecipePage.css";

class RecipeButtons extends Component {
  static contextType = SmoothieContext;

  render() {
    const { recipe = {} } = this.props;
    return (
      <section className="RecipePage__BottomButtons">
        <div className="RecipePage__BottomButtons__FlexBox">
          {"smoothie" in recipe ? (
            <>
              <button
                onClick={() => this.props.favorite(recipe.smoothie.recipe_id)}
              >
                favorite
              </button>
              <button>
                <Link
                  to={{
                    pathname: `/create`,
                    prepopulate: true,
                    customId: `${recipe.smoothie.recipe_id}`,
                  }}
                >
                  customize
                </Link>
              </button>
              <button onClick={this.props.click}>
                <Link
                  to={{
                    pathname: `/recipe/${recipe.smoothie.recipe_id}#ReviewForm`,
                    reviewOn: true,
                  }}
                >
                  review
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>favorite</button>
              <button>customize</button>
              <button>review</button>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default RecipeButtons;
