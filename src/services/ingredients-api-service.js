import config from '../config'

const IngredientsApiService = {
    getIngredients() {
        return fetch(`${config.API_ENDPOINT}/ingredients`, {
          headers: {
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    postIngredient(title, category) {
        return fetch(`${config.API_ENDPOINT}/ingredients`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            title,
            category
          }),
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default IngredientsApiService