var myColor = ["Red", "Green", "White", "Black"];
var stringToConsole = myColor[0];
for (var i=1; i<myColor.length; i++) {
    stringToConsole += " + " + myColor[i];
}
console.log (stringToConsole);