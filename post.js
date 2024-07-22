<script>
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();                                                                                                                                           const username = loginForm.username.value;                                                                                                                    const password = loginForm.password.value;                                                                                                                
    if (username === "user" && password === "web_dev") {                                                                                                              alert("You have successfully logged in.");
        location.reload();                                                                                                                                        } else {
        loginErrorMsg.style.opacity = 1;                                                                                                                          }
})                                       
  
</script>
<script src="script.js"></script>                                                                                                     <script>
          const open_btn = document.querySelector('.open-btn')                                                                                                const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
  </script>
