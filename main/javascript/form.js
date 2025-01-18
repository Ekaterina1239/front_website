document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const responseDiv = document.getElementById("form-response");
    responseDiv.classList.remove("error");
    responseDiv.classList.remove("success");
    responseDiv.textContent = "";
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
        responseDiv.classList.add("error");
        responseDiv.textContent = "All fields are required!";
    } else {
        responseDiv.classList.add("success");
        responseDiv.textContent = "Thank you for contacting Coca-Cola! We will get back to you soon.";
        
        document.getElementById("contact-form").reset();
    }
  });
  