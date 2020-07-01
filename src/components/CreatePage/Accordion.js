import React, { Component } from 'react'
import IngredientsDataContext from '../../contexts/IngredientsDataContext'
import './CreatePage.css'

class Accordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openCategory: null,
        }
    }
    
    static contextType = IngredientsDataContext

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
        const ingredientName = event.target.ingredient.value
        const ingredientAmount = event.target.amount.value
        const ingredientUnits = event.target.units.value
        const recipeString = ingredientAmount + ' ' + ingredientUnits + ' ' + ingredientName
        this.props.stringDisplay(recipeString)
    }

    render () {
        const { openCategory } = this.state;
        const data = this.context.ingredientsData
        return (
            <div className="Ingredients__Box">
                <h3>Pick your ingreditents</h3>
                <div className="Ingredients__List">
                    {data.map(d => 
                        <div className="Ingredients__Category" key={d.id}>
                            <h4>
                                <button onClick={event => this.changeAccordion(event, d.id)}>
                                    {d.category}
                                </button>
                            </h4>
                            {d.id === openCategory &&
                                d.ingredients.map(i => 
                                    <div className="Ingredients__Item" key={i}>
                                        <form onSubmit={this.handleAddRecipeItem}>
                                            <span>{i}</span>
                                            <input
                                                type="hidden"
                                                name="ingredient"
                                                id="ingredient"
                                                value={i}
                                            />
                                            <input
                                                name="amount"
                                                id="amount"
                                                type="text"
                                                placeholder="amount"
                                                size="6"
                                                required
                                            />
                                            <input
                                                name="units"
                                                id="units"
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
            </div>
        )
    }
}

export default Accordion