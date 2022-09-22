let percentage = 70;

if (percentage > 100 || percentage < 0) {
  console.log("Error: invalid percentage!");
} else if (percentage >= 90) {
  console.log("A");
} else if (percentage >= 80) {
  console.log("B");
} else if (percentage >= 70) {
  console.log("C");
} else if (percentage >= 60) {
  console.log("D");
} else if (percentage >= 50) {
  console.log("E");
} else {
  console.log("F");
}