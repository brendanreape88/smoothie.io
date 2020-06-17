import React, { Component } from 'react'
import userDataContext from '../../contexts/userDataContext'
import RecipeDisplay from './RecipeDisplay'
import RecipeButtons from './RecipeButtons'
import ReviewForm from './ReviewForm'
import ReviewBox from './ReviewBox'
import { findRecipe } from '../../helpers'
import './RecipePage.css'

class RecipePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false
        }
    }

    static contextType = userDataContext

    handleReviewButtonClick = (event) => {
        const showForm = this.state.showForm
        this.setState({
            showForm: !showForm
        })
    }

    render() {
        const data = this.context.userData
        const userRecipes = data.reduce((results, d) => [...results, ...d.userRecipes], [])
        const { recipeId } = this.props.match.params
        const recipe = findRecipe(userRecipes, recipeId)
        return (
            <div className="RecipePage">
                <main className="RecipePage__Main">
                    <RecipeDisplay match={recipe}/>
                    <RecipeButtons match={recipe}/>
                    {this.state.showForm &&
                        <ReviewForm match={recipe}/>
                    }
                    <ReviewBox match={recipe}/>
                </main>
            </div>
        )
    }
}

export default RecipePage