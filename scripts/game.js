// Add a button to increment a counter and move emojis
function createCounterButton() {
  let counter = 0;
  let direction = 1;
  let position = 0;

  // Listen for the 'c' key press to increment the counter and move emojis
  document.addEventListener("keydown", (event) => {
    if (event.key === "c") {
      counter++;
      document.getElementById(
        "foraging-counter"
      ).textContent = `Trees Chopped: ${counter}`;

      if (counter % 5 === 0) {
        document.getElementById("foraging-log").textContent = "🌲🪓";
      } else {
        document.getElementById("foraging-log").textContent = "🌲 🪓";
      }
      // Move the emoji back and forth
      position += 10 * direction;
      if (position >= 100 || position <= 0) {
        direction *= -1;
      }
      emoji.style.transform = `translateX(${position}px)`;
    }
  });
}

// Initialize the button and emoji
createCounterButton();
