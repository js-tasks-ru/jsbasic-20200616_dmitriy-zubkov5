/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  let flag = 0;
  
  for (let key in salaries) {

    if (typeof salaries[key] === "number") {
      sum = sum + salaries[key];
      flag++;
    }
  }
  if (flag > 0) {
    return sum;
  } else {
    return 0;
  }
}
