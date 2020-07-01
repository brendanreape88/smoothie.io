import React, { Component } from 'react'
import IngredientsDataContext from '../../contexts/IngredientsDataContext'
import './CreatePage.css'

class AddNewIngredient extends Component {

    static contextType = IngredientsDataContext

    handleAddNewItem = (event) => {
        event.preventDefault();
        const itemCategory = event.target.newItemCategory.value
        const itemName = event.target.newItemName.value
        console.log(itemCategory, itemName)
        this.context.addNewIngredient(itemCategory, itemName)
    }

    /*handleAddNewItem = (event) => {
        event.preventDefault();
        const itemCategory = event.target.newItemCategory.value
        const itemName = event.target.newItemName.value
        this.context.ingredientsData.forEach((item) => {
            if(Number(itemCategory) === item.id){
            return item.ingredients.push(itemName)
            }
        })
        console.log(this.context, 'result')
    }*/


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