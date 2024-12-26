
function navbar() {
    let nav = document.getElementById("nav");
    let card = `<a href="index.html"> My Personal App </a>
    <div id="navLinks">
<a href="signup.html">Sign Up</a>
<a href="login.html">Login</a>
<a href="todos.html">Todos </a>
<a href="expenses.html">Expenses</a>
</div>`


    nav.innerHTML = card;
}
// footer in navbar.js only 

function footer(){
    let card2 = `<div id="footer">
    <h5>Shimrah Ahmed <span>&copy</span>All rights reserved 2024</h5>
</div>`

document.getElementById("foot").innerHTML = card2

}
navbar();
footer()