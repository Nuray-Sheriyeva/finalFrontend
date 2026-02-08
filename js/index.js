const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

async function getWeather() {
    const city = "Astana"
    const response = await fetch(`http://localhost:3000/api/weather?city=${city}`)
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    
    const data = await response.json()

    const height=document.querySelector('#map')

    height.style.height='400px'

    var map = L.map('map');
    map.setView([data.coordLAT-0.089386, data.coordLON-0.02799], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

    var marker = L.marker([51.090714, 71.41801]).addTo(map);
}
getWeather()

const book_button = document.getElementById('bookID')
book_button.addEventListener('click', goBooking)

function goBooking() {
  window.location.href = '/booking'
}
const menu_button = document.getElementById('menuID')
menu_button.addEventListener('click', goMenu)

function goMenu() {
  window.location.href = '/menu'
}

async function addToCart(foodId){
    let cart = localStorage.getItem("cart")
    cart = cart ? JSON.parse(cart) : []
    const existingItem = cart.find(item => item.id === foodId)

        if (existingItem){
            existingItem.quantity +=1
            console.log(cart)
        }
        else {
            const response = await fetch(`/food/${foodId}`)

            if(!response.ok){
                console.error('Failed to retrieve')
                return
            }
            const item = await response.json()
            const id1 = item.id
            const name1 = item.name
            const price1 = item.price
            const currency1 = item.currency
            const img1 = item.img

            let object = {
                id: id1,
                img: img1,
                name: name1,
                currency: currency1,
                price: price1,
                quantity: 1
            }

            cart.push(object)
            console.log(cart)
        }
    
   localStorage.setItem("cart", JSON.stringify(cart))
}