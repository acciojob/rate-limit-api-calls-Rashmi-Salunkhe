# Rate-Limit API Calls

Your application makes multiple API calls in a short duration, and you need to `limit` the rate at which these calls are made. Implement a `rate limiter` using JavaScript promises that ensures that no more than 5 API calls are made in any 1-second window.

Here is an example:
![](https://storage.googleapis.com/acciojob-open-file-collections/87dfa640-3671-4ac2-ac20-1ca6fe4f490a_ezgif.com-video-to-gif.gif)

## Instructions

1. Fetch data from this api: `https://jsonplaceholder.typicode.com/todos/1` on click of a button that says “fetch data”
2. If the button is clicked more than 5 times within 10 seconds only 5 calls should be made in the 10 seconds and remaining data should show after 10 seconds
3. Display the count next to Fetch Data button for 10 seconds then reset it to 0
4. The fetch data button should have an id of `fetch-button`. The count should have an id of `click-count` and the div where the results are shown should have an id of `results`
5. When clicked a lot of times, should show an alert that says `Too many API calls. Please wait and try again.`
6. The click count should be updated as we click on the fetch button and should reset to 0 after 10 seconds.
