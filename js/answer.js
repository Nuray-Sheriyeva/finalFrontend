// Pull the data we just saved in booking.js
const bookerName = localStorage.getItem('lastBooker');
const bookerTime = localStorage.getItem('lastTime');

if (!bookerName) {
    window.location.href = '/';
} else {
    // Inject the message into your HTML elements
    document.getElementById('ans-name').innerHTML = `Dear, ${bookerName}!`;
    document.getElementById('ans-time').innerHTML = `Your reservation at Amphora was succesfully saved.
    We will be ready to meet you at ${bookerTime}`;
}
