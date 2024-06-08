// 

  /**
     * An event listener that waits for the DOM to be fully loaded before executing the code.
     * Simulates a typewriter effect by gradually displaying text on the screen.
  */
  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animated-text");
    const text = "Hi, I'm Kismat Ali. I'm a Full Stack Web Developer.";
    textElement.textContent = "";

    let i = 0;
  
    function typeWriter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60); 
        }
    }

    typeWriter();
});


document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Toggle dropdown on touch
  dropdown.addEventListener('touchstart', function(event) {
    if(!dropdown.contains(dropdownContent)){
    event.preventDefault();
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  }});

  // Close the dropdown when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && !dropdown.contains(dropdownContent)) {
      dropdownContent.style.display = 'none';
    }
  });

  // Close the dropdown when touch ends outside of it
  document.addEventListener('touchend', function(event) {
    if (!dropdown.contains(event.target) && !dropdown.contains(dropdownContent)) {
      dropdownContent.style.display = 'none';
    }
  });
});