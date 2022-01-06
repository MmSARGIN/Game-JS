let player_score = document.querySelector(".kutu oyuncu_skor");
let compScore = document.querySelector(".kutu bilgisayar_skor");
let rock = document.querySelector("#tas");
let paper = document.querySelector("#kagit");
let scissors = document.querySelector("#makas");
let player = document.querySelector("#oyuncu_secimi");
let computer = document.querySelector("#bilgisayar_secimi");
let message = document.querySelector(".mesaj")
console.log(message)
rock.addEventListener("click", rockFunc);
function rockFunc() {
  player.src = rock.src;
  const choose = ["tas", "kagit", "makas"];
  const random = Math.floor(Math.random() * 3);
  computer.setAttribute("src", `res/${choose[random]}.png`);
  resultFunc()
}
paper.addEventListener("click", paperFunc);
function paperFunc() {
  player.src = paper.src;
  const choose = ["tas", "kagit", "makas"];
  const random = Math.floor(Math.random() * 3);
  computer.setAttribute("src", `res/${choose[random]}.png`);
  resultFunc()
}
scissors.addEventListener("click", scissorsFunc);
function scissorsFunc() {
  player.src = scissors.src;
  const choose = ["tas", "kagit", "makas"];
  const random = Math.floor(Math.random() * 3);
  computer.setAttribute("src", `res/${choose[random]}.png`);
  resultFunc()
}

function win() {
    player_score = player_score + 1
    message.innerHTML = "TEBRİKLER"
}
function lose() {
    compScore = player_score + 1
    message.innerHTML = "BİLGİSYAR KAZANDI"
}
function draw() {
    message.innerHTML = "BERABERE"
}


function resultFunc(player, computer) {
  switch (player + computer) {
    case "rockscissors":
      win();
      break;
    case "paperrock":
      win();
      break;
    case "scissorspaper":
      win();
      break;
    case "paperscissors":
      lose();
      break;
    case "scissorsrock":
      lose();
      break;
    case "rockpaper":
      lose();
      break;
    case "tastas":
      draw();
      break;
    case "makasmakas":
      draw();
      break;
    case "kagitkagit":
      draw();
      break;
  }
}




