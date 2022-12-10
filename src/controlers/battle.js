/*
What consists in a battle?
- A battle is a fight between two or more entities.

What is an entity? An entity is a high level representation of a character: Player, Enemy, NPC, etc.

how this will work?

- Basically the battle system will manage the battle between two or more entities.
- This will be done by using the entity class.
Example:
if player1 and player2 are fighting, then the battle system will create two entities and then use them to battle.
if player1 use a skill the battle system will grab the skill from tha player1
make all the staps for use the skill:
- check if the player has enough mp
- check if the player has the skill
- check if the skill is on cooldown
- check if the skill is a buff or a debuff
- check if the skill is a physical or a magical skill
=
- roll the correct dice for the skill
- check if the skill hit the target
- If the skill hit the target then calculate the damage
- If the skill is a buff or a debuff then apply the buff or debuff
- If the skill is a physical skill then calculate the damage
- If the skill is a magical skill then calculate the damage
- If the skill is a healing skill then calculate the healing
- If the skill is a status effect skill then apply the status effect
- If the skill is a summon skill then summon the entity
- If the skill is a teleport skill then teleport the entity
- If the skill is a transformation skill then transform the entity
- If the skill is a trap skill then place the trap
- If the skill is a summon trap skill then summon the trap

- in the end the battle system will return the result of the skill.

- then update the player2 information baed on the result of the skill.
- save for the temp database.
*/