import React, { Component } from 'react'
import './RecipePage.css'

class ReviewBox extends Component {
    render() {
        return (
            <section className="RecipePage__ReviewsBox">
                <h3>Reviews</h3>
                    <div className="IndividualReviewBox">
                        <div className="IndividualReviewBox__User">
                            <img
                                src="https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg"
                                alt="delicious green smoothie surrounded by fruit and kale"
                            />
                                    <span>username</span>
                        </div>
                        <div className="IndividualReviewBox__Review">
                            <h4>headline</h4>
                            <span>review</span>
                        </div>
                    </div>
            </section>
        )
    }
}

export default ReviewBox