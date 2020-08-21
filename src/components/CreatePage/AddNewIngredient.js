import React, { Component } from "react";
import SmoothieContext from "../../contexts/SmoothieContext";
import IngredientsApiService from "../../services/ingredients-api-service";
import "./CreatePage.css";

class AddNewIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientSubmitted: false,
    };
  }

  static contextType = SmoothieContext;

  //handleAddNewItem submits a new ingredient to the smoothie.io database

  handleAddNewItem = (event) => {
    event.preventDefault();
    const category = event.target.newItemCategory.value;
    const title = event.target.newItemTitle.value;
    IngredientsApiService.postIngredient(title, category).then(
      (newIngredient) => {
        this.context.addIngredient(newIngredient[0]);
      }
    );

    this.setState({ ingredientSubmitted: true });
  };

  addAnother = (event) => {
    event.preventDefault();
    this.setState({ ingredientSubmitted: false });
  };

  render() {
    const ingredients = this.context.ingredients;
    const categories = [...new Set(ingredients.map((i) => i.category))];
    return (
      <>
        {this.state.ingredientSubmitted ? (
          <div>
            <h1>Thanks!</h1>
            <h3>We got your submission : )</h3>
            <button onClick={this.addAnother}>add another</button>
          </div>
        ) : (
          <form className="newIngredientForm" onSubmit={this.handleAddNewItem}>
            <label>Category:</label>
            <select name="newItemCategory">
              {categories.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
            <br />
            <br />
            <label>Name:</label>
            <input name="newItemTitle" type="text" placeholder="ie: starfuit" />
            <br />
            <br />
            <button>add</button>
          </form>
        )}
      </>
    );
  }
}

export default AddNewIngredient;
