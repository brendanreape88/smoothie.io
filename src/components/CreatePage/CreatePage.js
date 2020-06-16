import React, { Component } from 'react'
import RecipeTitle from './RecipeTitle'
import RecipeBox from './RecipeBox'
import ButtonsBox from './ButtonsBox'
import IngredientsAccordion from './IngredientsAccordion'
import AddNewIngredient from './AddNewIngredient'
import './CreatePage.css'

class CreatePage extends Component {

constructor(props) {
    super(props)
    this.state = {
        openCategory: null,
    }
}

changeAccordion(event, id) {
  event.preventDefault();
  if (id === this.state.openCategory) {
    this.setState({ openCategory: null })
  } else {
    this.setState({ openCategory: id })
  } 
}

showNewItemForm = (event) => {
    const showForm = this.state.showForm
    this.setState({
        showForm: !showForm
    })
}

handleAddRecipeItem = (event) => {
    event.preventDefault();
    const ingredientName = event.target.label.value
    const ingredientAmount = event.target.amount.value
    const ingredientUnits = event.target.units.value
    const recipeString = ingredientAmount + ' ' + ingredientUnits + ' ' + ingredientName
    console.log(recipeString)
    const newRecipe = []
    newRecipe.push(recipeString)
    console.log(newRecipe)
}

handleAddNewItem = (event) => {
    event.preventDefault();
    const itemCategory = event.target.newItemCategory.value
    console.log(itemCategory)
    const itemName = event.target.newItemName.value
    console.log(itemName)
}


render() {
    //const { openCategory } = this.state;
    return (
        <div className="CreatePage">
            <main className="CreatePage__Main">
                <RecipeTitle />
                <div className="CreatePage__Main__FlexBox">
                    <RecipeBox />
                    <ButtonsBox />
                    <div className="Ingredients__Box">
                        <h3>Pick your ingreditents</h3>
                        <IngredientsAccordion />
                        <div className="Ingredients__AddNew">
                            <button onClick={this.showNewItemForm}>Add new ingredient</button>
                            {this.state.showForm &&
                                <AddNewIngredient />
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

}

export default CreatePage