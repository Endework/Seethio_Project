
  // JavaScript to add dynamic year to the copyright text
  document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML += ` ${currentYear}`;
  });
