var isNumberInArray = function (number, array) {
    for (var i=0; i<array.length; i++) {
        if (number === array[i]) {
            return true;
        } 
    }
    return false;
}

isNumberInArray(3, [1, 2, 4, 5, 7, 8, 8, 9]);