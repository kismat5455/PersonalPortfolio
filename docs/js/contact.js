function sendMail() {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_f0yhmhs', 'template_5c2hm2c', parms)
        .then(() => {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('name').value='';
            document.getElementById('email').value='';
            document.getElementById('subject').value='';
            document.getElementById('message').value='';
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
}

const SUBMIT_BTN = document.querySelector('.submit-btn');

SUBMIT_BTN.addEventListener('click', (event) => {
    event.preventDefault(); 
    sendMail();
});