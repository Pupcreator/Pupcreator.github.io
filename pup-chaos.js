let logoClicks = 0;

const toastMessages = [
  "🐾 Pup fell asleep on the server.",
  "🥛 Milk delivery delayed by 3 naps.",
  "🍪 Cookie black market activity detected.",
  "👑 Council vote failed. Everyone asleep.",
  "🧸 Plushie theft reported in Sector 4.",
  "📻 Pup Radio signal unstable. Maow detected.",
  "🚨 Escaped Pup seen near daycare.",
  "💤 12,441 Pups entered emergency nap mode."
];

function showPupToast(message) {
  const toast = document.getElementById("pup-toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

setInterval(() => {
  const msg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
  showPupToast(msg);
}, 30000);

const logo = document.getElementById("site-logo");

if (logo) {
  logo.style.cursor = "pointer";

  logo.addEventListener("click", () => {
    logoClicks++;

    if (logoClicks === 7) {
      document.body.classList.add("council-mode");
      document.getElementById("secret-council-panel").style.display = "block";
      showPupToast("👑 SECRET COUNCIL MODE UNLOCKED.");
      logoClicks = 0;
    }
  });
}

function closeCouncilMode() {
  document.body.classList.remove("council-mode");
  document.getElementById("secret-council-panel").style.display = "none";
}

function moveWalkingPup() {
  const pup = document.getElementById("walking-pup");
  if (!pup) return;

  pup.style.left = "-80px";

  setTimeout(() => {
    pup.style.left = "110%";
  }, 500);
}

setInterval(moveWalkingPup, 45000);
