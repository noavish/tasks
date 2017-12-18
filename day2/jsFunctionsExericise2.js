var calcAge = function (birthYear) {
    console.log("You are either " + (new Date().getFullYear() - birthYear-1) + " or " + (new Date().getFullYear() - birthYear)) ;
}

var age = calcAge(1989);