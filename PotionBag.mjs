
export default class PotionBag{

    constructor(potions){

        this.potions = potions;
    }

    static createPotions(ingredients, cauldron){

        const potions =[];
        const usedIngredients = [];
        ingredients.forEach(ingredientInitial=>{

            
            ingredients.forEach(currentIgredient=>{

                if(ingredientInitial != currentIgredient && checkIngredient(usedIngredients, currentIgredient))
                potions.push(cauldron.createPotion(ingredientInitial, currentIgredient));
            })
            usedIngredients.push(ingredientInitial);
        })
        return new PotionBag(potions);
    }
}

function checkIngredient(usedIngredients, currentIgredient){

    let condition = true;
    usedIngredients.forEach(ingredient=>{
        
        if(ingredient === currentIgredient){

            condition = false;
        }
    })
    return condition;
}