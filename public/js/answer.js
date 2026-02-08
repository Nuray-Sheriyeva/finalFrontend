fetch('/api/last-booking')
    .then(res => res.json())
    .then(booking => {
        if (!booking) {
            window.location.href ='/'
            return
        }

        document.getElementById('ans-name').innerHTML = `
        ${booking.booker}
        `
        document.getElementById('ans-date').innerHTML =  `
        ${booking.date}
        `
        document.getElementById('ans-time').innerHTML =  `
        ${booking.time}
        `
    })