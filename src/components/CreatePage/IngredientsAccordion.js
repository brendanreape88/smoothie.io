import React, { Component } from 'react'
import './CreatePage.css'

class IngredientsAccordion extends Component {
    render () {
        return (
            <div className="Ingredients__List">
                    <div className="Ingredients__Category">
                        <h4>
                            <button onClick={event => this.changeAccordion(event)}>
                                category
                            </button>
                        </h4>
                                <div className="Ingredients__Item">
                                    <form onSubmit={this.handleAddRecipeItem}>
                                        <label>ingredient</label>
                                        <input
                                            name="amount" 
                                            type="text"
                                            placeholder="amount"
                                            size="6"
                                        />
                                        <input
                                            name="units"
                                            type="text"
                                            placeholder="units"
                                            size="4"
                                        />
                                        <button>add</button>
                                    </form>
                                </div>
                    </div>
            </div>
        )
    }
}

export default IngredientsAccordion