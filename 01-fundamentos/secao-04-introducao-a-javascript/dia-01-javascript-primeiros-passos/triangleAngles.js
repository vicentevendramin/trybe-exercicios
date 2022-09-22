let angleA = 70;
let angleB = 100;
let angleC = 10;

let positivesAngles = angleA > 0 && angleB > 0 && angleC > 0;

let sumOfAngles = angleA + angleB + angleC;

if (positivesAngles) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Error: invalid angle");
}