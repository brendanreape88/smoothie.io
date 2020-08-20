import React, { Component } from "react";

const SmoothieContext = React.createContext({
  favorites: [],
  ingredients: [],
  recipe: {},
  recipes: [],
  reviews: [],
  user: null,
  favoriteRecipes: () => {},
  updateFavorites: () => {},
  toggleFavorites: () => {},
  updateIngredients: () => {},
  updateRecipe: () => {},
  updateRecipes: () => {},
  findRecipe: (id) => {},
  recipesForUser: (id) => {},
  updateReviews: () => {},
  findReviews: (id) => {},
  handleReviewSubmit: () => {},
  logIn: () => {},
  logOut: () => {},
});

export default SmoothieContext;

export class SmoothieProvider extends Component {
  state = {
    favorites: [],
    ingredients: [],
    recipe: {},
    recipes: [],
    reviews: [],
    user: null,
  };

  favoriteRecipes() {
    const { recipes, userData } = this.state;
    return recipes.filter((r) => userData.userFavorites.includes(r.id));
  }

  updateFavorites = (favorites) => {
    this.setState({ favorites });
  };

  toggleFavorites = (recipeId, favorite) => {
    const favoritesArray = this.state.favorites;
    if (favoritesArray.find((f) => f.recipe_id === recipeId)) {
      const removeItemArray = favoritesArray.filter(
        (f) => f.recipe_id !== recipeId
      );
      this.setState({ favorites: removeItemArray });
    } else {
      this.setState({ favorites: [...this.state.favorites, favorite] });
    }
  };

  updateIngredients = (ingredients) => {
    this.setState({ ingredients });
  };

  updateRecipe = (recipe) => {
    this.setState({ recipe });
  };

  updateRecipes = (recipes) => {
    this.setState({ recipes });
  };

  findRecipe(id) {
    return this.state.recipes.find((r) => r.id === id);
  }

  recipesForUser(id) {
    const { recipes } = this.state;
    return recipes.filter((r) => r.user_id === id);
  }

  updateReviews = (reviews) => {
    this.setState({ reviews });
  };

  findReviews(id) {
    return this.state.reviews.filter((r) => r.recipeId === id);
  }

  handleReviewSubmit = (headline, review, recipeId, userName, userId) => {
    const reviews = this.state.reviews;
    this.setState({
      reviews: reviews.concat({
        recipeId: recipeId,
        userName: userName,
        userId: userId,
        headline: headline,
        review: review,
      }),
    });
  };

  logIn = (user) => {
    this.setState({ user });
  };

  logOut = (event) => {
    this.setState({ user: null });
  };

  render() {
    const value = {
      favorites: this.state.favorites,
      ingredients: this.state.ingredients,
      recipe: this.state.recipe,
      recipes: this.state.recipes,
      reviews: this.state.reviews,
      user: this.state.user,
      favoriteRecipes: () => this.favoriteRecipes(),
      updateFavorites: this.updateFavorites,
      toggleFavorites: this.toggleFavorites,
      updateIngredients: this.updateIngredients,
      updateRecipe: this.updateRecipe,
      updateRecipes: this.updateRecipes,
      findRecipe: (id) => this.findRecipe(id),
      recipesForUser: (id) => this.recipesForUser(id),
      updateReviews: this.updateReviews,
      findReviews: (id) => this.findReviews(id),
      handleReviewSubmit: this.handleReviewSubmit,
      logIn: this.logIn,
      logOut: this.logOut,
    };
    return (
      <SmoothieContext.Provider value={value}>
        {this.props.children}
      </SmoothieContext.Provider>
    );
  }
}
