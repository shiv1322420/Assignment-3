var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];
var find = (a) => {
    var n = a.length + 1;
    console.log(n);
    var b = n * (n + 1) / 2;
    console.log(b);
    var miss;
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    miss = b - sum;
    console.log(miss);
};
find(a);