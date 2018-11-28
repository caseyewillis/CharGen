var race = document.getElementById("randomRace").value;

var items = [
	'Sword',
	'Shield',
	'Mace',
]

var races = [
	'Human',
	'Elf',
	'Dwarf',
	'Halfling',
]

var humanHairColor = [
	'Medium Brown',
	'Dark Brown',
	'Light Brown',
	'Sienna',
	'Black',
	'Ash Blonde',
	'Chestnut',
	'Ginger',
	'Corn',
	'Red',
	'Salt and Pepper',
	'Blue Black',
	'Grey',
	'Silver',
	'White',
	'Jet Black',
	'Bald',
]


function randomItem() {
	var randomNumber = Math.floor(Math.random() * (items.length));
	document.getElementById('randomDisplay').innerHTML = items[randomNumber];
}

function randomRace() {
	var randomNumber = Math.floor(Math.random() * (races.length));
	race = races[randomNumber];
	document.getElementById('randomRace').innerHTML = race;
}

function getHairColor(){
	if (race === "Human"){
		console.log("Human");
		randomHumanHair();
	}
	else{
		document.getElementById('randomHairColor').innerHTML = " ";
	}
}



function randomHumanHair() {
	var randomNumber = Math.floor(Math.random() * (humanHairColor.length));
	document.getElementById('randomHairColor').innerHTML = humanHairColor[randomNumber];
}