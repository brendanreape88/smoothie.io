export const findRecipe = (userRecipes=[], recipeId) => {
    return userRecipes.find(recipe => recipe.id === parseInt(recipeId))}

export const findLogin = (userData=[], username, password) => 
    userData.find(user => user.userName === username && user.userPassword === password)

/*export const registerUser = (userData=[], desiredUsername, desiredPassword) => {
    if (userData.find(user => user.userName === desiredUsername) {
        alert('Username is already taken') 
    } else {

    }
}*/

/*export const findNote = (notes=[], noteId) =>
    notes.find(note => note.id === noteId)

export const getNotesForFolder = (notes=[], folderId) => (
    (!folderId)
        ? notes
        : notes.filter(note => note.folderId === folderId)
)

export const countNotesForFolder = (notes=[], folderId) =>
    notes.filter(note => note.folderId === folderId).length*/