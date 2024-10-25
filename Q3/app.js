// app.js
const readline = require('readline');
const chatbot = require('./chatbot');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Technology Chatbot! Ask me anything about technology (type 'exit' to quit):");

// Function to ask questions
function ask() {
  rl.question('You: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    // Get the response from the chatbot module
    const response = chatbot.askQuestion(input);
    console.log(`Bot: ${response}`);

    // Continue asking questions
    ask();
  });
}

// Start asking questions
ask();
