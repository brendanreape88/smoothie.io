import config from "../config";

const ReviewsApiService = {
  getReviews(recipeId) {
    return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}/reviews`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postReview(headline, review, recipe_id, user_id) {
    return fetch(`${config.API_ENDPOINT}/users/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        headline,
        review,
        recipe_id,
        user_id,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ReviewsApiService;
