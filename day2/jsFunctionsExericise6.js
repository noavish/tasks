var printSmallerThan = function (number, array) {
    for (var i=0; i<array.length; i++) {
        if (number > array[i]) {
            console.log(array[i]);
        } 
    }
}

printSmallerThan(3, [1, 2, 4, 5, 7, 8, 8, 9]);