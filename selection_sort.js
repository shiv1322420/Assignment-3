var arr = [1, 32, 45, 65, 2, 3, 45, 89];
let selectionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }

    }

    return arr;
}
console.log(selectionSort(arr));