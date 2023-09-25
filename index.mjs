import { getData } from "./service.mjs";
import Ingredients from "./Ingredients.mjs";
import Cauldron from "./Cauldron.mjs";

const execute = async()=>{

    try{
        const data = await getData();

        //Creación de ingredientes
        const ingredients = Ingredients.load(data);

        //Creación de cauldron
        const cauldron = new Cauldron(ingredients);
        

    }catch(error){
        console.log(error);
    }
}

execute();


function showPotion(potion){

    for(let atribute in potion){

        if(atribute != `name`){

            console.log(`${atribute}:    ${potion[atribute]}`)
        }else{
            console.log(`${potion[atribute]}`)
        }
    }
    console.log(`-------------------------------`)
}