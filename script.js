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


