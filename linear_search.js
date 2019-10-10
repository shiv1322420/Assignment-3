var arr = [1, 32, 65, 2, 3, 45, 89];
var item = 65;
var i
var result;
let linear = (arr, item) => {

    for (i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }

    }
}

if (linear(arr, item)) {
    console.log(`item ${item} is found at ${i}`)
}
else {
    console.log(`item ${item} is not found`);
}
