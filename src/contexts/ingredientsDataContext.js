import React, { Component } from 'react'

const ingredientsDataContext = React.createContext({
    ingredientsData: [
        {
            id: 1,
            category: 'fruit',
            ingredients: [
                "apples",
                "avocado",
                "bananas",
                "blueberries",
                "cucumber",
                "grapes",
                "mango",
                "papaya",
                "peaches",
                "pears",
                "pineapple",
                "strawberries",
            ]
        },
        {
            id: 2,
            category: 'vegetables',
            ingredients: [
                "beets",
                "broccoli",
                "carrots",
                "carrot tops",
                "chard",
                "celery",
                "kale",
                "spinach",
            ]
        },
        {
            id: 3,
            category: 'nuts & seeds',
            ingredients: [
                'almonds',
                'almond butter',
                'cashews',
                'cashew butter',
                'chia seeds',
                'flax seed',
                'peanuts',
                'peanut butter',
                'walnuts',
            ]
        },
        {
            id: 4,
            category: 'liquids',
            ingredients: [
                "almond milk",
                "cashew milk",
                "milk",
                "oat milk",
                "orange juice",
                "pineapple juice",
                "soy milk",
                "water",
            ]
        },
        {
            id: 5,
            category: 'powders',
            ingredients: [
                "cacao",
                "pea protein",
                "whey protein"
            ]
        },
        {
            id: 6,
            category: 'sweeteners',
            ingredients: [
                "honey",
                "stevia"
            ]
        },
        {
            id: 7,
            category: 'miscellaneous',
            ingredients: [
                "dark chocolate",
                "ice"
            ]
        }
    ]
})

export default ingredientsDataContext

export class ingredientsDataProvider extends Component {
    state = {
        ingredientsData: []
    }

    render() {
        const value = {
            ingredientsData: this.state.ingredientsData
        }

        return (
            <ingredientsDataContext.Provider value={value}>
                {this.props.children}
            </ingredientsDataContext.Provider>
        )
    }
}