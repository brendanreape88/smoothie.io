import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import Accordion from "./Accordion";
import AddNewIngredient from "./AddNewIngredient";
import SmoothieContext from "../../contexts/SmoothieContext";
import RecipesApiService from "../../services/recipes-api-service";
import "./CreatePage.css";

class CreatePage extends Component {
  //Within the state for this component, 'recipe' holds the data for a recipe already
  //within the smoothie.io database, while 'recipeArray' holds objects that are created
  //by the user when making a new recipe, or additions to an existing recipe. 'recipe'
  //will only hold data if the user navigates to this component by clicking a "customize"
  //button, signaling that they want to edit an existing smoothie rather than create one
  //from sctatch.

  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      recipeArray: [],
    };
  }

  static contextType = SmoothieContext;

  componentDidMount() {
    const recipeId = this.props.location.customId;
    if (recipeId) {
      RecipesApiService.getRecipe(recipeId).then((recipe) => {
        this.context.updateRecipe(recipe);
        this.setState({ recipe: recipe.smoothie });
        this.setState({ recipeArray: recipe.smoothie.ingredients });
      });
    }
  }

  showNewItemForm = (event) => {
    const user_id = this.context.user ? this.context.user.id : 0;
    if (user_id === 0) {
      alert("Please login to add new new ingredients to our database!");
    } else {
      const showForm = this.state.showForm;
      this.setState({
        showForm: !showForm,
      });
    }
  };

  recipeLineDisplay = (newRecipeLine) => {
    const recipeArray = this.state.recipeArray;
    const newRecipeLines = recipeArray.concat(newRecipeLine);
    this.setState({ recipeArray: newRecipeLines });
  };

  deleteRecipeLine = (event, recipeLine) => {
    event.preventDefault();
    this.setState({
      recipeArray: this.state.recipeArray.filter((r) => r !== recipeLine),
    });
  };

  render() {
    const recipe = this.state.recipe;
    const recipeArray = this.state.recipeArray;
    return (
      <div className="CreatePage">
        <main className="CreatePage__Main">
          <div className="CreatePage__Main__FlexBox">
            <RecipeBox
              recipe={recipe}
              recipeArray={recipeArray}
              deleteRecipeLine={this.deleteRecipeLine}
              recipeLineDisplay={this.recipeLineDisplay}
            />
            <Accordion recipeLineDisplay={this.recipeLineDisplay} />
            <div className="Ingredients__AddNew">
              <h5>
                Can't find your favorite ingredient? Click below to add it to
                our database!
              </h5>
              <button onClick={this.showNewItemForm}>New Ingredient</button>
              <br />
              <br />
              {this.state.showForm && <AddNewIngredient />}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(CreatePage);
