const usernameLogin = document.getElementById("usernameLogin");
const passwordLogin = document.getElementById("passwordLogin");
const loginBtn = document.getElementById("login-button");

loginBtn.addEventListener("click", (e) => {
  if (usernameLogin.value && passwordLogin.value) {
    e.preventDefault();
    window.location.href = "./beranda.html";
  }
});
