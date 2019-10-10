function Permutations(st) {
  var results = [];

  if (st.length === 1) {
    results.push(st);
    return results;
  }

  for (var i = 0; i < st.length; i++) {
    var fc = st[i];
    var cl = st.substring(0, i) + st.substring(i + 1);
    var innerPermutations = Permutations(cl);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(fc + innerPermutations[j]);
    }
  }
  return results;
}
var st="abc";
console.log(Permutations(st));

