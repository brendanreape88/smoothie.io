import React, { Component } from 'react'
import userDataContext from '../../contexts/userDataContext'
import './RecipePage.css'

class RecipeDisplay extends Component {
    static contextType = userDataContext
    render() {
        const recipe = this.props.match
        return (
            <section className="RecipePage__RecipeDisplay">
                <h1>{recipe.smoothieName}</h1>
                <h3>made by {recipe.userName}</h3>
                <div className="RecipePage__RecipeDisplay__FlexBox">
                    <img 
                        src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                        alt="delicious green smoothie surrounded by fruit and kale"
                    />
                    <div className="RecipeBox">
                        <h3>Recipe</h3>
                            <ul>
                                {recipe.recipe.map(r => 
                                    <li>{r}</li>
                                )}
                            </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default RecipeDisplay