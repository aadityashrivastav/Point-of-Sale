document.addEventListener("DOMContentLoaded", function() {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  
    forgotPasswordForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const email = document.getElementById("email").value;
      
      console.log("Email:", email);
      
      alert("Password reset instructions have been sent to your email.");
      
      window.location.href = "admin-login.html";
    });
  });
  