let commands = [
  ["help", help],
  ["theme", changeTheme],
  ["clear", clear],
  ["profile", profile],
];

// ALL COMMAND HANDLING GOES BELOW, BUT EXTRAPOLATE COMMANDS INTO FUNCTIONS IF POSSIBLE
function handleCommand(cmd) {
  // Start by instantly showing what the user entered
  logToConsole(cmd, true);
  cmd = cmd.toLowerCase();

  const command = commands.find(([name]) => name === cmd);
  if (command) {
    command[1]();
    return;
  } else {
    logToConsole(`Unknown command: "${cmd}"`);
  }
}

// Displays a list of all added commands
function help() {
  prestring = "Available commands: ";
  logToConsole(prestring + commands.map(([name]) => name).join(", "));
}

// Clears the terminal of all text
function clear() {
  terminalLog.innerText = "";
}

// Toggle the body to use opposite mode css attributes and display a message
function changeTheme() {
  const element = document.body;
  if (element.classList.toggle("light-mode")) {
    element.classList.remove("dark-mode");
    logToConsole("Set web theme to light mode.");
  } else {
    element.classList.add("dark-mode");
    logToConsole("Set web theme to dark mode.");
  }
}

function profile() {
  logToConsole("👤 Profile");
}
