const token = localStorage.getItem("token")
if (!token) {
  localStorage.setItem("redirectAfterLogin", window.location.pathname)
  window.location.href = "login.html"
}

const bookbutton = document.getElementById('submit')
bookbutton.addEventListener('click', bookTime)

async function bookTime() {
    console.log('Book button clicked');

    const bookingData = {
        booker: document.getElementById('nameinput').value,
        time: document.getElementById('timeinput').value,
        date: document.getElementById('dateinput').value,
        email: document.getElementById('emailinput').value,
        phone: document.getElementById('phoneinput').value,
        comment: document.getElementById('commentinput').value
    };
    
    try {
        const response = await fetch('https://finalbackend-rli0.onrender.com/reservation', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData),
            // CRITICAL: This sends your session cookie to Render
            credentials: 'include' 
        });

        if (response.ok) {
            // Save data locally so answer.html can show it immediately
            localStorage.setItem('lastBooker', bookingData.booker);
            localStorage.setItem('lastTime', bookingData.time);
            
            window.location.href = '/answer';
        } else {
            const errorMsg = await response.json();
            console.error("Reservation failed:", errorMsg);
            alert("Session expired or Login required. Please log in again.");
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}
