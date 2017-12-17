function addDashs (num) {
    var numArr = num.split('');
    for (var i=0; i<numArr.length-1; i++) {
        if (numArr[i]%2 == 0 && numArr[i+1]%2 == 0) {
            numArr.splice(i+1, 0, '-');
            i++;
        }
    }
    console.log(numArr.join(''));
}

addDashs ('025468');