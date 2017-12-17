var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function highestOccuringItem (array) {
    var itemsObj = {};
    for (var i=0; i<array.length; i++) {
        if (array[i] in itemsObj) {
            itemsObj[array[i]]++;
        } else {
            itemsObj[array[i]] = 1;
        }
    }

    var highest = 0;
    var highestItem = 0;
    for (var item in itemsObj) {
        if (itemsObj[item] > highest) {
            highest = itemsObj[item];
            highestItem = item;
        }
    }
    console.log (highestItem);
}

highestOccuringItem (array);