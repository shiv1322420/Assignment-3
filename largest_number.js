var arr = [2, 3, 4, 510, 9, 8, 15, 67, 89, 23];

var sort = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }

    return arr;
    console.log(arr);
}

sort(arr);
    console.log(arr);
    
console.log(`largest element is :${arr[arr.length-1]}`);
console.log(`second largest element is :${arr[arr.length-2]}`);
