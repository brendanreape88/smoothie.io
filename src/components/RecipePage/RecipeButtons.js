import React, { Component } from 'react'
import './RecipePage.css'

class RecipeButtons extends Component {
    render() {
        return (
            <section className="RecipePage__BottomButtons">
                <div className="RecipePage__BottomButtons__FlexBox">
                    <button>favorite</button>
                    <button>customize</button>
                    <button
                        onClick={this.handleReviewButtonClick}
                    >
                        review
                    </button>
                </div>
            </section>
        )
    }
}

export default RecipeButtons