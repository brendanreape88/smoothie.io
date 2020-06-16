import React, { Component } from 'react'
import './CreatePage.css'

class AddNewIngredient extends Component {
    render () {
        return (
            <form onSubmit={this.handleAddNewItem}>
                <label>
                    Category
                    <select
                        name="newItemCategory"
                    >
                        <option>
                            category
                        </option>
                    )}
                    </select>
                </label>
                <br/>
                <label>
                    Name
                    <input
                        name="newItemName"
                        type="text" 
                        placeholder="ie: starfuit"
                    />
                </label>
                <br/>
                <button>add</button>
            </form>
        )
    }
}

export default AddNewIngredient