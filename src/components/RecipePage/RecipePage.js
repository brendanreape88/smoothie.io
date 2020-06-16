import React, { Component } from 'react'
import RecipeDisplay from './RecipeDisplay'
import RecipeButtons from './RecipeButtons'
import ReviewForm from './ReviewForm'
import ReviewBox from './ReviewBox'
import './RecipePage.css'

class RecipePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false
        }
    }

    handleReviewButtonClick = (event) => {
        const showForm = this.state.showForm
        this.setState({
            showForm: !showForm
        })
    }

    render() {
        return (
            <div className="RecipePage">
                <main className="RecipePage__Main">
                    <RecipeDisplay />
                    <RecipeButtons />
                    {this.state.showForm &&
                        <ReviewForm />
                    }
                    <ReviewBox />
                </main>
            </div>
        )
    }
}

export default RecipePage