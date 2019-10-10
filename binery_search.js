var arr = [10, 20, 34, 56, 78, 90];
var item = 78;
var seach = (arr, item) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === item) {
            return `Present at postion ${mid}`;
        }
        if (arr[mid] < item) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return "not found";
}
console.log(seach(arr, item))
