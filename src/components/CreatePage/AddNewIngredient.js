import React, { Component } from 'react'
import ingredientsDataContext from '../../contexts/ingredientsDataContext'
import './CreatePage.css'

class AddNewIngredient extends Component {

    static contextType = ingredientsDataContext

    handleAddNewItem = (event) => {
        event.preventDefault();
        const itemCategory = event.target.newItemCategory.value
        console.log(itemCategory)
        const itemName = event.target.newItemName.value
        console.log(itemName)
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
                            value={d.id}
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