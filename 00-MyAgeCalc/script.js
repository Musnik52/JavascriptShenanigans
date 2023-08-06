const dateInput = document.getElementById("date");
const result = document.getElementById("result");
const btnCalc = document.querySelector(".btn");
dateInput.max = new Date().toISOString().split("T")[0];

const dateBreakdown = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return [day, month, year];
};

const totalDaysofMonth = (year, month) => new Date(year, month, 0).getDate();

const calcAge = () => {
  const birthDate = new Date(dateInput.value);
  const [birthDay, birthMonth, birthYear] = dateBreakdown(birthDate);

  const now = new Date();
  const [nowDay, nowMonth, nowYear] = dateBreakdown(now);

  let calcDay, calcMonth, calcYear;

  calcYear = nowYear - birthYear;
  if (nowMonth >= birthMonth) {
    calcMonth = nowMonth - birthMonth;
  } else {
    calcYear--;
    calcMonth = 12 + nowMonth - birthMonth;
  }
  if (nowDay >= birthDay) {
    calcDay = nowDay - birthDay;
  } else {
    calcMonth--;
    calcDay = totalDaysofMonth(birthYear, birthMonth) + nowDay - birthDay;
  }
  if (calcMonth < 0) {
    calcYear--;
    calcMonth = 11;
  }
  result.innerHTML = `
  You are <span>${calcYear}</span> years, <span>${calcMonth}</span> months and <span>${calcDay}</span> days old!
  `;
};

btnCalc.addEventListener("click", calcAge);
