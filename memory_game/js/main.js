var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[3];

cardsInPlay.push(cardOne);

	console.log("User flipped king");

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

	console.log("User flipped king");

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("It's a match!");
} else {
	alert("Sorry, try again");
};