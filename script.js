// Custom Alert Function
function customAlert(message) {
  // Create a div element for the alert box
  var alertBox = document.createElement("div");
  alertBox.className = "custom-alert";

  // Create a paragraph element for the message
  var messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;

  // Create a button for closing the alert
  var closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.onclick = function () {
    document.body.removeChild(alertBox);
  };

  // Append message and close button to the alert box
  alertBox.appendChild(messageParagraph);
  alertBox.appendChild(closeButton);

  // Append alert box to the body
  document.body.appendChild(alertBox);
}

// Disable Right Click
window.onload = function () {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
};
