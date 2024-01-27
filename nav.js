// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Retrieve the current visit count from localStorage
    let visitCount = localStorage.getItem("visitCount");
  
    // If it's the first visit, initialize the count to 1
    if (!visitCount) {
      visitCount = 1;
    } else {
      // If not the first visit, increment the count
      visitCount = parseInt(visitCount) + 1;
    }
  
    // Update the visit count in the HTML
    document.getElementById("visitCount").innerText = visitCount;
  
    // Save the updated visit count to localStorage
    localStorage.setItem("visitCount", visitCount.toString());
  
    // Add event listener for the reset button
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function() {
      // Reset the visit count to 0
      visitCount = 0;
  
      // Update the visit count in the HTML
      document.getElementById("visitCount").innerText = visitCount;
  
      // Save the updated visit count to localStorage
      localStorage.setItem("visitCount", visitCount.toString());
    });
  } else {
    // If localStorage is not supported, display an error message
    alert("Sorry, your browser does not support localStorage. Visit counting will not work.");
  }
  