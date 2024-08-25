export default class Character {
    constructor(name, type) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie'
        ];
        
        if (name !== 'string' && name.length < 2 && name.length > 10) {  
            throw new Error("не менее 2 и не более 10 символов");
        }
                
        if (!types.includes(type)) {
            throw new Error('перcонажа нет в списке'); 
        }
                    
        this.type = type;
        this.name = name;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
}
