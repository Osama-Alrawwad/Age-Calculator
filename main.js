// get elements
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let message = document.querySelector(".yourBirthday");
// get Current date
let curDate = new Date();
let curYear = curDate.getFullYear();
let curMonth = curDate.getMonth() + 1;
let curDay = curDate.getDate();

// format for input
let inputDate = document.getElementById("userAge");
let formattedMonth = curMonth < 10 ? "0" + curMonth : curMonth;
let formattedDay = curDay < 10 ? "0" + curDay : curDay;
inputDate.value = `${curYear}-${formattedMonth}-${formattedDay}`;

// get result elements
let year = document.querySelector("[data-year]");
let month = document.querySelector("[data-month]");
let day = document.querySelector("[data-day]");

btn.onclick = (event) => {
  event.preventDefault();
  let userBirth = new Date(inputDate.value);
  let userYear = userBirth.getFullYear();
  let userMonth = userBirth.getMonth() + 1;
  let userDay = userBirth.getDate();

  let diffYear = curYear - userYear;
  let diffMonth = curMonth - userMonth;
  let diffDay = curDay - userDay;

  if (diffDay < 0) {
    diffMonth -= 1;
    diffDay += 30;
  }
  if (diffMonth < 0) {
    diffYear -= 1;
    diffMonth += 12;
  }
  // Show Result

  if (
    userBirth > curDate ||
    !inputDate.value ||
    inputDate.value === `${curYear}-${formattedMonth}-${formattedDay}`
  ) {
    result.style.display = "none";
    message.style.display = "block";
    message.innerHTML = "Wrong Entery";
    message.style.color = "red";
    btn.style.marginBottom = "10px";
  } else {
    if (curMonth === userMonth && curDay === userDay) {
      message.innerHTML = "Happy Birthday🎉";
      message.style.display = "block";
      message.style.color = "black";
      btn.style.marginBottom = "10px";
    } else {
      message.style.display = "none";
    }
    year.innerHTML = `${diffYear} `;
    month.innerHTML = `${diffMonth} `;
    day.innerHTML = `${diffDay} `;
    result.style.display = "block";
    btn.style.marginBottom = "10px";
  }
};
