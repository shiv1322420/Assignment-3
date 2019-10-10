var number = 371;
var sum = 0;
var check = (number) => {
    var arr = [];
    arr.push(number);
    arr = arr.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        var cube = (arr[i] * arr[i] * arr[i]);
        sum = sum + cube;
    }
    return sum;
}
check(number);
if (sum === number) {
    console.log("number is armstrong");
}
else {
    console.log("number is not armstrong");
}