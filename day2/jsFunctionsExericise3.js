var isPrime = function (number) {
    if (number > 1) {
        for (var i=2; i<number; i++) {
            if (number % i === 0) {
                return false;
            }  
        }
        return true;
    }
    return false;
}

isPrime (13);