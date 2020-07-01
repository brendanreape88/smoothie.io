import React, { Component } from 'react'

const UserDataContext = React.createContext({
    userData: [],
    recipes: [],
    reviews: [],
    recipesForUser: () => {},
    favoriteRecipes: () => {},
    findRecipe: id => {},
    findReviews: id => {},
    insertNewRecipe: () => {},
    handleReviewSubmit: () => {},
    toggleFavorites: () => {}
})

export default UserDataContext

export class UserDataProvider extends Component {
    state = {
        recipes: [
                {
                    id: 1,
                    smoothieName: "Green Machine",
                    userName: "greenguru",
                    userId: 1,
                    recipe: [
                        "6 leaves romaine lettuce",
                        "4 leaves kale",
                        "1 cup pineapple",
                        "1 cup mango",
                        "1 oz ginger",
                        "11 cups water",
                    ],
                },
                {
                    id: 2,
                    smoothieName: "Whey Protein Breakfast Blast",
                    userName: "greenguru",
                    userId: 1,
                    recipe: [
                        "1 cup blueberries",
                        "1/2 whole banana",
                        "1 scoop whey",
                        "2 teaspoons honey",
                        "1 teaspoon vanilla extract",
                        "1 cup ice cubes",
                        "1 tablespoon flax seed",
                    ]
                },
                {
                    id: 3,
                    smoothieName: "Sunrise Breakfast Smoothie",
                    userName: "wholefoodie",
                    userId: 2,
                    recipe: [
                        "1 whole carrot",
                        "1 whole banana",
                        "1 scoop whey",
                        "3/4 cup raspberries",
                        "1/2 cup yogurt",
                        "1/2 cup almond milk",
                        "1 whole orange",
                        "1/4 cup rolled oats",
                    ]
                },
                {
                    id: 4,
                    smoothieName: "Mango Mint Green Smoothie",
                    userName: "wholefoodie",
                    userId: 2,
                    recipe: [
                        "2 cups spinach",
                        "1 1/2 cups ice",
                        "1 cup almond milk",
                        "1/2 cup mint leaves",
                        "1/4 cup lime juice",
                        "1 whole mango",
                        "1 whole banana",
                    ],
                },
                {
                    id: 5,
                    smoothieName: "Pineapple Breeze",
                    userName: "greenguru",
                    userId: 1,
                    recipe: [
                        "1 cup pineapple",
                        "1/2 cup pineapple juice",
                        "2/3 cup coconut milk",
                        "3 cups ice cubes",
                    ]
                },
                {
                    id: 6,
                    smoothieName: "Sunny Citrus Smoothie",
                    userName: "wholefoodie",
                    userId: 2,
                    recipe: [
                        "1 whole orange",
                        "1 whole lemon",
                        "1 whole grapefruit",
                        "3/4 cup yogurt",
                        "2 tablespoons honey",
                        "1/2 cup ice cubes",
                    ]
                },
                {
                    id: 7,
                    smoothieName: "Blueberry Muffin Smoothie",
                    userName: "greenguru",
                    userId: 1,
                    recipe: [
                        "1/2 cup orange juice",
                        "1 cup blueberries",
                        "1/2 cup rolled oats",
                        "2 tablespoons flaxseed oil",
                        "1/2 teaspoon cinnamon",
                        "1/2 cup ice cubes",
                        "1/2 cup soy milk",
                    ]
                },
                {
                    id: 8,
                    smoothieName: "Strawberry Almond Butter Smoothie",
                    userName: "wholefoodie",
                    userId: 2,
                    recipe: [
                        "1 cup ice cubes",
                        "8 ounces strawberries",
                        "1 cup almond milk",
                        "2 tablespoons almond butter",
                    ]
                },
                {
                    id: 9,
                    smoothieName: "Chocolate-Almond Banana Smoothie",
                    userName: "wholefoodie",
                    userId: 2,
                    recipe: [
                        "1 whole banana",
                        "1 cup almond milk",
                        "1 tablespoon almond butter",
                        "1 tablespoon cocoa",
                    ]
                },
                {
                    id: 10,
                    smoothieName: "Get Your Greens",
                    userName: "wholefoodie",
                    userId: 2,
                    recipe: [
                        "1 1/2 cup rice milk",
                        "1 1/2 cup spinach",
                        "1/2 cup blueberries",
                        "1/2 cup raspberries",
                        "1/2 cup cherries",
                        "1 cup ice cubes"
                    ]
                }
        ],
        reviews: [
          {
            recipeId: 1,
            userName: "Bloop",
            userId: 10,
            headline: "It was bloop!",
            review: "Bloop bloop bloopity bloop."
          },
          {
            recipeId: 1,
            userName: "Fruity",
            userId: 11,
            headline: "Delish",
            review: "Blah blah blah."
          },
          {
            recipeId: 2,
            userName: "Lue",
            userId: 12,
            headline: "Yum",
            review: "Tastes like fruit."
          },
          {   
            recipeId: 3,
            userName: "Brendan",
            userId: 33,
            headline: "Crunchy",
            review: "Had a weird crunch to it."
          }
        ],
        userData: 
            {
                id: 1,
                userName: "greenguru",
                userFavorites: [1, 3, 5]
            }
        
    }

    findRecipe(id) {
      return this.state.recipes.find(r => r.id === id);
    }

    findReviews(id) {
      return this.state.reviews.filter(r => r.recipeId === id);
    }

    recipesForUser() {
      const { recipes, userData } = this.state;
      return recipes.filter(r => r.userId === userData.id)
    }

    favoriteRecipes() {
      const { recipes, userData } = this.state;
      return recipes.filter(r => userData.userFavorites.includes(r.id));
    }

    insertNewRecipe = (smoothieName, recipeStrings, userName, userId, recipeId) => {
        const newRecipe = 
            {
                id: recipeId,
                smoothieName: smoothieName,
                userName: userName,
                userId: userId,
                recipe: recipeStrings
            }
        this.setState(prevState => {
            const { recipes } = prevState
            recipes.unshift(newRecipe)
            return { recipes }
        })
    }

    handleReviewSubmit = (headline, review, recipeId, userName, userId) => {
        const reviews = this.state.reviews
        this.setState({ reviews: reviews.concat(
            {
                recipeId: recipeId,
                userName: userName,
                userId: userId,
                headline: headline,
                review: review 
            }
        )})
    }

    toggleFavorites = (recipeId) => {
        const favoritesArray = this.state.userData.userFavorites
        if (favoritesArray.find(f => f === recipeId)) {
            const removeItemArray = favoritesArray.filter(f => f !== recipeId)
            console.log(removeItemArray)
            this.setState({ userData: {userFavorites: removeItemArray} })
        } else {
            const addItemArray = favoritesArray.push(recipeId)
            console.log(addItemArray)
        }
    }

    render() {
        const value = {
            userData: this.state.userData,
            recipeData: this.state.recipes,
            reviewsData: this.state.reviews,
            favoriteRecipes: () => this.favoriteRecipes(),
            recipesForUser: () => this.recipesForUser(),
            findRecipe: id => this.findRecipe(id),
            findReviews: id => this.findReviews(id),
            insertNewRecipe: this.insertNewRecipe,
            handleReviewSubmit: this.handleReviewSubmit,
            toggleFavorites: this.toggleFavorites
        }

        return (
            <UserDataContext.Provider value={value}>
                {this.props.children}
            </UserDataContext.Provider>
        )
    }
}