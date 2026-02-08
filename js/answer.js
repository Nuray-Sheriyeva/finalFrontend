fetch('https://finalbackend-rli0.onrender.com/api/last-booking')
    .then(res => res.json())
    .then(booking => {
        if (!booking) {
            window.location.href ='index.html'
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
