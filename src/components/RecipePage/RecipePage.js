import React, { Component } from "react";
import SmoothieContext from "../../contexts/SmoothieContext";
import RecipesApiService from "../../services/recipes-api-service";
import ReviewsApiService from "../../services/reviews-api-service";
import FavoritesApiService from "../../services/favorites-api-service";
import RecipeDisplay from "./RecipeDisplay";
import RecipeButtons from "./RecipeButtons";
import ReviewForm from "./ReviewForm";
import ReviewBox from "./ReviewBox";
import "./RecipePage.css";

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm:
        this.props.location && this.props.location.reviewOn
          ? this.props.location.reviewOn
          : false,
    };
  }

  static contextType = SmoothieContext;

  //Within the componentDidMount, the id for the recipe that is to be displayed is
  //grabbed from the params of the props. Then two fetch requests are made: (1) to
  //get the data for the recipe with the matching id, and (2) to get all the reviews
  //for that recipe.

  componentDidMount() {
    const [recipeId] =
      this.props &&
      this.props.match &&
      this.props.match.params.recipeId.split("#")
        ? this.props.match.params.recipeId.split("#")
        : [0];
    Promise.all([
      RecipesApiService.getRecipe(recipeId),
      ReviewsApiService.getReviews(recipeId),
    ]).then((data) => {
      const recipe = data[0];
      const reviews = data[1];
      this.context.updateRecipe(recipe);
      this.context.updateReviews(reviews);
    });
  }

  handleFavorite = (recipe_id) => {
    const user_id = this.context.user ? this.context.user.id : 0;
    if (user_id === 0) {
      alert("Please login to add recipes to your favorites list!");
    } else {
      FavoritesApiService.postFavorites(recipe_id, user_id).then((result) => {
        console.log(result);
      });
    }
  };

  handleReviewButtonClick = (event) => {
    const user_id = this.context.user ? this.context.user.id : 0;
    if (user_id === 0) {
      alert("Please login to leave a review!");
    } else {
      const showForm = this.state.showForm;
      this.setState({
        showForm: !showForm,
      });
    }
  };

  render() {
    const recipe = this.context.recipe;
    const reviews = this.context.reviews;
    return (
      <div className="RecipePage">
        <main className="RecipePage__Main">
          <RecipeDisplay recipe={recipe} />
          <RecipeButtons
            recipe={recipe}
            click={this.handleReviewButtonClick}
            favorite={this.handleFavorite}
          />
          {this.state.showForm && <ReviewForm recipe={recipe} />}
          <ReviewBox reviews={reviews} click={this.handleReviewButtonClick} />
        </main>
      </div>
    );
  }
}

export default RecipePage;
