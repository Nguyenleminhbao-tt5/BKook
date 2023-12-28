export type IngredientType = {
    name: string,
    iconUrl?: string,
    onClick?: () => string[]
}

export type RecipeType = {
    name: string,
    owner: string,
    ownerAvatar: string,
    like: number,
    heart: number,
    clap: number,
    imgUrl: string,
    ingredient: string[]
}

export type RecipeTagType = {
    name: string,
    recipeList: RecipeType[],
    thumbnail: string
}