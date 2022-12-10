/*
What is an entity? An entity is a high level representation 
ative characters: Player, Enemy, NPC, etc.
basically this will be used in the battle system to make common 
representations of characters.

- This grabs the elements between diferent classes and makes 
a representation of them. for can be used in the battle system.
this is basically a bridge between the classes(players, npcs, mobs... etc.) and allows 
then to battle even if they are not the same class.


Algorithm:

1. Create a new entity
2. Insert the imput class(player, npc, mob, etc.) into the entity
3. Find what is the class of the imput.
4. If the imput is a player, then insert all the player's stats, skills, inventory, and player data into the entity.
    - This will be done by using the player's id to find the player in the database and then insert all the data into the entity.
5. If the imput is a npc, then insert all the npc's stats, skills, and functions into the entity.
    - This will be done by using the npc's id to find the npc in the npc's files.
6. If the imput is a mob, then insert all the mob's stats, skills, and functions into the entity.
    - This will be done by using the mob's id to find the mob in the mob's files.

7. Add a category to the entity to know what type of entity it is.
: entity.category = "player", "npc", "mob", etc.

8. Return the entity.
*/

// This is the entity class
class Entity {
    constructor() {
        this.name = "";
        this.id = 0;
        this.level = 0;
        this.exp = 0;
        this.expToNextLevel = 0;
        this.stats = {
            hp: 0,
            mp: 0,
            atk: 0,
            def: 0,
            matk: 0,
            mdef: 0,
            agi: 0,
            luk: 0
        };
        this.skills = [];
        this.inventory = [];
        this.equipment = {
            head: null,
            body: null,
            legs: null,
            feet: null,
            weapon: null,
            shield: null,
            accessory: null
        };
        this.playerData = {
            money: 0,
            quests: [],
            currentQuest: null,
        };
        this.functions = {};
        this.category = "";
    }

    // Verifies if the entity is a player.
    isPlayer(imput) {
        if (imput instanceof Player) {
            return true;
        } else {
            return false;
        }
    }

    // Verifies if the entity is a npc.
    isNpc(imput) {
        if (imput instanceof Npc) {
            return true;
        } else {
            return false;
        }
    }

    // Verifies if the entity is a mob.
    isMob(imput) {
        if (imput instanceof Mob) {
            return true;
        } else {
            return false;
        }
    }

    // This inserts the imput class into the entity.
    insertClass(imput) {
        if (this.isPlayer(imput)) {
            this.category = "player";
            this.name = imput.name;
            this.id = imput.id;
            this.level = imput.level;
            this.exp = imput.exp;
            this.expToNextLevel = imput.expToNextLevel;
            this.stats = imput.stats;
            this.skills = imput.skills;
            this.inventory = imput.inventory;
            this.equipment = imput.equipment;
            this.playerData = imput.playerData;
        } else if (this.isNpc(imput)) {
            this.category = "npc";
            this.name = imput.name;
            this.id = imput.id;
            this.level = imput.level;
            this.exp = imput.exp;
            this.expToNextLevel = imput.expToNextLevel;
            this.stats = imput.stats;
            this.skills = imput.skills;
            this.functions = imput.functions;
        } else if (this.isMob(imput)) {
            this.category = "mob";
            this.name = imput.name;
            this.id = imput.id;
            this.level = imput.level;
            this.exp = imput.exp;
            this.expToNextLevel = imput.expToNextLevel;
            this.stats = imput.stats;
            this.skills = imput.skills;
            this.functions = imput.functions;
        }
    }

    // This inserts the player's data into the entity.
    insertPlayerData(imput) {
        if (this.isPlayer(imput)) {
            this.playerData = imput.playerData;
        }
    }

    // This inserts the npc's data into the entity.
    insertNpcData(imput) {
        if (this.isNpc(imput)) {
            this.functions = imput.functions;
        }
    }

    // This inserts the mob's data into the entity.
    insertMobData(imput) {
        if (this.isMob(imput)) {
            this.functions = imput.functions;
        }
    }
}

export default Entity;