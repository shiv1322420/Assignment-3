var items=[1,32,45,65,2,3,45,89];
var bubbleSort=(items)=> {
  var length = items.length;
  for (var i = 0; i < length; i++) { 
    for (var j = 0; j < (length - i - 1); j++) { 
      if (items[j] > items[j + 1]) {
        //Swap the numbers
        var tmp = items[j]; 
        items[j] = items[j + 1]; 
        items[j + 1] = tmp; 
      }
    }
  }
  return items;
}
console.log(bubbleSort(items));