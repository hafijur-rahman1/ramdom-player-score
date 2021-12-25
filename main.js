//users input
const userOneInput = document.querySelector("#u1Input");
const userTwoInput = document.querySelector("#u2Input");
const userThreeInput = document.querySelector("#u3Input");

//user selected number
const firstUserNum = document.querySelector(".u1selected");
const secondUserNum = document.querySelector(".u2selected");
const thirdUserNum = document.querySelector(".u3selected");

//show score selector
const winner = document.querySelector(".winner");
const score = document.querySelector(".winnerScore");

//press button
const press = document.querySelector(".btn-press");

//reload button
const reset = document.querySelector(".btn-relod");

// user button
const user1Btn = document.querySelector(".btn1");
const user2Btn = document.querySelector(".btn2");
const user3Btn = document.querySelector(".btn3");

//making and object and its value come frome input
let myObj = {};

//for user-1
user1Btn.addEventListener("click", (e) => {
  let getNum = Number(userOneInput.value);
  myObj.player1 = getNum;
  firstUserNum.textContent = getNum;
  userOneInput.value = "";
  user1Btn.setAttribute("disabled", "disabled");
});

//for user-2
user2Btn.addEventListener("click", (e) => {
  const getNum = Number(userTwoInput.value);
  myObj.player2 = getNum;
  secondUserNum.textContent = getNum;
  userTwoInput.value = "";
  user2Btn.setAttribute("disabled", "disabled");
});

//for user-3
user3Btn.addEventListener("click", (e) => {
  const getNum = Number(userThreeInput.value);
  myObj.player3 = getNum;
  thirdUserNum.textContent = getNum;
  userThreeInput.value = "";
  user3Btn.setAttribute("disabled", "disabled");
});

//******toss function************
function toss(myObj) {
  // console.log(myObj);
  let myPlayer = [];

  for (let player in myObj) {
    console.log(player);

    myPlayer.push(myObj[player]);
  }

  // console.log(myPlayer);

  let elem = Math.floor(Math.random() * myPlayer.length);
  console.log(elem);

  const item = myPlayer[elem];
  console.log(item);
  return item;
}

press.addEventListener("click", (e) => {
  const winScore = toss(myObj);

  for (let player in myObj) {
    if (myObj[player] === winScore) {
      winner.textContent = player;
    }
  }
  score.textContent = winScore;
  document.querySelector(".info").style.backgroundColor = "#EE204D";

  press.setAttribute("disabled", "disabled");
});

//reset button event
reset.addEventListener("click", (e) => {
  resetAll();
  // window.location.reload();
});

function resetAll() {
  let p1Num = 0;
  let p2Num = 0;
  let p3Num = 0;
  firstUserNum.textContent = p1Num;
  secondUserNum.textContent = p2Num;
  thirdUserNum.textContent = p3Num;
  winner.textContent = "";
  score.textContent = "";
  user1Btn.removeAttribute("disabled");
  user2Btn.removeAttribute("disabled");
  user3Btn.removeAttribute("disabled");
  press.removeAttribute("disabled");
  document.querySelector(".info").style.backgroundColor = "";
}
