
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const letter = document.getElementById("letter");
const hint = document.getElementById("hint");
const reopenButton = document.getElementById("reopenButton");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// Open letter
openButton.addEventListener("click", () => {
  envelope.classList.add("open");
  openButton.disabled = true;
  hint.textContent = "A little message from my heart ♡";

  // Wait for the envelope animation
  setTimeout(() => {
    letter.classList.add("visible");
    letter.setAttribute("aria-hidden", "false");
    reopenButton.hidden = false;

    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 800);
});

// Reopen / reset letter
reopenButton.addEventListener("click", () => {
  letter.classList.remove("visible");
  letter.setAttribute("aria-hidden", "true");
  envelope.classList.remove("open");
  openButton.disabled = false;
  reopenButton.hidden = true;
  hint.textContent = "Tap the heart to open your letter";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Background music
musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "♫ Pause music";
    } catch (error) {
      musicButton.textContent = "Add music.mp3 first";
    }
  } else {
    music.pause();
    musicButton.textContent = "♫ Play music";
  }
});

// Falling petals
const petalsContainer = document.getElementById("petals");
const petalSymbols = ["✿", "❀", "♡", "❋"];

function createPetal() {
  const petal = document.createElement("span");

  petal.className = "petal";
  petal.textContent =
    petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = 10 + Math.random() * 12 + "px";
  petal.style.opacity = 0.3 + Math.random() * 0.5;
  petal.style.animationDuration = 5 + Math.random() * 6 + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 650);
