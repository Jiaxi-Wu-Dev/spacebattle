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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let ussschwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
}

let alienship1 = {
    name: "Alien Ship One",
    hull: getRandomInt(3, 6),
    firepower: getRandomInt(2, 4),
    accuracy: getRandomInt(.6, .8),
    amount: 0
}

let alienship2 = {
    name: "Alien Ship Two",
    hull: getRandomInt(3, 6),
    firepower: getRandomInt(2, 4),
    accuracy: getRandomInt(.6, .8),
    amount: 0
}

let alienship3 = {
    name: "Alien Ship Three",
    hull: getRandomInt(3, 6),
    firepower: getRandomInt(2, 4),
    accuracy: getRandomInt(.6, .8),
    amount: 0
}

let alienship4 = {
    name: "Alien Ship Four",
    hull: getRandomInt(3, 6),
    firepower: getRandomInt(2, 4),
    accuracy: getRandomInt(.6, .8),
    amount: 0
}

let alienship5 = {
    name: "Alien Ship Five",
    hull: getRandomInt(3, 6),
    firepower: getRandomInt(2, 4),
    accuracy: getRandomInt(.6, .8),
    amount: 0
}

let alienship6 = {
    name: "Alien Ship Six",
    hull: getRandomInt(3, 6),
    firepower: getRandomInt(2, 4),
    accuracy: getRandomInt(.6, .8),
    amount: 00
}

$(document).ready(function(){
    var beginGame = prompt("ARE YOU READY TO DEFEND EARTH", "YES/NO");

if (beginGame === "YES") {
    document.getElementById("startGameText").innerHTML = "Lets begin the game! Right click, then click on inspect and click console";
    console.log(" Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. There are six alien ships. Before each battle, you have the option to continue onwards to the next ship or to retreat. Beware, if you choose retreat Earth will be left defenseless and it will be game over!" )

} else {
    document.getElementById("startGameText").innerHTML = "Come back when you are! Be quick though, Earth cannot wait forever"
}


var getIntoShip = prompt("Time to get into the ship, ready to engage?", "YES/NO");

if (getIntoShip === "YES"){
    console.log("You are encountering your first spaceship! " + alienship1.name + " engaged!");
    alienship1.amount = 1
    console.log(alienship1.amount)
    if (alienship1.amount === 1 && alienship1.hull >= 0 && ussschwarzenegger.hull >= 0){
        console.log("preparing to fire lasers")
        if (ussschwarzenegger.accuracy >= alienship1.accuracy){
            console.log("you have hit the alien ship!")
            let damageToAlienHull = alienship1.hull - 5;
            console.log(damageToAlienHull)
            if (alienship1.hull >= 0) {
                console.log(alienship1.name + " destroyed");
                alienship1.amount = 0
                let fightSecondShip = prompt("Ready to fight the Second Alien Ship?", "YES/NO")
                if (fightSecondShip === "YES") {
                    console.log("Attacking Second Ship")
                    alienship2.amount = 1
                    if (alienship2.amount === 1 && alienship2.hull >= 0 && ussschwarzenegger.hull >= 0) {
                        console.log("preparing to fire lasers")
                        if (ussschwarzenegger.accuracy >= alienship2.accuracy){
                            console.log("you have hit the alien ship!")
                            let damageToAlienHull2 = alienship2.hull - 5;
                            console.log(damageToAlienHull2)
                            if (alienship2.hull >= 0) {
                                console.log(alienship2.name + " destroyed");
                                alienship2.amount = 0
                                let fightThirdShip = prompt("Ready to fight the Third Alien Ship?", "YES/NO")
                                if (fightThirdShip === "YES"){
                                    console.log("Attacking Third Ship")
                                    alienship3.amount = 1
                                    if (alienship3.amount = 1 && alienship3.hull >= 0 && ussschwarzenegger.hull >= 0)
                                        console.log("preparing to fire lasers")
                                        if (ussschwarzenegger.accuracy >= alienship3.accuracy){
                                            console.log("you have hit the alien ship!")
                                            let damageToAlienHull3 = alienship3.hull - 5;
                                            console.log(damageToAlienHull3)
                                            if (alienship3.hull >= 0) {
                                                console.log(alienship3.name + " destroyed");
                                                alienship3.amount = 0
                                                let fightFourthShip = prompt("Ready to fight the Fourth Alien Ship?", "YES/NO")
                                                if (fightFourthShip = "YES") { 
                                                    console.log("Attacking Fourth Ship")
                                                    alienship4.amount = 1
                                                    if (alienship4.amount = 1 && alienship4.hull >= 0 && ussschwarzenegger.hull >= 0)
                                                    console.log("preparing to fire lasers")
                                                        if (ussschwarzenegger.accuracy >= alienship4.accuracy){
                                                            console.log("you have hit the alien ship!")
                                                            let damageToAlienHull4 = alienship4.hull - 5;
                                                            console.log(damageToAlienHull4)
                                                            if (alienship4.hull >= 0) {
                                                                console.log(alienship4.name + " destroyed")
                                                                alienship4.amount = 0
                                                                let fightFifthShip = prompt("Ready to fight the Fifth Alien Ship?", "YES/NO")
                                                                if (fightFifthShip === "YES"){
                                                                    console.log("Attacking Fifth Ship")
                                                                    alienship5.amount = 1
                                                                    if (alienship5.amount = 1 && alienship5.hull >= 0 && ussschwarzenegger.hull >= 0){
                                                                        console.log("preparing to fire lasers")
                                                                        if (ussschwarzenegger.accuracy >= alienship5.accuracy) {
                                                                            console.log("you have hit the alien ship!")
                                                                            let damageToAlienHull5 = alienship5.hull - 5;
                                                                            console.log(damageToAlienHull5)
                                                                            if (alienship5.hull >= 0) {
                                                                                console.log(alienship5.name + " destroyed")
                                                                                alienship5.amount = 0
                                                                                let fightSixthShip = prompt("Ready to fight the Sixth Alien Ship?", "YES/NO") 
                                                                                if (fightSixthShip = "YES"){
                                                                                    console.log("Attacking sixth Ship")
                                                                                    alienship6.amount = 1
                                                                                    if (alienship6.amount = 1 && alienship6.hull >= 0 && ussschwarzenegger.hull >= 0){
                                                                                    console.log("preparing to fire lasers")
                                                                                    if (ussschwarzenegger.accuracy >= alienship6.accuracy) {
                                                                                    console.log("you have hit the alien ship!")
                                                                                    let damageToAlienHull6 = alienship6.hull - 5;
                                                                                    console.log(damageToAlienHull6)
                                                                                    if (alienship6.hull >= 0) {
                                                                                    console.log(alienship6.name + " destroyed, You have successfully defended Earth!")
                                                                                }
                                                                            }
                                                                        }
                                                                    } else {
                                                                        console.log("GAME OVER")
                                                                    }
                                                                } else {
                                                                    console.log("GAME OVER")
                                                                }
                                                
                                                            }
                                                        }
                                                } else {
                                                    console.log("GAME OVER")
                                                }
                                               
                    }
                } else {
                    console.log("Game Over")
                }
            } else {
                console.log("GAME OVER")
            }
        } else {
            console.log("You missed!")
            let damageToUssHull = ussschwarzenegger.hull - alienship1.firepower
            console.log(damageToUssHull)
        }

} else {
    console.log("Who will defend Earth?")
} 
        }else {
            console.log("Game Over")
        }
    }
}

    }
} else {
    console.log("Game Over")
}
}
        }
    }
}

  });

