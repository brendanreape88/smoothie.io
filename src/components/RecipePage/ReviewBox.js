import React, { Component } from "react";
import "./RecipePage.css";

class ReviewBox extends Component {
  render() {
    const reviews = this.props.reviews || [
      {
        headline: "loading",
        review: "loading",
        user_pic: "loading",
        user_name: "loading",
      },
    ];

    //If there are no reviews for the recipe that is being viewed by the user,
    //they will see a message saying that there are no reviews. Otherwise they
    //will see the complete list of reviews as returned by the database.

    return (
      <section className="RecipePage__ReviewsBox">
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <div className="TernaryBox">
            <h3>No reviews yet</h3>
            <h5>Be the first to leave a review!</h5>
            <button onClick={this.props.click}>review</button>
          </div>
        ) : (
          reviews.map((r) => (
            <div className="IndividualReviewBox" key={r.headline}>
              <div className="IndividualReviewBox__User">
                <img src={r.user_pic} alt={`avatar for ${r.user_name}`} />
                <span>{r.user_name}</span>
              </div>
              <div className="IndividualReviewBox__Review">
                <h4>"{r.headline}"</h4>
                <span>"{r.review}"</span>
              </div>
            </div>
          ))
        )}
      </section>
    );
  }
}

export default ReviewBox;
