import React, { Component } from 'react'
import IngredientsDataContext from '../../contexts/IngredientsDataContext'
import './CreatePage.css'

class AddNewIngredient extends Component {

    static contextType = IngredientsDataContext

    handleAddNewItem = (event) => {
        event.preventDefault();
        const itemCategory = event.target.newItemCategory.value
        const itemName = event.target.newItemName.value
        this.context.addNewIngredient(itemCategory, itemName)
    }

    render () {
        const data = this.context.ingredientsData
        return (
            <form onSubmit={this.handleAddNewItem}>
                <label>
                    Category
                    <select
                        name="newItemCategory"
                    >
                    {data.map(d =>
                        <option
                            value={d.category}
                        >
                            {d.category}
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