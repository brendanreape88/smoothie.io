import React, { Component } from 'react'
import HomePageDisplay from './HomePageDisplay'
import UserDataContext from '../../contexts/UserDataContext'
import './HomePage.css'

class HomePage extends Component {

  static contextType = UserDataContext

  handleFavorite = (recipeId) => {
    this.context.toggleFavorites(recipeId)
  }

    render() {
        const section = this.props.section || "all";
        let recipes;
        switch (section) {
          case 'favorites':
            recipes = this.context.favoriteRecipes();
            break;

          case "user":
            recipes = this.context.recipesForUser();
            break;

          default:
            recipes = this.context.recipeData;
        }

        return (
            <div className="HomePage">
                <main className="HomePage__Main">
                    <HomePageDisplay 
                      recipeData={recipes} 
                      section={section}
                      favorite={this.handleFavorite}
                    />
                </main>
            </div>
        )
    }
}

export default HomePage