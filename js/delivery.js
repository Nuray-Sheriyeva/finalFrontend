const token = localStorage.getItem("token")
if (!token) {
  localStorage.setItem("redirectAfterLogin", window.location.pathname)
  window.location.href = "login.html"
}

let cart = localStorage.getItem("cart")
cart = cart ? JSON.parse(cart) : []

function loadCart(){
    
    let cart = localStorage.getItem("cart")
    cart = cart ? JSON.parse(cart) : []

    let html = ''
    let total = 0
    if (cart.length == 0){
        document.getElementById('menucart').innerHTML = `
            <h1>Your Cart is Empty!</h1>
            <h3>You can pick your dish from our finest menu.</h3>
            <p>Everything you pick will be here.</p>
        `
    }
    else {
        for (item in cart) {
            html += `
            <div class="foodcard" id="foodcard${cart[item].id}">
              <img src="images/menu/starter/${cart[item].img}">
              <div class="texts">
                <h5>${cart[item].name}</h5>
                <div class="forquantity">
                  <button id="minus" onclick="minusQuantity(${cart[item].id}); loadCart();">-</button>
                  <p id='replquan${cart[item].id}'>${cart[item].quantity}</p>
                  <button id="plus" onclick="plusQuantity(${cart[item].id}); loadCart();">+</button>
                </div>
              </div>
              <div class="prices">
                <p>${cart[item].currency}${cart[item].price}</p>
              </div>
            </div>
            `
            total += cart[item].price*cart[item].quantity
        }
        html += `
        <div class="hr"></div>
        <div class="total">
          <h1 id="ftotal">$ ${total}</h1>
        </div>
        `
        document.getElementById('menucart').innerHTML = html
    }
    
}
loadCart()

function minusQuantity(foodId) {
    let food = cart.find(item => item.id === foodId)
    const index = cart.findIndex(item=>item.id===foodId)
    let quantity2 = food.quantity

    if (quantity2==1){
        quantity2 -= 1
        food.quantity = quantity2

        cart.splice(index, 1)
    }
    else {
        quantity2 -= 1
        food.quantity = quantity2
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}
function plusQuantity(foodId) {
    let food = cart.find(item => item.id === foodId)
    let quantity1 = food.quantity
    quantity1 += 1
    food.quantity = quantity1
    localStorage.setItem("cart", JSON.stringify(cart))
}
function toAddress() {
    document.getElementById('addaddress').innerHTML = `
    <div class="inputs">
      <div>
        <label for="num">Address*</label>
        <input type="text" id="addressname" name="num" required placeholder="Wolf Street 18">
      </div>
      <div>
        <label for="num">№ House/Apartment</label>
        <input type="text" id="flatnum" name="num" required placeholder="11">
      </div>
    </div>`
}
function toGo() {
    document.getElementById('addaddress').innerHTML = ``
}
function choseCard() {
    document.getElementById('addcard').innerHTML = `
    <div class="carding">
      <label for="num">Card Number*</label>
      <input type="text" id="cardnum" name="num" required placeholder="4000 0000 0000 0000">
    </div>
    <div class="inputs1">
      <div class="naming">
        <label for="name">Name & Surname*</label>
        <input type="text" id="namecard" name="num" required placeholder="JOHN DOE">
      </div>
      <div class="expiring">
        <label for="num">Expires*</label>
        <input type="text" id="expires" name="num" required placeholder="MM/YY">
      </div>
    </div>
    <div class="cvv">
      <label for="num">CVV*</label>
      <input type="text" id="cardcvv" name="num" required placeholder="...">
    </div>`
}
function choseCash() {
    document.getElementById('addcard').innerHTML = ``
}
function Answer() {
    document.getElementById('answer').innerHTML =`
                  <h1>Your Delivery order has been saved!</h1>`
    localStorage.setItem("cart", "[]")
    loadCart()

}
