var arrayOfIntegers = [1, 2, 3, 5, 60];
var max = arrayOfIntegers[0];

arrayOfIntegers.forEach(function(n, index) {
    if (n > max) {
        max = n;
    }
    else {
        console.log("indexed valeu is smaller than Max value at index: " + index)
    }
});

console.log("Max value in the array is: " + max);