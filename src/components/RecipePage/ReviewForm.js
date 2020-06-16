import React, { Component } from 'react'
import './RecipePage.css'

class RecviewForm extends Component {
    render() {
        return (
            <section className="RecipePage__ReviewForm">
                <form>
                    <label>
                        Add a headline
                        <br/>
                        <input
                            type="text"
                            placeholder="What's most important to know?"
                            size="33"
                        />
                        <br/>
                    </label>
                    <label>
                        Write your review
                        <br/>
                        <textarea
                            placeholder='Was this smoothie "yay" or "nay"? Why?'
                            rows="10"
                            cols="50"
                        />
                        <br/>
                    </label>
                    <button>submit</button>
                </form>
            </section>
        )
    }
}

export default RecviewForm