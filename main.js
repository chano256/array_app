var roster = []

function addNew() {
	var newName = prompt("What name would you like to add")
	roster.push(newName)
}
function remove() {
	var removeName = prompt("What name would you like to remove")
	var index = roster.indexOf(removeName);
	roster.splice(index, 1)
}
function display() {
	console.log(roster);
}

var start = prompt("Would you like to start the Roster Program? y/n")
var request = "empty"

if(start === 'y') {
	while(request != "quit") {
		request = prompt("Please select an action: add, display, remove, quit")
		
		if(request === 'add') {addNew();}
		else if(request === 'display') {display();}
		else if(request === 'remove') {removeName();}
		else() {alert("Not recognised")}
	}
}
alert("Thanks for using our app, Please refresh to start over again.")