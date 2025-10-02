let score = 0;
let gameInterval;

function startGame() {
  score = 0;
  document.getElementById("score").innerText = "Score: 0";

  clearInterval(gameInterval);
  gameInterval = setInterval(spawnEmoji, 500);

  setTimeout(() => {
    clearInterval(gameInterval);
    alert("Hungama Over! Final Score: " + score);
  }, 30000);
}

function spawnEmoji() {
  const emojiList = ["🎈", "🎉", "💥", "😂", "😜", "🔥"];
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];

  emoji.style.top = Math.random() * 350 + "px";
  emoji.style.left = Math.random() * 90 + "%";

  emoji.onclick = () => {
    score += 10;
    document.getElementById("score").innerText = "Score: " + score;
    emoji.remove();
  };

  document.getElementById("game-area").appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 3000);
}
