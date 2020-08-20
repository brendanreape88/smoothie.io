import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SmoothieContext from "../../contexts/SmoothieContext";
import RecipesApiService from "../../services/recipes-api-service";
import "./CreatePage.css";

class RecipeBox extends Component {
  //State is being used to check if this component was accessed by the user through
  //the clicking of one of the "customize" buttons. If that button is clicked, the
  //user wants to edit an existing recipe, so their form is prepopulated with the
  //data from the recipe they selected.

  constructor(props) {
    super(props);
    this.state = {
      prepopulate: this.props.location.prepopulate
        ? this.props.location.prepopulate
        : false,
      thanks: false,
    };
  }

  static contextType = SmoothieContext;

  //handleRecipeSubmit sends a newly created recipe to the smoothie.io database
  //then dsplays a thank you message for the user.

  handleRecipeSubmit = (event) => {
    event.preventDefault();
    const user_id = this.context.user ? this.context.user.id : 0;
    if (user_id === 0) {
      alert("Please login to publish your recipe!");
    } else {
      const smoothie_name = event.target.title.value;
      const smoothie_pic = "https://i.ibb.co/VSS1v7M/smoothie-art-png-tiny.png";
      const user_id = this.context.user.id;
      const recipeArray = this.props.recipeArray;
      if (recipeArray.length === 0) {
        alert("Please add at least one ingredient before publishing!");
      } else if (!smoothie_name) {
        alert("Please name your smoothie before publishing!");
      } else {
        const ingredients = recipeArray.map((r) => {
          delete r.title;
          return r;
        });
        RecipesApiService.postRecipe(
          smoothie_name,
          smoothie_pic,
          ingredients,
          user_id
        );
        this.setState({ thanks: true });
      }
    }
  };

  render() {
    const prepopulate = this.props.location.prepopulate;
    const recipe = this.props.recipe;
    const recipeArray = this.props.recipeArray || [];
    return (
      <>
        {this.state.thanks ? (
          <div className="thanksBox">
            <h2>Thank you!</h2>
            <h3>We got your submission : )</h3>
            <h4>
              <Link to="/home">Head back to all smoothies</Link>
            </h4>
          </div>
        ) : (
          <form onSubmit={this.handleRecipeSubmit} className="RecipeForm">
            <div className="RecipeTitle">
              <label htmlFor="title"></label>
              {prepopulate ? (
                <input
                  type="text"
                  placeholder={!recipe ? "Loading.." : recipe.smoothie_name}
                  name="title"
                  id="title"
                  required
                />
              ) : (
                <input
                  type="text"
                  placeholder="My Awesome Smoothie"
                  name="title"
                  id="title"
                  required
                />
              )}
              <br />
              Name your smoothie!
            </div>
            <br />
            <div className="Recipe__Box">
              {recipeArray.length === 0 ? (
                <div className="Recipe__Item">
                  <h3>Add ingredients below to start making your recipe.</h3>
                </div>
              ) : (
                recipeArray.map((r) => (
                  <div className="Recipe__Item" key={r.id}>
                    <h3>
                      {r.quantity} {r.units} {r.title}
                    </h3>
                    <button onClick={(e) => this.props.deleteRecipeLine(e, r)}>
                      x
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="Buttons__Box">
              <button type="submit">publish</button>
            </div>
          </form>
        )}
      </>
    );
  }
}

export default withRouter(RecipeBox);
