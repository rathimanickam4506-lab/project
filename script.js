// Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Registration successful!");
    window.location.href = "index.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("userName", user.name);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password!");
    }
  });
}

// Dashboard Check
const userNameSpan = document.getElementById("userName");
if (userNameSpan) {
  const loggedIn = sessionStorage.getItem("loggedIn");
  const userName = sessionStorage.getItem("userName");
  if (!loggedIn) {
    window.location.href = "index.html";
  } else {
    userNameSpan.textContent = userName;
  }
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "index.html";
  });
}
