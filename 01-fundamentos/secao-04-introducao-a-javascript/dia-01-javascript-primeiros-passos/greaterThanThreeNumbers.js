let a = 10;
let b = 16;
let c = 16;

if (a > b && a > c) {
  console.log("'a' is greater than 'b' and 'c'");
} else if (a > b && a === c) {
  console.log("'a' is greater than 'b' and equal to 'c'");
} else if (a > c && a === b) {
  console.log("'a' is greater than 'c' and equal to 'b'");
} else if (b > a && b > c) {
  console.log("'b' is greater than 'a' and 'c'");
} else if (b > a && b === c) {
  console.log("'b' is greater than 'a' and equal to 'c'");
} else if (b > c && b === a) {
  console.log("'b' is greater than 'c' and equal to 'a'");
} else if (c > a && c > b) {
  console.log("'c' is greater than 'a' and 'b'");
} else if (c > a && c === b) {
  console.log("'c' is greater than 'a' and equal to 'b'");
} else if (c > b && c === a) {
  console.log("'c' is greater than 'b' and equal to 'a'");
} else {
  console.log("the three numbers are equal");
}