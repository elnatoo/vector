function hasInputAfterCommand(message, command) {
  if (message == command) {
    return false; // User sent no input after command
  }
  // Remove command prefix and trim whitespace
  const input = message.slice(command.length).trim();
  // Check if input is empty after trimming
  return input.length > 0;
}

module.exports = { hasInputAfterCommand };