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
    this.state = {}
}

showNewItemForm = (event) => {
    const showForm = this.state.showForm
    this.setState({
        showForm: !showForm
    })
}

render() {
    
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