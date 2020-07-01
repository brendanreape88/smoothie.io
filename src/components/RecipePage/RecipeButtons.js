import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './RecipePage.css'

class RecipeButtons extends Component {

    render() {
        const recipe = this.props.match
        return (
            <section className="RecipePage__BottomButtons">
                <div className="RecipePage__BottomButtons__FlexBox">
                    <button
                        onClick={() => this.props.favorite(recipe.id)}

                    >
                        favorite
                    </button>
                    <button>
                        <Link to={{
                            pathname: `/create`,
                            prepopulate: true,
                            customId: `${recipe.id}`
                        }}>
                            customize
                        </Link>
                    </button>
                    <button
                        onClick={this.props.click}
                    >
                        review
                    </button>
                </div>
            </section>
        )
    }
}

export default RecipeButtons