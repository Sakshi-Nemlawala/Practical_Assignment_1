const fs = require('fs');
const util = require('util');

// Promisify the fs.unlink function
const unlinkAsync = util.promisify(fs.unlink);

// Function to delete a file using async/await
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (error) {
    console.error(`Error deleting file: ${error.message}`);
  }
}

// Usage example
const filePath = './sample.txt'; // Replace with the path to the file you want to delete

// Call the delete function
deleteFile(filePath);
