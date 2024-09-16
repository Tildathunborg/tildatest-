document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Vänligen fyll i alla fält.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Display success message
    document.getElementById('formMessage').textContent = 'Meddelandet har skickats! Tack för att du kontaktade oss.';
    document.getElementById('formMessage').style.color = 'green';

    // Clear the form fields
    document.getElementById('contactForm').reset();
});
