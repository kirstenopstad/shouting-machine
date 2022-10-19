// When page loads, run these functions
window.onload = function() {
  // When submit button clicked / enter is pressed, run these functions
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // Retrieve user input
    const originalInput = document.querySelector("input#userInput").value;
    // Transform input to all caps
    const transformedlInput = originalInput.toUpperCase();
    // Display transformed input to userShout
    document.querySelector("p#userShout").innerText = transformedlInput;
    // Change CSS
    document.querySelector("div#shout").removeAttribute("class");
    // Prevent reload
    event.preventDefault();
  }

}
