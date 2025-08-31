class TomorrowInator {
  constructor() {
    this.predictions = [
      "The sun will mysteriously rise in the east (shocking, I know!)",
      "Gravity will continue to work as expected (revolutionary!)",
      "Your coffee will taste like coffee (unless it's tea)",
      "Monday will follow Sunday with 99.9% certainty*",
      "The internet will still exist (probably)",
      "Your phone battery will drain when you use it (mind-blowing!)",
      "Traffic lights will change colors in a predictable pattern",
      "Your cat will judge you silently (as usual)",
      "The weather will be... weather-like",
      "Time will move forward at exactly 1 second per second",
    ];

    this.mysticalPhrases = [
      "The cosmic energies whisper to me...",
      "I consult the ancient calendar spirits...",
      "The quantum flux reveals...",
      "My crystal ball shows with 100% accuracy...",
      "The time lords have spoken...",
      "According to my mystical calculations...",
      "The universe has decreed...",
      "My supernatural powers detect...",
      "The fabric of spacetime indicates...",
      "The prophecy foretells...",
    ];

    this.init();
  }

  init() {
    const button = document.getElementById("predict-btn");
    const predictionDiv = document.getElementById("prediction");

    button.addEventListener("click", () => {
      this.createSparkles();
      this.animatePrediction(predictionDiv);
    });

    // Add some ambient sparkles
    setInterval(() => this.createAmbientSparkle(), 2000);
  }

  animatePrediction(element) {
    const button = document.getElementById("predict-btn");
    button.disabled = true;
    button.textContent = "🔮 CHANNELING COSMIC FORCES... 🔮";

    // Dramatic pause with loading animation
    element.innerHTML = "🌟 Peering through the mists of time... 🌟";

    setTimeout(() => {
      element.innerHTML = "✨ The visions are becoming clearer... ✨";
    }, 1000);

    setTimeout(() => {
      element.innerHTML = "🔥 The future burns bright in my mind! 🔥";
    }, 2000);

    setTimeout(() => {
      this.revealTomorrow(element);
      button.disabled = false;
      button.textContent = "✨ ACTIVATE TEMPORAL VISION ✨";
    }, 3000);
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
        "⚠️ BONUS PREDICTION: People will complain about it being Monday!",
      Friday: "🎉 BONUS PREDICTION: Someone will say 'TGIF' at least 47 times!",
      Saturday:
        "🛏️ BONUS PREDICTION: You'll sleep in and feel guilty about it!",
      Sunday:
        "😱 BONUS PREDICTION: Sunday scaries will mysteriously appear around 6 PM!",
    };

    // Check for special dates
    const month = date.getMonth();
    const day = date.getDate();

    if (month === 3 && day === 1) {
      // April 1st
      return "<p style='color: #ff6347;'>🃏 EXTRA SPECIAL: April Fools' Day detected! Trust nothing!</p>";
    }

    if (month === 11 && day === 25) {
      // December 25th
      return "<p style='color: #ff6347;'>🎄 EXTRA SPECIAL: Christmas detected! Ho ho ho!</p>";
    }

    if (month === 9 && day === 31) {
      // October 31st
      return "<p style='color: #ff6347;'>🎃 EXTRA SPECIAL: Halloween detected! Spooky!</p>";
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
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 3000);
  }

  createAmbientSparkle() {
    const sparkles = ["⭐", "✨", "🌟", "💫", "🔮"];
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = this.getRandomItem(sparkles);
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparkle.style.fontSize = Math.random() * 1 + 0.5 + "rem";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 3000);
  }
}

// Add CSS for fade-in animation
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
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
console.log(
  "⚠️  Side effects may include: uncontrollable laughter, eye-rolling, and sudden urges to check the calendar"
);
