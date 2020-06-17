import React, { Component } from 'react'
import ingredientsDataContext from '../../contexts/ingredientsDataContext'
import './CreatePage.css'

class IngredientsAccordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openCategory: null,
        }
    }
    
    static contextType = ingredientsDataContext

    changeAccordion(event, id) {
        event.preventDefault();
        if (id === this.state.openCategory) {
          this.setState({ openCategory: null })
        } else {
          this.setState({ openCategory: id })
        } 
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

    render () {
        const { openCategory } = this.state;
        const data = this.context.ingredientsData
        console.log(data)
        return (
            <div className="Ingredients__List">
                {data.map(d => 
                    <div className="Ingredients__Category">
                        <h4>
                            <button onClick={event => this.changeAccordion(event, d.id)}>
                                {d.category}
                            </button>
                        </h4>
                        {d.id === openCategory &&
                            d.ingredients.map(i => 
                                <div className="Ingredients__Item">
                                    <form onSubmit={this.handleAddRecipeItem}>
                                        <label>{i}</label>
                                        <input
                                            name="amount" 
                                            type="text"
                                            placeholder="amount"
                                            size="6"
                                        />
                                        <input
                                            name="units"
                                            type="text"
                                            placeholder="units"
                                            size="4"
                                        />
                                        <button>add</button>
                                    </form>
                                </div>
                            )}   
                    </div>
                )}
            </div>
        )
    }
}

export default IngredientsAccordion