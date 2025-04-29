const terminal = document.getElementById("terminal");
const terminalInput = document.getElementById("command-input");
const terminalLog = document.getElementById("console-log");
const blurLayer = document.getElementById("blur-layer");
const scanlinesLayer = document.getElementById("scanlines");

let isTyping = false; // Track if typing is in progress

logToConsole("Welcome to Bit Billionaire!");

// Handle keypresses to focus and unfocus the terminal
document.addEventListener("keydown", (e) => {
  // GLOBAL TERMINAL TOGGLE
  if (e.key === "Tab") {
    e.preventDefault();
    if (terminalInput === document.activeElement) terminalInput.blur();
    else terminalInput.focus();
  }

  // GLOBAL BLUR OF ELEMENTS
  if (e.key === "Escape") document.activeElement.blur();
});

// HANDLE ENTER KEY WHEN IN TERMINAL INPUT
terminalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (isTyping) {
      terminal.classList.add("error");
      setTimeout(() => {
        terminal.classList.remove("error");
      }, 500);
      // Prevent user from pressing Enter while typing is in progress
      e.preventDefault();
      return;
    }
    const cmd = terminalInput.value.trim();
    terminalInput.value = "";
    handleCommand(cmd);
  }
});

terminalInput.addEventListener("focus", () => {
  terminal.classList.add("centered");

  terminalInput.addEventListener("blur", () => {
    terminal.classList.remove("centered");
  });
});

// Log to the console. If instant is passed, make it instant
function logToConsole(text, instant) {
  text = `\n> ` + text;
  if (isTyping) return; // Prevent multiple logToConsole calls from running simultaneously
  if (!instant) return _logToConsoleAnimated(text); // Log it animated if instant not passed

  terminalLog.innerText += `${text}`;
  terminalLog.scrollTop = terminalLog.scrollHeight;
}

function _logToConsoleAnimated(text) {
  isTyping = true; // Set typing state to true
  let index = 0;
  function nextCharacter() {
    if (index < text.length) {
      terminalLog.innerText += text[index++];
      terminalLog.scrollTop = terminalLog.scrollHeight; // Keep scroll at the bottom
      setTimeout(nextCharacter, 10); // Adjust typing speed here
    } else {
      isTyping = false; // Reset typing state when done
    }
  }
  nextCharacter();
}

// Blur and unblur the background when the terminal gains or loses focus
terminalInput.onfocus = function () {
  blurLayer.classList.add("blurred");
  scanlinesLayer.classList.add("hidden");
};

terminalInput.onblur = function () {
  blurLayer.classList.remove("blurred");
  scanlinesLayer.classList.remove("hidden");
};
