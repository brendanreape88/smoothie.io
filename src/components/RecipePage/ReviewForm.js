import React, { Component } from 'react'
import UserDataContext from '../../contexts/UserDataContext'
import './RecipePage.css'

class ReviewForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showThanks: false
        }
    }

    static contextType = UserDataContext

    handleReviewSubmit = (event) => {
        event.preventDefault();
        const headline = event.target.headline.value
        const review = event.target.review.value
        const recipeId = this.props.match.id
        const userName = this.context.userData.userName
        const userId = this.context.userData.id
        this.context.handleReviewSubmit(headline, review, recipeId, userName, userId)
        this.handleSubmitTernary();
    }

    handleSubmitTernary = (event) => {
        const showThanks = this.state.showThanks
        this.setState({
            showThanks: !showThanks
        })
    }

    render() {
        const showThanks = this.state.showThanks
        return (
            <section className="RecipePage__ReviewForm" id="ReviewForm">
                {showThanks
                    ? (
                        <div className="TernaryBox">
                            <h3>Thanks!</h3>
                            <h5>We appriciate your review.</h5>
                        </div>
                    )
                    : (
                        <form onSubmit={this.handleReviewSubmit}>
                            <label htmlFor="headline">
                                Add a headline
                            </label>
                            <br/>
                            <input
                                type="text"
                                placeholder="What's most important to know?"
                                size="33"
                                name="headline"
                                id="headline"
                                required
                            />
                            <br/>
                            <label htmlFor="review">
                                Write your review
                            </label>
                            <br/>
                            <textarea
                                placeholder='Was this smoothie "yay" or "nay"? Why?'
                                rows="10"
                                cols="50"
                                name="review"
                                id="review"
                                required
                            />
                            <br/>
                            <button>submit</button>
                        </form>
                    )
                }
            </section>
        )
    }
}

export default ReviewForm