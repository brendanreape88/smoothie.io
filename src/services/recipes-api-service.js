import config from '../config'

const RecipesApiService = {
    getRecipes() {
        return fetch(`${config.API_ENDPOINT}/recipes`, {
            headers: {
            },
        })
            .then(res => 
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getRecipe(recipeId) {
        return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
            headers: {
            },
        })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    postRecipe(smoothie_name, smoothie_pic, ingredients, user_id) {
        return fetch(`${config.API_ENDPOINT}/users/recipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                smoothie_name,
                smoothie_pic,
                ingredients,
                user_id
            }),
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )

    }
}

export default RecipesApiService