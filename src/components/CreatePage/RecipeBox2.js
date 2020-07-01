import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import UserDataContext from '../../contexts/UserDataContext'
import './CreatePage.css'

class RecipeBox2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prepopulate: this.props.location.prepopulate ? this.props.location.prepopulate : false
        }
    }

    static contextType = UserDataContext

    handleRecipeSubmit = (event) => {
        event.preventDefault();
        const smoothieName = event.target.title.value
        console.log(smoothieName)
        const userName = this.context.userData.userName
        const userId = this.context.userData.id
        const recipeId = 12321
        const recipeStrings = this.props.recipeProps
        this.context.insertNewRecipe(smoothieName, recipeStrings, userName, userId, recipeId)
    }

    render () {
        const prepopulate = this.props.location.prepopulate
        const recipeStrings = this.props.recipeProps
        const id = this.props.location.customId
        const recipe = this.context.findRecipe(Number(id));
        return (
            <form 
                onSubmit={this.handleRecipeSubmit}
                className="RecipeForm"
            >
                <div className="RecipeTitle">
                    <label htmlFor="title"></label>
                    {prepopulate
                        ? (
                            <input 
                                type="text"
                                placeholder={recipe.smoothieName}
                                name="title"
                                id="title"
                                required
                            />
                        )
                        : (
                            <input 
                                type="text"
                                placeholder="My Awesome Smoothie"
                                name="title"
                                id="title"
                                required
                            />
                        )
                    }
                    <br/>
                    Name your smoothie!
                </div>
                <div className="Recipe__Box">
                    {recipeStrings.map(r => 
                        <div className="Recipe__Item">
                            <h3>{r}</h3>
                            <button 
                                onClick={(e) => this.props.deleteStringItem(e, r)}>
                                x
                            </button>
                        </div>
                    )}
                </div>
                <div className="Buttons__Box">
                    <button type='submit'>publish</button>
                </div>           
            </form>
        )
    }
}

export default withRouter(RecipeBox2)