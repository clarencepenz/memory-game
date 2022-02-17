/*
 * Create a list that holds all of your cards
 */



var icons = ["fa fa-diamond","fa fa-diamond","fa fa-paper-plane-o",
"fa fa-paper-plane-o","fa fa-anchor","fa fa-anchor","fa fa-leaf","fa fa-leaf",
"fa fa-bomb","fa fa-bomb","fa fa-bolt","fa fa-bolt","fa fa-bicycle","fa fa-bicycle","fa fa-cube","fa fa-cube"]

/*icons.push('green');


icons.forEach(function(shake){
	console.log(shake);
});

console.log(icons.sort());






for (var i = 0; i <= 10; i++) {

	console.log(i)
	
}


var i = 0;
while(i<10){
	console.log('This is everything ' + i);
	i++;
}

var numbers = [12,22,344,233,89]

numbers.forEach(function(number){

	console.log(number)
}

	);


var letters = [2,2,3,4,5,6,7,8,0]
letters.reverse();

for (var i = 0;  i < letters.length; i++) {
	console.log(letters[i]);
*/


const deck = document.querySelector('.deck');

let stringMoves = document.querySelector(".moves");

let listItems = [];

let moves = stringMoves.textContent = 0;

let matched = document.querySelector(".match")

let stars = document.getElementById("stars")

let matchedItems = [];

let timer = document.getElementById("timer").innerHTML = "0mins 0secs";

let interval;

int();


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


  function int(){
  	shuffle(icons)
  	for(icon of icons){
  		let card = document.createElement("DIV");
  		card.classList.add("card");
  		card.innerHTML = "<i class ='" + icon +"'</i>";
  		deck.appendChild(card)
  	}
  }


  function createStars(){
  	for(let i = 0;  i < 3; i++){
  		const star = document.createElement("li")
  		star.classList.add("fa", "fa-stars")
  		stars.appendChild(star);
  	}
  }

 

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//1st step






//second
deck.addEventListener("click", function(e){
	if (e.target.nodeName === "DIV") {

		addMove();
		open(e);
		add(e);
		check();
		ratings();
	
	}
})


function addMove(){
	moves++;
	if (moves === 1){
		Timer();
	}
stringMoves.textContent = moves;

}


function open(e){
	if (e.target.nodeName === "DIV"){
		let card = e.target
		card.classList.add("open", "show")
	}
}

function add(e){
	if(e.target.nodeName === "DIV"){
		let card = e.target;
		listItems.push(card);
		console.log(listItems);
	}

}


function check(){
	if((listItems.length === 2) && (listItems[0].innerHTML === listItems[1].innerHTML)){
		listItems[0].classList.add("match")
		listItems[1].classList.add("match")
		isMatched();
		listItems = [];
	}else setTimeout(() =>{
		if((listItems.length ===2) && (listItems[0].innerHTML != listItems[1].innerHTML)){
			listItems[0].classList.remove("show", "open")
			listItems[1].classList.remove("show", "open")
			listItems = [];
		}

	}, 500);

	if(listItems.length > 2){
		listItems[0].classList.remove("show", "open");
		listItems[1].classList.remove("show", "open");
		listItems[2].classList.remove("show", "open");
		listItems=[];
	}


}

function ratings(){
	if(moves === 25){
		stars.firstChildElement.remove();

	}else{
		if((moves >= 35) && (moves <36)){
				stars.firstChildElement.remove();
		}
	}
}



function isMatched(){

matchedItems.push(listItems[0]);
matchedItems.push(listItems[1]);

}


function Timer(){
	     var h = 00
        var m = 00
        var s = 00
    interval = setInterval( function() {
        s++
        if (s == 60) {
            m++
            s = 0
        }
        if (m == 60) {
            h++
            m = 0
        }
        document.getElementById("timer").innerHTML = `${m}mins ${s}secs`
    }, 1000);
}



/*learnig bout numbers

var  numbers = 30;
var  name= "CLarence";


console.log("my name is" + " " + name + " " + numbers);



var fruits = ["apple","orange","pear"];
console.log(fruits[1]);



var x = 4;
var y = 3;
if (x==y && x==3) {

	console.log(x)
}else{
	console.log("error");
}




var fruits = 'appe';

switch(fruits){
	case "banana":
	console.log('banana make sense');
	break;

	case "apple":
	console.log('how far');
	break;

	default:
	console.log("cool");
	break;


}



// Object literal


var person = {

	firstName: 'Clarence',
	lastName: 'bakosi',
	age: 23,
	children:  ['clare', 'kyle'],
	address: {
			street: 'something blah blah blah',
			state: 'ph',
			city: 'rivers'
	},

	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
}

console.log(person.fullName());



//object constructor

var apple = new Object();
apple.color = "red";
apple.shape = 'round';


apple.describe = function(){
	return 'An apple is'+" " + this.color + ' and the shape is ' +" "+ this.shape;
}

console.log(apple.describe());


//constructor pattern

function Fruit(name, color, shape){
	this.name = name;
	this.color = color;
	this.shape = shape;

	//method

	this.describe = function(){
		return 'name is ' + this.name + ' color is ' + " " + this.color
		+ ' shape is ' + " " + this.shape;
	}
}

// new fruits
	var apple = new Fruit('apple', 'red', 'round');
	var banana = new Fruit('banana', 'yellow', 'curve-long');

console.log(banana.describe());


//object arrays

var users = [
	
	{
		name: 'Jone doe',
		age: '30'
	},

	{
		name: 'Rich More',
		age: '20'
	},
	{
		name: 'Silais wrath',
		age: '39'
	}

];

console.log(users[1]);

*/