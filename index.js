;

const choices = ["rock", "paper", "scissors"];

function playGame() {

  const ranNumComp = Math.floor(Math.random() * 3);
  document.getElementById("computer").innerHTML = "Computer: " + choices[ranNumComp];

  const ranNumPlayer = Math.floor(Math.random() * 3);
  document.getElementById("player").innerHTML = "Player: " + choices[ranNumPlayer];

  if (ranNumComp === ranNumPlayer) {
    document.getElementById("result").innerHTML = "Draw";
  } else if ((ranNumComp === 1 && ranNumPlayer === 0) || (ranNumComp === 2 && ranNumPlayer === 1) || (ranNumComp === 0 && ranNumPlayer === 2)) {
    document.getElementById("result").innerHTML = "Computer Wins";
  } else {
    document.getElementById("result").innerHTML = "Player Wins";
  }
}