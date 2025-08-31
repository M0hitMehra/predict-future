class TomorrowInator {
  constructor() {
    this.predictions = [
      "The sun will mysteriously rise in the east (shocking, I know!) 🌅",
      "Gravity will continue to work as expected (revolutionary!) 🍎",
      "Your coffee will taste like coffee (unless it's tea) ☕",
      "Monday will follow Sunday with 99.9% certainty* 📅",
      "The internet will still exist (probably) 🌐",
      "Your phone battery will drain when you use it (mind-blowing!) 🔋",
      "Traffic lights will change colors in a predictable pattern 🚦",
      "Your cat will judge you silently (as usual) 🐱",
      "The weather will be... weather-like 🌤️",
      "Time will move forward at exactly 1 second per second ⏰",
      "Your socks will mysteriously disappear in the laundry 🧦👻",
      "Someone will ask 'Is it Friday yet?' (even if it's Tuesday) 😴",
      "You'll check your phone at least 47 times 📱",
      "A random song will get stuck in your head 🎵",
      "You'll forget why you walked into a room 🚪❓",
      "Your pet will do something adorable and you'll miss it 🐕💔",
      "You'll say 'I should go to bed early' but won't 🛏️😅",
      "Someone will complain about the weather ☔😤",
      "You'll find a hair in your food (probably yours) 🍝💇",
      "The WiFi will work perfectly until you need it most 📶💀",
    ];

    this.mysticalPhrases = [
      "The cosmic energies whisper to me... 👻",
      "I consult the ancient calendar spirits... 🕯️",
      "The quantum flux reveals... ⚡",
      "My crystal ball shows with 100% accuracy... 🔮",
      "The time lords have spoken... 👑",
      "According to my mystical calculations... 🧮",
      "The universe has decreed... 🌌",
      "My supernatural powers detect... 🦸‍♂️",
      "The fabric of spacetime indicates... 🕳️",
      "The prophecy foretells... 📜",
      "The ghosts of calendars past reveal... 👻📅",
      "My third eye sees clearly... 👁️",
      "The ancient runes spell out... ᚱᚢᚾᛖᛋ",
      "The mystical algorithms compute... 🤖✨",
      "The spirits of tomorrow whisper... 🌙👻",
      "My magical 8-ball declares... 🎱",
    ];

    this.init();
  }

  init() {
    const button = document.getElementById("predict-btn");
    const predictionDiv = document.getElementById("prediction");

    button.addEventListener("click", () => {
      this.createSparkles();
      this.animatePrediction(predictionDiv);
      this.createMysticalEffects();
    });

    // Add some ambient effects
    setInterval(() => this.createAmbientSparkle(), 2000);
    setInterval(() => this.createFloatingGhost(), 8000);
    setInterval(() => this.createMysticalOrb(), 5000);

    // Add mystical runes around the page
    this.createMysticalRunes();

    // Add spooky sounds (visual representation)
    this.addSpookySoundEffects();
  }

  animatePrediction(element) {
    const button = document.getElementById("predict-btn");
    button.disabled = true;
    button.textContent = "🔮 CHANNELING COSMIC FORCES... 🔮";

    // More dramatic loading sequence
    const loadingMessages = [
      "🌟 Peering through the mists of time... 🌟",
      "👻 Consulting the spirits of tomorrow... 👻",
      "⚡ Charging mystical batteries... ⚡",
      "🔥 The future burns bright in my mind! 🔥",
      "🌙 Aligning with lunar frequencies... 🌙",
      "✨ Decoding temporal signatures... ✨",
    ];

    let messageIndex = 0;
    const showNextMessage = () => {
      if (messageIndex < loadingMessages.length) {
        element.innerHTML = loadingMessages[messageIndex];
        messageIndex++;
        setTimeout(showNextMessage, 500);
      } else {
        this.revealTomorrow(element);
        button.disabled = false;
        button.textContent = "✨ ACTIVATE TEMPORAL VISION ✨";
      }
    };

    showNextMessage();
  }

  revealTomorrow(element) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const tomorrowString = tomorrow.toLocaleDateString("en-US", options);
    const mysticalPhrase = this.getRandomItem(this.mysticalPhrases);
    const prediction = this.getRandomItem(this.predictions);

    const dayOfWeek = tomorrow.toLocaleDateString("en-US", { weekday: "long" });
    const specialDayPrediction = this.getSpecialDayPrediction(
      dayOfWeek,
      tomorrow
    );

    element.innerHTML = `
            <div style="animation: fadeIn 1s ease-in;">
                <p style="color: #ffd700; font-size: 1.1em; margin-bottom: 15px;">
                    ${mysticalPhrase}
                </p>
                <p style="color: #ff69b4; font-size: 1.3em; font-weight: bold; margin-bottom: 15px;">
                    Tomorrow shall be: <span style="color: #00ffff;">${tomorrowString}</span>
                </p>
                <p style="color: #98fb98; margin-bottom: 10px;">
                    ${prediction}
                </p>
                ${specialDayPrediction}
                <p style="color: #dda0dd; font-size: 0.9em; margin-top: 15px; font-style: italic;">
                    *Accuracy guaranteed by the Department of Obvious Predictions
                </p>
            </div>
        `;
  }

  getSpecialDayPrediction(dayOfWeek, date) {
    const specialPredictions = {
      Monday:
        "⚠️ BONUS PREDICTION: People will complain about it being Monday! The Monday Monster awakens! 👹",
      Tuesday:
        "🌮 BONUS PREDICTION: Someone will mention 'Taco Tuesday' even if they're eating pizza! 🍕",
      Wednesday:
        "🐪 BONUS PREDICTION: Hump Day will be referenced at least 23 times! 📈",
      Thursday:
        "⚡ BONUS PREDICTION: People will say 'Almost Friday!' with desperate hope! 🙏",
      Friday:
        "🎉 BONUS PREDICTION: Someone will say 'TGIF' at least 47 times! The weekend spirits rejoice! 👻🎊",
      Saturday:
        "🛏️ BONUS PREDICTION: You'll sleep in and feel guilty about it! The Bed Demon wins again! 😈",
      Sunday:
        "😱 BONUS PREDICTION: Sunday scaries will mysteriously appear around 6 PM! The Monday Monster stirs! 👹",
    };

    // Check for special dates
    const month = date.getMonth();
    const day = date.getDate();

    if (month === 3 && day === 1) {
      // April 1st
      return "<p style='color: #ff6347;'>🃏 EXTRA SPECIAL: April Fools' Day detected! Trust nothing! Even this prediction might be fake! 🤡</p>";
    }

    if (month === 11 && day === 25) {
      // December 25th
      return "<p style='color: #ff6347;'>🎄 EXTRA SPECIAL: Christmas detected! Santa's sleigh will mysteriously appear on radar! Ho ho ho! 🎅</p>";
    }

    if (month === 9 && day === 31) {
      // October 31st
      return "<p style='color: #ff6347;'>🎃 EXTRA SPECIAL: Halloween detected! Ghosts will be 73% more active! Spooky level: MAXIMUM! 👻💀</p>";
    }

    if (month === 1 && day === 14) {
      // Valentine's Day
      return "<p style='color: #ff6347;'>💕 EXTRA SPECIAL: Valentine's Day detected! Love potions will be 42% more effective! 💘</p>";
    }

    if (month === 2 && day === 17) {
      // St. Patrick's Day
      return "<p style='color: #ff6347;'>🍀 EXTRA SPECIAL: St. Patrick's Day detected! Leprechauns will hide your car keys! 🌈</p>";
    }

    if (month === 6 && day === 4) {
      // July 4th
      return "<p style='color: #ff6347;'>🎆 EXTRA SPECIAL: Independence Day detected! Fireworks will go boom! Revolutionary! 🇺🇸</p>";
    }

    if (day === 13 && [0, 4, 7].includes(date.getDay())) {
      // Friday the 13th (or any 13th that falls on Fri/Mon/Tue for fun)
      return "<p style='color: #ff6347;'>😈 EXTRA SPOOKY: The 13th detected! Black cats will judge you extra hard today! 🐱‍⬛</p>";
    }

    return specialPredictions[dayOfWeek]
      ? `<p style='color: #ff6347;'>${specialPredictions[dayOfWeek]}</p>`
      : "";
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  createSparkles() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.createSparkle();
      }, i * 200);
    }
  }

  createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = "✨";
    sparkle.style.left = Math.random() * (window.innerWidth - 50) + "px";
    sparkle.style.top = Math.random() * (window.innerHeight - 50) + "px";
    sparkle.style.position = "fixed";
    sparkle.style.zIndex = "1";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 3000);
  }

  createAmbientSparkle() {
    const sparkles = [
      "⭐",
      "✨",
      "🌟",
      "💫",
      "🔮",
      "🌙",
      "⚡",
      "💎",
      "🎭",
      "🦄",
    ];
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = this.getRandomItem(sparkles);
    sparkle.style.left = Math.random() * (window.innerWidth - 50) + "px";
    sparkle.style.top = Math.random() * (window.innerHeight - 50) + "px";
    sparkle.style.fontSize = Math.random() * 1.5 + 0.5 + "rem";
    sparkle.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    sparkle.style.position = "fixed";
    sparkle.style.zIndex = "1";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 4000);
  }

  createFloatingGhost() {
    const ghosts = ["👻", "🎃", "🦇", "🕷️", "🌙", "🔮"];
    const ghost = document.createElement("div");
    ghost.className = "ghost";
    ghost.textContent = this.getRandomItem(ghosts);
    ghost.style.top = Math.random() * (window.innerHeight - 100) + "px";
    ghost.style.left = "-100px";
    ghost.style.fontSize = Math.random() * 2 + 1 + "rem";
    ghost.style.position = "fixed";
    ghost.style.zIndex = "1";

    document.body.appendChild(ghost);

    setTimeout(() => {
      ghost.remove();
    }, 20000);
  }

  createMysticalOrb() {
    const orb = document.createElement("div");
    orb.className = "mystical-orb";
    orb.style.left = Math.random() * (window.innerWidth - 20) + "px";
    orb.style.bottom = "0px";
    orb.style.position = "fixed";
    orb.style.zIndex = "1";
    orb.style.background = `radial-gradient(circle, rgba(${
      Math.random() * 255
    },${Math.random() * 255},${
      Math.random() * 255
    },0.8), rgba(138,43,226,0.4))`;

    document.body.appendChild(orb);

    setTimeout(() => {
      orb.remove();
    }, 15000);
  }

  createMysticalRunes() {
    const runes = [
      "ᚠ",
      "ᚢ",
      "ᚦ",
      "ᚨ",
      "ᚱ",
      "ᚲ",
      "ᚷ",
      "ᚹ",
      "ᚺ",
      "ᚾ",
      "ᛁ",
      "ᛃ",
      "ᛇ",
      "ᛈ",
      "ᛉ",
      "ᛊ",
    ];

    for (let i = 0; i < 8; i++) {
      const rune = document.createElement("div");
      rune.className = "rune";
      rune.textContent = this.getRandomItem(runes);
      rune.style.left = Math.random() * (window.innerWidth - 50) + "px";
      rune.style.top = Math.random() * (window.innerHeight - 50) + "px";
      rune.style.position = "fixed";
      rune.style.zIndex = "1";
      rune.style.animationDelay = Math.random() * 10 + "s";

      document.body.appendChild(rune);
    }
  }

  createMysticalEffects() {
    // Create extra sparkles during prediction
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.createAmbientSparkle();
      }, i * 100);
    }

    // Create floating text effects
    this.createFloatingText();
  }

  createFloatingText() {
    const mysticalWords = [
      "MAGIC",
      "SPOOKY",
      "COSMIC",
      "MYSTICAL",
      "ETHEREAL",
      "ENCHANTED",
    ];
    const word = this.getRandomItem(mysticalWords);

    const floatingText = document.createElement("div");
    floatingText.style.position = "fixed";
    floatingText.style.left = Math.random() * (window.innerWidth - 200) + "px";
    floatingText.style.top = Math.random() * (window.innerHeight - 100) + "px";
    floatingText.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    floatingText.style.fontSize = "2rem";
    floatingText.style.fontFamily = "Creepster, cursive";
    floatingText.style.opacity = "0.7";
    floatingText.style.pointerEvents = "none";
    floatingText.style.zIndex = "1";
    floatingText.style.animation = "sparkleFloat 3s ease-out forwards";
    floatingText.textContent = word;

    document.body.appendChild(floatingText);

    setTimeout(() => {
      floatingText.remove();
    }, 3000);
  }

  addSpookySoundEffects() {
    // Visual representation of spooky sounds
    const soundEffects = [
      "💀 *WHOOSH*",
      "🌙 *MYSTICAL HUM*",
      "⚡ *ZAP*",
      "👻 *BOO*",
    ];

    setInterval(() => {
      if (Math.random() < 0.3) {
        // 30% chance every interval
        const soundEffect = document.createElement("div");
        soundEffect.style.position = "fixed";
        soundEffect.style.top = "20px";
        soundEffect.style.right = "20px";
        soundEffect.style.color = "rgba(255,255,255,0.6)";
        soundEffect.style.fontSize = "0.8rem";
        soundEffect.style.fontStyle = "italic";
        soundEffect.style.pointerEvents = "none";
        soundEffect.style.animation =
          "fadeIn 0.5s ease-in, fadeOut 2s ease-out 1s forwards";
        soundEffect.textContent = this.getRandomItem(soundEffects);

        document.body.appendChild(soundEffect);

        setTimeout(() => {
          soundEffect.remove();
        }, 3000);
      }
    }, 10000);
  }
}

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the app when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new TomorrowInator();
});

// Add some fun console messages
console.log("🔮 The Mystical Tomorrow-inator 3000 has awakened!");
console.log("🌟 Powered by 100% organic, free-range JavaScript!");
console.log("👻 Ghosts in the machine: 0 (that we know of)");
console.log("⚡ Mystical energy levels: MAXIMUM");
console.log("🎭 Spookiness factor: 11/10");
console.log("🦄 Unicorn approval rating: 420%");
console.log(
  "⚠️  Side effects may include: uncontrollable laughter, eye-rolling, sudden urges to check the calendar, and temporary belief in time travel"
);
console.log(
  "🎪 Remember: The future is what you make of it... but tomorrow is definitely the day after today!"
);
console.log(
  "💀 Disclaimer: No actual psychic powers were harmed in the making of this app"
);
