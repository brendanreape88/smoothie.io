import React, { Component } from 'react'

const IngredientsDataContext = React.createContext({
    ingredientsData: [],
    addNewIngredient: () => {}
})

export default IngredientsDataContext

export class IngredientsDataProvider extends Component {
    state = {
        ingredientsData: [
            {
                id: 1,
                category: 'fruit',
                ingredients: [
                    "apples",
                    "avocado",
                    "bananas",
                    "blueberries",
                    "cherries",
                    "cucumber",
                    "grapes",
                    "grapefruit",
                    "lemon",
                    "lime",
                    "mango",
                    "papaya",
                    "peaches",
                    "pears",
                    "pineapple",
                    "raspberries",
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
                    "romaine lettuce",
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
                    "coconut milk",
                    "coconut water",
                    "hemp milk",
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
                    "cinnamon",
                    "greens powder",
                    "maca",
                    "pea protein",
                    "rice protein",
                    "soy protein",
                    "turmeric",
                    "whey protein"
                ]
            },
            {
                id: 6,
                category: 'sweeteners',
                ingredients: [
                    "blue agave",
                    "coconut sugar",
                    "honey",
                    "maple syrup",
                    "monk fruit",
                    "stevia",
                    "xylitol"
                ]
            },
            {
                id: 7,
                category: 'miscellaneous',
                ingredients: [
                    "cacao nibs",
                    "chocolate, dark",
                    "chocolate, milk",
                    "coconut oil",
                    "flaxseed oil",
                    "ginger",
                    "granola",
                    "ice cubes",
                    "lemon juice",
                    "lime juice",
                    "mint leaves",
                    "rolled oats",
                    "vanilla extract",
                    "yogurt"
                ]
            }
        ]
    }

    addNewIngredient = (itemCategory, itemName) => {
        const { ingredientsData } = this.state
        const targetCategoryIndex = ingredientsData.findIndex(ingredient => ingredient.category === itemCategory)
        this.setState(prevState => {
            const { ingredientsData } = prevState
            const targetCategory = ingredientsData[targetCategoryIndex]
            targetCategory.ingredients.push(itemName)
            return { ingredientsData }      
        })
    }

    render() {
        const value = {
            ingredientsData: this.state.ingredientsData,
            addNewIngredient: this.addNewIngredient
        }

        return (
            <IngredientsDataContext.Provider value={value}>
                {this.props.children}
            </IngredientsDataContext.Provider>
        )
    }
}