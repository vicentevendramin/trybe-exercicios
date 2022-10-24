const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answersChecker = (rightAnswers, studentAnswers, total) => {
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      total += 1;
    }

    if (rightAnswers[index] !== studentAnswers[index] && studentAnswers[index] !== 'N.A') {
      total -= 0.5;
    }
  }

  return total;
};

const proofbroker = (rightAnswers, studentAnswers, callback) => {
  let total = 0;

  return `Total: ${callback(rightAnswers, studentAnswers, total)}`;
};

console.log(proofbroker(RIGHT_ANSWERS, STUDENT_ANSWERS, answersChecker));