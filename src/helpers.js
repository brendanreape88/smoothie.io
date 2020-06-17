export const findRecipe = (userRecipes=[], recipeId) => {
    return userRecipes.find(recipe => recipe.id === parseInt(recipeId))}

export const findNote = (notes=[], noteId) =>
    notes.find(note => note.id === noteId)

export const getNotesForFolder = (notes=[], folderId) => (
    (!folderId)
        ? notes
        : notes.filter(note => note.folderId === folderId)
)

export const countNotesForFolder = (notes=[], folderId) =>
    notes.filter(note => note.folderId === folderId).length