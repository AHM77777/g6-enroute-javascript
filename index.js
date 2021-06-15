const { Deck, Hand } = require('./app/deck/deck');

const new_deck = new Deck();
const new_hand = new Hand(new_deck, 5);
console.log(new_hand.cards);
