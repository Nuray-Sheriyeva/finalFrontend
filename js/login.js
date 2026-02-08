document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm")

  if (!form) {
    console.error("Login form not found")
    return
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault() 

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const res = await fetch("https://finalbackend-rli0.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.msg || "Login failed")
      return
    }

    localStorage.setItem("token", data.token)

    const redirect = localStorage.getItem("redirectAfterLogin")
    if (redirect) {
      localStorage.removeItem("redirectAfterLogin")
      window.location.href = redirect
    } else {
      window.location.href = "index.html"
    }
  })
})

