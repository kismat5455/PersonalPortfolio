
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


  dropdown.addEventListener('touchstart', function(event) {
    if(!dropdown.contains(dropdownContent)){
    event.preventDefault();
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  }});

 
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && !dropdown.contains(dropdownContent)) {
      dropdownContent.style.display = 'none';
    }
  });

  document.addEventListener('touchend', function(event) {
    if (!dropdown.contains(event.target) && !dropdown.contains(dropdownContent)) {
      dropdownContent.style.display = 'none';
    }
  });
});

