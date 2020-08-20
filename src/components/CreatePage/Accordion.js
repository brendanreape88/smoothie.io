import React, { Component } from "react";
import SmoothieContext from "../../contexts/SmoothieContext";
import IngredientsApiService from "../../services/ingredients-api-service";
import "./CreatePage.css";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCategory: null,
    };
  }

  static contextType = SmoothieContext;

  componentDidMount() {
    IngredientsApiService.getIngredients().then((ingredients) => {
      this.context.updateIngredients(ingredients);
    });
  }

  //changeAccordion toggles the state for the from (open or closed) of the category with the matching id

  changeAccordion(event, id) {
    event.preventDefault();
    if (id === this.state.openCategory) {
      this.setState({ openCategory: null });
    } else {
      this.setState({ openCategory: id });
    }
  }

  //handleAddRecipeItem sends the data for a new recipe line to the parent component (CreatePage.js) to
  //update state and display those changes in a sibling component (RecipeBox.js)

  handleAddRecipeItem = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const ingredient_id = event.target.ingredient_id.value;
    const quantity = event.target.quantity.value;
    const units = event.target.units.value;
    const newRecipeLine = { ingredient_id, title, quantity, units };
    this.props.recipeLineDisplay(newRecipeLine);
  };

  render() {
    const { openCategory } = this.state;
    const ingredients = this.context.ingredients;
    const categories = [...new Set(ingredients.map((i) => i.category))];
    const ingredientsFor = (c) => ingredients.filter((i) => i.category === c);
    return (
      <div className="Ingredients__Box">
        <h3>Pick your ingreditents</h3>
        <div className="Ingredients__List">
          {categories.map((c) => (
            <div className="Ingredients__Category" key={c}>
              <button onClick={(event) => this.changeAccordion(event, c)}>
                {c}
              </button>
              {c === openCategory &&
                ingredientsFor(c).map((i) => (
                  <div className="Ingredients__Item" key={i.id}>
                    <form
                      className="accordionForm"
                      onSubmit={this.handleAddRecipeItem}
                    >
                      <span>{i.title}</span>
                      <input
                        type="hidden"
                        name="ingredient_id"
                        id="ingredient_id"
                        value={i.id}
                      />
                      <input
                        type="hidden"
                        name="title"
                        id="title"
                        value={i.title}
                      />
                      <input
                        name="quantity"
                        id="quantity"
                        type="text"
                        placeholder="quantity"
                        size="7"
                        required
                      />
                      <input
                        name="units"
                        id="units"
                        type="text"
                        placeholder="units"
                        size="4"
                      />
                      <button className="add">add</button>
                    </form>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Accordion;
