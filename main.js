let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

if(early && age > 18) {
    raceNumber += 1000;
};

if(raceNumber > 1000 && age > 18) {
    console.log(`Your race number is ${raceNumber} and your race will begin at 9:30am.`);
} else if(raceNumber <= 1000 && age > 18) {
    console.log(`Youre race number is ${raceNumber} and your race will begin at 11:00am.`);
} else if(raceNumber <= 1000 && age < 18) {
    console.log(`Your race number is ${raceNumber} and your race will begin at 12:30pm.`);
};

// console.log(raceNumber);

