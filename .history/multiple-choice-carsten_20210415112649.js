// # Switch if... 

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
let color = 3;

switch (color) {
    case 1: console.log("Red is strong");
    break;
    case 2: console.log("Blue is serious");
    break;
    case 3: console.log("Green is healthy");
    break;
    case 4: console.log("Yellow is funny");
    break;
    default: console.log("No color seen");
}

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.
let grade = 2;

switch (grade) {
    case 1: console.log("Best quality");
    break;
    case 2: console.log("Good quality for the price");
    break;
    case 3: console.log("Not the best, but good enough");
    break;
    default: console.log("Well, it's cheap");
}

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
let fruit = 3;

switch (fruit) {
    case 1: console.log("Can't live without bananas");
    break;
    case 2: console.log("Like them as a juice");
    break;
    case 3: console.log("Only from the farm in the near");
    break;
    case 4: console.log("An apple a day keeps the doctor away");
    break;
    default: console.log("No fruits today");
}

// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 

const percentageComplete = 51;

// switch doesn't work
switch (percentageComplete) {
    case (percentageComplete < 30): console.log("Still a long way to go");
    break;
    case ((percentageComplete >= 30) && (percentageComplete <= 50)): console.log("Slowly getting there");
    break;
    case ((percentageComplete >= 51) && (percentageComplete <= 80)): console.log("You can do it");
    break;
    case ((percentageComplete >= 81) && (percentageComplete <= 99)): console.log("This is the last push");
    break;
    default: console.log("You're there. Well done!");
}

// if else if else works
if (percentageComplete < 30) {
    console.log("Still a long way to go");
}
else if ((percentageComplete >= 30) && (percentageComplete <= 50)) {
    console.log("Slowly getting there");
}
else if ((percentageComplete >= 51) && (percentageComplete <= 80)) {
    console.log("You can do it");
}
else if ((percentageComplete >= 81) && (percentageComplete <= 99)) {
    console.log("This is the last push");
}
else {
    console.log("You're there. Well done!");
}

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
// Switch statements are much quicker to code and easier to understand in long conditionals
