
export default class Character{

    constructor(fullName, health, magick, stamina, potions){


    }

    static from({name, health, magick, stamina}, potions){

        return new Character (
            name,
            health, 
            magick,
            stamina,
            potions
        );
    }
}