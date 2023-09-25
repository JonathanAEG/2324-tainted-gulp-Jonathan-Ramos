import { getData, getRustedRingData} from "./service.mjs";
import Ingredients from "./Ingredients.mjs";
import Cauldron from "./Cauldron.mjs";
import PotionBag from "./PotionBag.mjs";

const execute = async()=>{

    try{
        const data = await getData();
        const rustedRingData = await getRustedRingData();
        //Creación de ingredientes
        const ingredients = Ingredients.load(data);

        //Creación de cauldron
        const cauldron = new Cauldron(ingredients);

        //Creación de una Bag de pociones
        const Bag =  PotionBag.createPotions(rustedRingData.players[0].pouch_green, cauldron);
        showPotions(Bag)

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