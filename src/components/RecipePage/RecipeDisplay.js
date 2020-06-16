import React, { Component } from 'react'
import './RecipePage.css'

class RecipeDisplay extends Component {
    render() {
        return (
            <section className="RecipePage__RecipeDisplay">
                <h1>smoothie name</h1>
                <h3>made by username</h3>
                <div className="RecipePage__RecipeDisplay__FlexBox">
                    <img 
                        src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg" 
                        alt="delicious green smoothie surrounded by fruit and kale"
                    />
                    <div className="RecipeBox">
                        <h3>Recipe</h3>
                            <ul>
                                <li>recipe string</li>
                            </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default RecipeDisplay