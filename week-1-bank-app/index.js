const startingMinutes = 2;
const countDownEl = document.getElementById("countdown");
const btn = document.getElementById("button");
const iban = document.querySelector("#iban");
const number = document.querySelector("#number");
const password = 1234;

let passwordright = 4;
let time = startingMinutes * 60;
let bankAccount = document.querySelector("#acc-select");

// bank accounts
const bank = [
  {
    account: "5001",
    money: 900,
  },
  {
    account: "5002",
    money: 3000,
  },
  {
    account: "5003",
    money: 5500,
  },
  {
    account: "5004",
    money: 100,
  },
];

//Money Check
number.addEventListener("change", (e) => {
  for (let i = 0; i < bank.length; i++) {
    if (bankAccount.value == bank[i].account) {
      if (bank[i].money >= number.value) {
        btn.classList.remove("disabled");
      } else {
        btn.classList.add("disabled");
      }
      document.getElementById(
        "accountMoney"
      ).innerHTML = `Your Money is: ${bank[i].money} ₺`;
    }
  }
});

// time interval
setInterval(uptadeCountDown, 1000);

function uptadeCountDown() {
  // time is refreshing on here
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;
  if (time == 0) {
    alert("TIME IS DONE , PAGE IS REFRESHING");
    location.reload();
  }
}

btn.onclick = function sendMoney() {
  phoneCode();
};

// Phone Code Section
function phoneCode() {
  if (number.value < 500) {
    alert("Succesful");
  } else {
    alert("PLEASE ENTER YOUR CODE");
    const userpassword = prompt();
    if (userpassword == password) {
      alert("Succesful");
    } else {
      alert("PASSWORD IS NOT CORRECT");
      passwordright--;
      if (passwordright == 0) {
        alert("Your ACCOUNT IS SUSPENDED");
        location.reload();
      } else phoneCode();
    }
  }
}
