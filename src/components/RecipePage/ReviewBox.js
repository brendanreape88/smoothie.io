import React, { Component } from 'react'
import userDataContext from '../../contexts/userDataContext'
import './RecipePage.css'

class ReviewBox extends Component {
    static contextType = userDataContext
    render() {
        const recipe = this.props.match
        return (
            <section className="RecipePage__ReviewsBox">
                <h3>Reviews</h3>
                {!recipe.reviews 
                    ? (
                        <div className="IndividualReviewBox">
                            <h3>No reviews yet</h3>
                            <h5>Be the first to leave a review!</h5>
                            <button onClick={this.handleReviewButtonClick}>review</button>
                        </div>
                    )
                    : (
                        recipe.reviews.map(r => 
                            <div className="IndividualReviewBox">
                                <div className="IndividualReviewBox__User">
                                    <img
                                        src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg"
                                        alt="delicious green smoothie surrounded by fruit and kale"
                                    />
                                    <span>{r.userName}</span>
                                </div>
                                <div className="IndividualReviewBox__Review">
                                    <h4>{r.headline}</h4>
                                    <span>{r.review}</span>
                                </div>
                            </div>
                        )
                    )
                }
            </section>
        )
    }
}

export default ReviewBox