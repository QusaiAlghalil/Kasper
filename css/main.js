// function orderWeight(strng) {
//   strng = strng.split(" ");
//   var obj = {};
//   for (let i of strng) {
//     obj[i] = i.split("").reduce((ac, e) => ac + +e, 0);
//   }

//   return strng
//     .sort((a, b) => obj[a] - obj[b])
//     .sort((a, b) => {
//       if (obj[a] == obj[b]) return a.charCodeAt(0) - b.charCodeAt(0);
//     })
//     .join(" ");
// }

function orderWeight(st) {
  let res = st
    .split(" ")
    .sort(
      (a, b) =>
        a.split("").reduce((ac, e) => ac + +e, 0) -
        b.split("").reduce((acc, ee) => acc + +ee, 0)
    );
  return res;
}
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

console.log(String.fromCharCode(3328989838987932831));
