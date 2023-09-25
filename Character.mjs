
export default class Character{

    constructor(fullName, health, magick, stamina, potions){

        this.fullName = fullName;
        this.healt = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
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