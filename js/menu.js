

async function getBreakfast() {
    const breakfast = document.getElementById('breakfast')
    const response = await fetch('/type/breakfast')
    const foods= await response.json()

    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    breakfast.innerHTML = html
}getBreakfast()
async function getSoups() {
    const soup = document.getElementById('soups')
    const response = await fetch('/type/soups')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    soup.innerHTML = html
}getSoups()
async function getAppetizers() {
    const appetizers = document.getElementById('appetizers')
    const response = await fetch('/type/appetizers')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    appetizers.innerHTML = html
}getAppetizers()
async function getmains() {
    const mains = document.getElementById('mains')
    const response = await fetch('/type/mains')
    const foods= await response.json()

    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    mains.innerHTML = html
}getmains()
async function getsalads() {
    const salad = document.getElementById('salads')
    const response = await fetch('/type/salads')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    salad.innerHTML = html
}getsalads()
async function getseafood() {
    const seafood = document.getElementById('seafood')
    const response = await fetch('/type/seafood')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    seafood.innerHTML = html
}getseafood()
async function getfastfood() {
    const fastfood = document.getElementById('fastfood')
    const response = await fetch('/type/fastfood')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    fastfood.innerHTML = html
}getfastfood()
async function gettea() {
    const tea = document.getElementById('tea')
    const response = await fetch('/type/tea')
    const foods= await response.json()

    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    tea.innerHTML = html
}gettea()
async function getcoffee() {
    const coffee = document.getElementById('coffee')
    const response = await fetch('/type/coffee')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    coffee.innerHTML = html
}getcoffee()
async function getmilkshake() {
    const milkshake = document.getElementById('milkshake')
    const response = await fetch('/type/milkshake')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    milkshake.innerHTML = html
}getmilkshake()
async function getsoda() {
    const soda = document.getElementById('soda')
    const response = await fetch('/type/soda')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    soda.innerHTML = html
}getsoda()
async function geticecream() {
    const icecream = document.getElementById('icecream')
    const response = await fetch('/type/icecream')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    icecream.innerHTML = html
}geticecream()
async function getcake() {
    const cake = document.getElementById('cake')
    const response = await fetch('/type/cake')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    cake.innerHTML = html
}getcake()
async function getotherdessert() {
    const otherdessert = document.getElementById('otherdessert')
    const response = await fetch('/type/otherdessert')
    const foods= await response.json()
    
    let html = ''
    for (const food of foods) {
        html += 
        `<div class="col foodcard">
            <img src="images/menu/starter/${food.img}" class="foodimg">
            <div class="foodtext">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            </div>
            <button class="foodbutton" onclick="addToCart(${food.id})">${food.currency}${food.price}</button>
        </div>
        `
    }
    otherdessert.innerHTML = html
}getotherdessert()

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
   showToast('One item was added to the cart!')
}
const toastEl = document.getElementById('liveToast')
const toast = bootstrap.Toast.getOrCreateInstance(toastEl)

function showToast(message) {
  toastEl.querySelector('.toast-body').textContent = message
  toast.show()
}
