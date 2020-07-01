import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import RecipeBox2 from './RecipeBox2'
import Accordion from './Accordion'
import AddNewIngredient from './AddNewIngredient'
import UserDataContext from '../../contexts/UserDataContext'
import './CreatePage.css'

class CreatePage2 extends Component {

constructor(props) {
    super(props)
    this.state = {
        recipeStrings: []
    }
}

static contextType = UserDataContext

componentDidMount() {
    const id = this.props.location.customId
    if (id) {
        const recipe = this.context.findRecipe(Number(id));
        this.setState({ recipeStrings: recipe.recipe })
    }
}

showNewItemForm = (event) => {
    const showForm = this.state.showForm
    this.setState({
        showForm: !showForm
    })
}

displayRecipeStrings = (recipeString) => {
    const recipeStrings = this.state.recipeStrings
    const newRecipeStrings = recipeStrings.concat(recipeString)
    this.setState({ recipeStrings: newRecipeStrings })
}

deleteStringItem = (event, recipeString) => {
    event.preventDefault();
    this.setState({
        recipeStrings: this.state.recipeStrings.filter(r => r !== recipeString)
    });
}

render() {
    const recipeProps = this.state.recipeStrings
    return (
        <div className="CreatePage">
            <main className="CreatePage__Main">
                <div className="CreatePage__Main__FlexBox">
                    <RecipeBox2 
                        recipeProps={recipeProps} 
                        deleteStringItem={this.deleteStringItem}
                        displayRecipeStrings={this.displayRecipeStrings}
                    />
                    <Accordion 
                        stringDisplay={this.displayRecipeStrings} 
                    />
                    <div className="Ingredients__AddNew">
                        <h5>Can't find your favorite ingredient? Click below to add it to our database!</h5>
                        <button onClick={this.showNewItemForm}>Add new ingredient</button>
                            {this.state.showForm &&
                                <AddNewIngredient />
                            }
                    </div>
                </div>
            </main>
        </div>
    )
}

}

export default withRouter(CreatePage2)