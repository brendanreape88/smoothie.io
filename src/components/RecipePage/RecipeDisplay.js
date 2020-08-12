import React, { Component } from 'react'
import './RecipePage.css'

class RecipeDisplay extends Component {

    render() {
        const recipe = this.props.recipe || {recipe: "loading"}
        const userData = recipe.user || {user_name: "loading"}
        const smoothieData = recipe.smoothie || {smoothie: "loading", ingredients: ["loading"]}
        return (
            <>
                {!smoothieData
                    ? (
                        <div>
                            <h1>loading...</h1>
                        </div>
                    )
                    : (
                        <section className="RecipePage__RecipeDisplay">
                            <h1>{smoothieData.smoothie_name}</h1>
                            <h3>made by {userData.user_name}</h3>
                            <div className="RecipePage__RecipeDisplay__FlexBox">
                                <img 
                                    src={smoothieData.smoothie_pic} 
                                    alt={`delicious smoothie named ${smoothieData.smoothie_name}`}
                                />
                                <div className="RecipeBox">
                                    <h3>Recipe</h3>
                                        <ul>
                                            {smoothieData.ingredients.map(i => 
                                                <>
                                                    <li key={i.title}>
                                                        {i.quantity} {i.units} {i.title}
                                                    </li>
                                                    <br/>
                                                </>
                                            )}
                                        </ul>
                                </div>
                            </div>
                        </section>
                    )
                }
            </>
        )
    }
}

export default RecipeDisplay