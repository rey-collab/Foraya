document.addEventListener("click", () => {
  const heart = document.createElement("div");
  heart.innerHTML = "💗";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "24px";
  heart.style.animation = "float 3s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

const bgm = document.getElementById("bgm");
document.addEventListener("click", () => {
  if (bgm) bgm.play();
}, { once: true });
