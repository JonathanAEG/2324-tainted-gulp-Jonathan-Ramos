import { getData, getRustedRingData} from "./service.mjs";
import Ingredients from "./Ingredients.mjs";
import Cauldron from "./Cauldron.mjs";
import PotionBag from "./PotionBag.mjs";
import Character from "./Character.mjs";

const execute = async()=>{

    try{
        const data = await getData();
        const rustedRingData = await getRustedRingData();
        //Creación de ingredientes
        const ingredients = Ingredients.load(data);

        //Creación de cauldron
        const cauldron = new Cauldron(ingredients);

        //Creación de una Bag de pociones
        const bag =  PotionBag.createPotions(rustedRingData.players[0].pouch_aged, cauldron);
        showPotions(bag)

        const joseph = Character.from(rustedRingData.players[0], bag);
        
        showCharacter(joseph)

        joseph.drinkEmAll();

    }catch(error){
        console.log(error);
    }
}

execute();

function showPotions({potions}){

    potions.forEach(potion=>{

        for(let atribute in potion){

            if(atribute != `name`){
    
                console.log(`${atribute}:    ${potion[atribute]}`)
            }else{
                console.log(`${potion[atribute]}`)
            }
        }
        console.log(`-------------------------------`)
    })
    
}

function showCharacter({fullName, health, magick, stamina, potions}){

    console.log(fullName);
    console.log(`-------------------------------`);
    console.log(`Health:      ${health}`);
    console.log(`Magick:      ${magick}`);
    console.log(`Stamina:      ${stamina}`);

    const potionsArray = potions.potions
    for(let potion in potionsArray){

        console.log(`Potion ${potion}: ${potionsArray[potion].name} `)
    }
}