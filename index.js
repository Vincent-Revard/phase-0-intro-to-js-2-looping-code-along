// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }

    return gifts;
}

wrapGifts(gifts);

//

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(names, surprise) {
    let thankYouMessages = [];
    for (let i =0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
    }

    return thankYouMessages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");



function countDown() {
    let newNumber = [];
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    return newNumber;
}



