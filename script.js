const fetchButton = document.getElementById('fetch-button');
const clickCountEl = document.getElementById('click-count');
const resultsEl = document.getElementById('results');

let clickCount = 0; // Tracks the click count
let callQueue = []; // Queue to hold pending API calls
let inProgressCalls = 0; // Tracks the current number of in-progress calls

// Function to fetch data from the API
const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      // Display the fetched result in the 'results' div
      const resultDiv = document.createElement('div');
      resultDiv.innerHTML = `
        <p>ID: ${data.id}</p>
        <p>Title: ${data.title}</p>
        <p>Completed: ${data.completed}</p>
      `;
      resultsEl.appendChild(resultDiv);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

// Rate limiter logic
const rateLimiter = () => {
  if (inProgressCalls < 5) {
    // If we are under the limit, process the call
    inProgressCalls++;
    callQueue.shift()(); // Execute the next function in the queue

    setTimeout(() => {
      inProgressCalls--; // Decrement inProgressCalls after 1 second
      if (callQueue.length > 0) {
        rateLimiter(); // Recursively handle pending calls
      }
    }, 1000);
  }
};

// Button click event listener
fetchButton.addEventListener('click', () => {
  clickCount++; // Increment click count
  clickCountEl.innerText = clickCount; // Update the click count on the UI

  // Push the fetchData function into the callQueue
  callQueue.push(fetchData);

  // Start the rate limiter
  rateLimiter();

  // Check if the click count exceeds the limit
  if (clickCount > 5) {
    alert('Too many API calls. Please wait and try again.');
  }

  // Reset the click count and queue after 10 seconds
  setTimeout(() => {
    clickCount = 0;
    clickCountEl.innerText = clickCount;
    callQueue = []; // Clear the queue
  }, 10000);
});
