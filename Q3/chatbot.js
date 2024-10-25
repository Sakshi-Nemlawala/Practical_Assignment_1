// chatbot.js

// A simple object containing domain-specific responses
const responses = {
    "what is node.js?": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "what is express?": "Express is a fast, unopinionated, minimalist web framework for Node.js.",
    "what is a chatbot?": "A chatbot is an artificial intelligence (AI) program that simulates interactive human conversation.",
    "how does async work in javascript?": "Asynchronous programming in JavaScript is achieved using callbacks, promises, and async/await.",
  };
  
  // The chatbot function
  function askQuestion(question) {
    const normalizedQuestion = question.toLowerCase().trim();
  
    if (responses[normalizedQuestion]) {
      return responses[normalizedQuestion];
    } else {
      return "Sorry, I don't have an answer to that. Try asking something else about technology.";
    }
  }
  
  // Export the module so it can be used in other files
  module.exports = {
    askQuestion,
  };
  