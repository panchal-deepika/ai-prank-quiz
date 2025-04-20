document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("result").textContent = "Analyzing your answers...";
  
  setTimeout(() => {
    document.getElementById("result").textContent = "You're a creative and curious mind! 🤖";
  }, 2000);
});

// 🧨 PRANK TRIGGER - after 10 minutes
setTimeout(() => {
  startPrank();
}, 10 * 60 * 1000); // 10 minutes

function startPrank() {
  document.body.innerHTML = "";
  document.body.style.background = "black";
  
  const hackedMessage = document.createElement("div");
  hackedMessage.style.color = "red";
  hackedMessage.style.fontSize = "40px";
  hackedMessage.style.marginTop = "200px";
  hackedMessage.textContent = "⚠ SYSTEM HACKED ⚠";

  document.body.appendChild(hackedMessage);

  // After 60 seconds, reveal it's a prank
  setTimeout(() => {
    alert("😈 Prank by a mysterious dev! 😂");
    location.reload();
  }, 60000);
}
