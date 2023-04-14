function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("enterStore");
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    console.log("leaveStore");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(money, costPerBottle)
}

function calcBottles(money, costPerBottle) {
    var nBottles = Math.floor(money / costPerBottle);
    return nBottles
}

function calcChange(money, costPerBottle) {
    var change = money % costPerBottle;
    return change;
}
console.log("Hello, Master, here is your " + getMilk(5, 1.5) + " change.");