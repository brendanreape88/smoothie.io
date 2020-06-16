import React, { Component } from 'react'
import './CreatePage.css'

class RecipeTitle extends Component {
    render () {
        return (
            <form className="RecipeTitle">
                <label>
                    <input 
                        type="text"
                        placeholder="My Awesome Smoothie"
                    />
                    <br/>
                    Name your smoothie!
                </label>
            </form>
        )
    }
}

export default RecipeTitle