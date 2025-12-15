// const form = document.getElementById("contactForm");
// const status = document.getElementById("status");
// const submitButton = form.querySelector('button[type="submit"]');

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (!name || !email || !message) {
//         status.textContent = "Please fill in all fields.";
//         status.style.color = "red";
//         return;
//     }


//     submitButton.disabled = true;
//     status.textContent = "Sending message...";
//     status.style.color = "#00d4ff";
    
//     setTimeout(() => {
//         status.textContent = "Message sent successfully! (Simulated)";
//         status.style.color = "lightgreen";
//         form.reset();
        
      
//         submitButton.disabled = false;
        
//     }, 1500);
// });