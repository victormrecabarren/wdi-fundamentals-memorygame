var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("It's a match!");
} else {
	console.log("Sorry, try again");
};
};

var flipCard = function (cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length > 1) {
checkForMatch(); 
} else {
};
};
flipCard(1);
flipCard(2);
