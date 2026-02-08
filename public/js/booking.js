const token = localStorage.getItem("token")
if (!token) {
  localStorage.setItem("redirectAfterLogin", window.location.pathname)
  window.location.href = "/login.html"
}

const bookbutton = document.getElementById('submit')
bookbutton.addEventListener('click', bookTime)

async function bookTime() {
    console.log('Book button clicked')

    const date1 = document.getElementById('dateinput').value
    const time1 = document.getElementById('timeinput').value
    const booker1 = document.getElementById('nameinput').value
    const email1 = document.getElementById('emailinput').value
    const phone1 = document.getElementById('phoneinput').value
    const comment1 = document.getElementById('commentinput').value

    const bookingData = {
        booker: booker1,
        time: time1,
        date: date1,
        email: email1,
        phone: phone1,
        comment: comment1
    }
    
    const response = await fetch('/reservation', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })

    if (!response.ok) {
        console.error("Reservation failed")
        return res.status(404).json('Reservation failed')
    }
    
    if(response.ok){
        window.location.href='/answer'
    }
    
}