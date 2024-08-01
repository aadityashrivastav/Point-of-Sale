document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("Login form submitted");
      
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      
      if (username === "admin" && password === "password") {
        console.log("Redirecting to POS page");
        window.location.href = "/pos.html"; 
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  