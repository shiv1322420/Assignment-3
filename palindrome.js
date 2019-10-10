var str="rat rat";
var str1=str.split('').reverse().join('');
if(str===str1)
{
    console.log("string is palindrome");
}
else{
    console.log("string is not palindrome");
}