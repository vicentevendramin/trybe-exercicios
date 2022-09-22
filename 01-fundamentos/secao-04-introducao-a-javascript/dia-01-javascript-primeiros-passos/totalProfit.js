const costProduct = 3;
const saleValue = 9;

if (costProduct >= 0 && saleValue >= 0) {
  const totalCostProduct = costProduct * 1.2;
  const profit = (saleValue - totalCostProduct) * 1000;
  console.log("Total profit = " + profit);
} else {
  console.log("Error: the values cannot be negative!")
}