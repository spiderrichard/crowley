document.addEventListener("DOMContentLoaded", function () {
    // Get the checkbox and the main element by their IDs
    var checkbox = document.getElementById("hamburger-checkbox");
    var mainElement = document.getElementById("main");
  
    // Add an event listener to the checkbox
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        // If the checkbox is checked, blur the main element
        mainElement.style.filter = "blur(5px)";
      } else {
        // If the checkbox is unchecked, unblur the main element
        mainElement.style.filter = "none";
      }
    });
  
    // Get all elements with the class "nav-links"
    var navLinks = document.querySelectorAll(".nav-links");
  
    // Add an event listener to each "nav-links" element
    navLinks.forEach(function (navLink) {
      navLink.addEventListener("click", function (event) {
  
        // Uncheck the checkbox
        checkbox.checked = false;
  
        // Unblur the main element
        mainElement.style.filter = "none";
      });
    });
  });
  