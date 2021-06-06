const deck = new Deck();
let card1,card2,card3,card4,card5,playerCard1,playerCard2;
 
function deal() {
  if (deck.length()<7) {
    deck.reset();
    deck.shuffle();
  }  
  card1 = new Card(deck.deal());
  card2 = new Card(deck.deal());
  card3 = new Card(deck.deal());
  card4 = new Card(deck.deal());
  card5 = new Card(deck.deal());
  playerCard1 = new Card(deck.deal());
  playerCard2 = new Card(deck.deal());
  
  card1.displayCard("card1",false);  
  card2.displayCard("card2",false);  
  card3.displayCard("card3",false);  
  card4.displayCard("card4",false);  
  card5.displayCard("card5",false);  
  playerCard1.displayCard("playerCard1",true);  
  playerCard2.displayCard("playerCard2",true); 
}
 
function nextStep(el) {
  if (!card1.flipped) {
    card1.flip();
    card2.flip();
    card3.flip();
    el.innerHTML="Reveal 4<sup>th</sup> card";
  } else if(!card4.flipped) {
    card4.flip();
    el.innerHTML="Reveal 5<sup>th</sup> card";
} else if(!card5.flipped) {
    card5.flip();
    el.innerHTML="New Round";
} else {
  deal();
  el.innerHTML="Reveal first 3 cards.";
}
}
 
deal();