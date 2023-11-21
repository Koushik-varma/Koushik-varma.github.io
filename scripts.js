// mode-toggle.js
function submitForm(event) {
  event.preventDefault();

  // You can add additional logic here to handle the form submission, e.g., sending an email.

  alert('Message sent successfully!'); // Placeholder, you can replace this with your actual logic.
}

function toggleDetails(id) {
  var details = document.getElementById(id);
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

function applySavedMode() {
    const savedMode = localStorage.getItem('mode');
    document.body.classList.toggle('dark-mode', savedMode === 'dark');
  }
  
  function toggleMode() {
    const body = document.body;
  
    // Toggle between light and dark mode
    body.classList.toggle('dark-mode');
  
    // Save the user's preference to localStorage
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    applySavedMode();
  });

  
  