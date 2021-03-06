import React, { Component } from "react";
import SmoothieContext from "../../contexts/SmoothieContext";
import ReviewsApiService from "../../services/reviews-api-service";
import "./RecipePage.css";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThanks: false,
    };
  }

  static contextType = SmoothieContext;

  //handleReviewSubmit sends the review to be posted in the smoothie.io
  //database, then displays a thank you message for the user.

  handleReviewSubmit = (event) => {
    event.preventDefault();
    const headline = event.target.headline.value;
    const review = event.target.review.value;
    const recipe_id = this.props.recipe.smoothie.recipe_id;
    const user_id = this.props.recipe.user.user_id;
    ReviewsApiService.postReview(headline, review, recipe_id, user_id);
    this.handleSubmitTernary();
  };

  handleSubmitTernary = (event) => {
    const showThanks = this.state.showThanks;
    this.setState({
      showThanks: !showThanks,
    });
  };

  render() {
    const showThanks = this.state.showThanks;
    return (
      <section className="RecipePage__ReviewForm" id="ReviewForm">
        {showThanks ? (
          <div className="TernaryBox">
            <h3>Thanks!</h3>
            <h5>We appriciate your review.</h5>
          </div>
        ) : (
          <form onSubmit={this.handleReviewSubmit}>
            <label htmlFor="headline">Add a headline</label>
            <br />
            <input
              type="text"
              placeholder="What's most important to know?"
              size="33"
              name="headline"
              id="headline"
              required
            />
            <br />
            <label htmlFor="review">Write your review</label>
            <br />
            <textarea
              placeholder='Was this smoothie "yay" or "nay"? Why?'
              rows="10"
              cols="50"
              name="review"
              id="review"
              required
            />
            <br />
            <button>submit</button>
          </form>
        )}
      </section>
    );
  }
}

export default ReviewForm;
