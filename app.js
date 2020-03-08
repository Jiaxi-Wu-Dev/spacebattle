/* Build a game of battling alien spaceships using Javascript. Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat. A game round would look like this: - You attack the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again - If it survives, it attacks you again - Etc. - If you destroy the ship, you have the option to **attack** the next ship or to **retreat** - If you retreat, the game is over, perhaps leaving the game open for further developments or options. - You win the game if you destroy all of the aliens. - You lose the game if you are destroyed.

Ship Properties * **hull** is the same as hitpoints. If hull reaches `0` or less, the ship is destroyed. * **firepower** is the amount of damage done to the **hull** of the target with a successful hit. * **accuracy** is the chance between 0 and 1 that the ship will hit its target. - Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random()` - If the ship's accuracy is `0.8` - then if the number generated from `Math.random()` is less than or equal to `0.8` then the attack will be successful. If the value is greater than `0.8` then the attack has missed. - Adjust the accuracy based on the specs for each ship **Your spaceship, the USS Schwarzenegger** should have the following properties: * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7` **The alien ships** should each have the following _ranged_ properties determined randomly: * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` You could be battling six alien ships each with unique values. Example use of **accuracy** to determine a hit: ```javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } 
 */

//PSEUDO CODE
// 1) Get to attack first
// 2) Can only attack in order
// 3) After destroying a ship an option to retreat becomes available

// A game round would go - attack the first alien ship - if the ship survives it attacks you - if you survive, you attach the ship again - if it survives it attacks you until one of the ships are destoryed. If you destroy the ship you an the option to attack the next ship or to retreat. If you retreat the game is over. You win the game if you destroy all of the aliens, you lose the game if you are destroyed. 

// if the hull reaches 0 or less, the ship is destroyed 
// firepower is the amount of damage done to the hull with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target.
// everytime the ship will attack calculate the chance that the damage will hit the opposing ship using 'math.random()
// if the ships accuracy is `0.8` <= math.random() then the attack will be successful. if the value is 8 > math.random() then the attack will be missed. 
// the USS Schwarzenegger** should have the following properties: * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7` 
// **The alien ships** should each have the following _ranged_ properties determined randomly: * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` 
// You could be battling six alien ships each with unique values. Example use of **accuracy** to determine a hit: ```javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } 

// - create an object called ussschwarzenegger with properties hull, firepower, and accuracy.
// - create alienships with properties determined radomly using const random = Math.random(); Math.round(random * 10) following _ranged_ properties determined randomly: * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` 
// - the objects should have behavior with .methods such as .attack(); 
// - game logic should be if ship hull > 0 ship is destroyed. 
// - game logic for accuracy = is the chance between 0 and 1 the ship hits its target
// - game logic for hit `0.8` <= math.random() then the attack will be successful. if the value is 8 > math.random() then the attack will be missed.
// - In the beginning of the game have a prompt saying are you ready to begin, if yes launch game, if not console.log come back when youre ready
// - After game is launched have a prompt that says are you ready to attack? if yes begin attack, if no, lose game immediately. 
// - 

const random = Math.random();

let ussschwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
}

/* let alienships = function(hull, firepower, accuracy){
    this.alienhull = hull,
    this.alienfirepower = firepower,
    this.alienaccuracy = accuracy
};

alienships.hull = Math.random();
alienships.firepower = Math.random();
alienships.alienaccuracy = Math.random(); */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let alienship1 = {
    hull: getRandomInt(3, 6),
    firepower: getRandomInt(2, 4),
    accuracy: getRandomInt(.6, .8)
}

console.log(alienship1.hull)

// console.log(getRandomInt(5, 100));
/* console.log(alienship1.alienhull, alienship1.alienfirepower, alienship1.alienaccuracy) 
console.log(alienship1.alienfirepower)
console.log(alienship1.alienaccuracy) */

