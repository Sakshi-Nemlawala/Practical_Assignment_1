const fetch = require('node-fetch');

// Async function to fetch data from Google's homepage
async function fetchGoogleHomepage() {
  try {
    const response = await fetch('https://www.google.com');
    
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status code: ${response.status}`);
    }

    // Get the HTML content from the response
    const html = await response.text();

    console.log('Google homepage HTML fetched successfully:');
    console.log(html);
  } catch (error) {
    console.error(`Error fetching Google's homepage: ${error.message}`);
  }
}

// Call the function to fetch the data
fetchGoogleHomepage();
