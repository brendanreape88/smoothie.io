import React, { Component } from 'react'
import HomePageDisplay from './HomePageDisplay'
import SmoothieContext from '../../contexts/SmoothieContext'
import RecipesApiService from '../../services/recipes-api-service'
import FavoritesApiService from '../../services/favorites-api-service'
import './HomePage.css'

class HomePage extends Component {

  static contextType = SmoothieContext

  componentDidMount() {
    const id = this.context.user ? this.context.user.id : 0
    Promise.all([
      RecipesApiService.getRecipes(),
      FavoritesApiService.getFavoritesforUser(id)
    ])
    .then(data => {
      const recipes = data[0]
      const favorites = data[1]
      this.context.updateRecipes(recipes)
      this.context.updateFavorites(favorites)
    })
  }

  handleFavorite = (recipe_id) => {
    const user_id = this.context.user ? this.context.user.id : 0
    if(user_id === 0) {
      alert('Please login to add recipes to your favorites list!')
    } else {
        FavoritesApiService.postFavorites(user_id, recipe_id)
        .then(result => {
          this.context.toggleFavorites(recipe_id, result.favorite)
        })
    }
  }

    render() {
        const id = this.context.user ? this.context.user.id : 0
        const section = this.props.section || "all";
        let recipes;
        switch (section) {
          case 'favorites':
            recipes = this.context.favorites;
            break;

          case "user":
            recipes = this.context.recipesForUser(id);
            break;

          default:
            recipes = this.context.recipes;
        }

        return (
            <div className="HomePage">
                <main className="HomePage__Main">
                  {!recipes
                    ? (
                      <div className="Getting_Smoothies">
                        <h3>getting smoothies...</h3>
                      </div>
                    )
                    : (
                      <HomePageDisplay 
                        recipes={recipes} 
                        section={section}
                        favorite={this.handleFavorite}
                      />
                    )
                  }
                </main>
            </div>
        )
    }
}

export default HomePage