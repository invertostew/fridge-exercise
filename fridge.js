const findIngredients = (fridgeContent) => {
    const ingredients = [];

    for (let i = 0; i < fridgeContent.length; i += 1) {
        if (fridgeContent[i].saladIngredient) {
            ingredients.push(fridgeContent[i].name);
        }
    }

    return ingredients;
}

module.exports = findIngredients;
