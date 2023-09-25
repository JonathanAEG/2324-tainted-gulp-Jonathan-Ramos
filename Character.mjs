
export default class Character{

    constructor(fullName, health, magick, stamina, potions){

        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData, potions){

        return new Character (
            `${playerData.name} the ${playerData.class}`,
            playerData.health, 
            playerData.magick,
            playerData.stamina,
            potions
        );
    }

    drinkEmAll(){

        let gameEnd = false;

        this.potions.potions.forEach(potion=>{

            if(!gameEnd){

                console.log(`-------------------------------`)

                if(potion.name.includes(`Failed`)){

                    console.log(`${potion.name}. ${this.fullName} cannot drink`);
                    this.showCharacterStatus();

                }else if(potion.name.includes(`Potion of Sanity`)){

                    this.health += 1000;
                    this.magick += 1000;
                    this.stamina += 1000;

                    console.log(`${this.fullName} drinks ${potion.name}`);
                    console.log(`and gains 1000 points of health, magick and stamina.`);
                    this.showCharacterStatus();
                    console.log(`-------------------------------`);
                    console.log(`${this.fullName} has found the Potion of Sanity. His mind is healed. Well done!!`);

                    gameEnd = true;
                }else if(potion.name.includes(`Poison`)){

                    console.log(`${this.fullName} drinks ${potion.name}`)

                    if(potion.name.includes(`Healt`)){

                        this.health -= potion.value;
                        console.log(`and loses ${potion.value} points of healt.`)

                    }else if(potion.name.includes(`Magicka`)){

                        this.magick -= potion.value;
                        console.log(`and loses ${potion.value} points of magick.`)

                    }else if(potion.name.includes(`Stamina`)){

                        this.stamina -= potion.value;
                        console.log(`and loses ${potion.value} points of stamina.`)
                    }else{

                        console.log(`and loses 1 points of health, magick and stamina.`)

                        this.health -= 1;
                        this.magick -= 1;
                        this.stamina -= 1;
                    }

                    this.showCharacterStatus();

                }else if (potion.name.includes(`Potion`)){

                    console.log(`${this.fullName} drinks ${potion.name}`)

                    if(potion.name.includes(`Healt`)){

                        this.health += potion.value;
                        console.log(`and gains ${potion.value} points of healt.`)

                    }else if(potion.name.includes(`Magick`)){

                        this.magick += potion.value;
                        console.log(`and gains ${potion.value} points of magick.`)
                    }else if(potion.name.includes(`Stamina`)){

                        this.stamina += potion.value;
                        console.log(`and gains ${potion.value} points of stamina.`)
                    }else{

                        console.log(`and gains 1 point of health, magick and stamina.`)

                        this.health += 1;
                        this.magick += 1;
                        this.stamina += 1;
                    }

                    this.showCharacterStatus();

                }

                gameEnd = this.checkCharacterValues();
            }else{

                console.log(`${this.fullName} has drunk all the potions.`)
            }
        })
    }

    showCharacterStatus(){

        console.log(`Health: ${this.health}`);
        console.log(`Magick: ${this.magick}`);
        console.log(`Stamina: ${this.stamina}`);
    }

     checkCharacterValues(){

           if(this.health <= 0){

            console.log(`${this.fullName} has died.`);
            return true;    
           }else if(this.magick <= 0){  
            
            console.log(`${this.fullName} has been drained of all his magic and the Erudito X.G's chaos spell ends up finishing him off.`)
            return true;
           }else if(this.stamina <= 0){

            console.log(`${this.fullName} is exhausted and cannot move.`)
            return true;
           }
           return false;
    }
}