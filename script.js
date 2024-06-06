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

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



