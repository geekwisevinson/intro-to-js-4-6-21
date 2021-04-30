const suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a' ];



function getFullDeck() {
    return suits.flatMap( function(suit) {

        return values.map( function( value) {
            return { value, suit}
        })
    
    });
}

let all = getFullDeck();
all = all.concat(getFullDeck(), getFullDeck(), getFullDeck())

console.log(all);

const divs = document.querySelectorAll('div');

console.log(divs);


let current = 0;

function drawFrom(index) {
    divs[0].innerHTML = all[index].value;

    divs[1].innerHTML = all[index + 1].value;
    
    divs[2].innerHTML = all[index + 2].value;
}

drawFrom(current);

const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', function() {
    current--;
    if (current < 0) {
        current = all.length - 4;
    }
    drawFrom(current);
});
buttons[1].addEventListener('click', function() {
    current++;
    if (current > all.length - 4) {
        current = 0;
    }
    drawFrom(current);
})