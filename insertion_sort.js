var arr = [1, 32, 45, 65, 2, 3, 45, 89];
let insertionSort = (arr) =>  {
    for(let i = 1; i < arr.length; i++){
      let value =arr[i];
      let j = i - 1;
      while(j >= 0 && arr[j] > value){
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = value;
    }
    return arr;
  }

console.log(insertionSort(arr));