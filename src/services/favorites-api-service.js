import config from "../config";

const FavoritesApiService = {
  getFavoritesforUser(user_id) {
    return fetch(`${config.API_ENDPOINT}/users/${user_id}/favorites`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postFavorites(user_id, recipe_id) {
    return fetch(`${config.API_ENDPOINT}/users/favorites`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        recipe_id,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default FavoritesApiService;
