import React, { Component } from 'react'
import UserDataContext from '../../contexts/UserDataContext'
import RecipeDisplay from './RecipeDisplay'
import RecipeButtons from './RecipeButtons'
import ReviewForm from './ReviewForm'
import ReviewBox from './ReviewBox'
import './RecipePage.css'

class RecipePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: this.props.location.reviewOn ? this.props.location.reviewOn : false
        }
    }

    static contextType = UserDataContext

    handleFavorite = (recipeId) => {
        this.context.toggleFavorites(recipeId)
    }

    handleReviewButtonClick = (event) => {
        const showForm = this.state.showForm
        this.setState({
            showForm: !showForm
        })
    }

    render() {
        const [id] = this.props.match.params.recipeId.split('#');
        const recipe = this.context.findRecipe(Number(id));
        const reviews = this.context.findReviews(Number(id));
        return (
            <div className="RecipePage">
                <main className="RecipePage__Main">
                    <RecipeDisplay match={recipe}/>
                    <RecipeButtons match={recipe} 
                        click={this.handleReviewButtonClick}
                        favorite={this.handleFavorite}
                    />
                    {this.state.showForm &&
                        <ReviewForm match={recipe}/>
                    }
                    <ReviewBox match={reviews}
                        click={this.handleReviewButtonClick}
                    />
                </main>
            </div>
        )
    }
}

export default RecipePage