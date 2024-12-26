import { baseurl } from "./baseURL.js";


let form = document.getElementById("form");
form.addEventListener("submit",  async (event) => {

    event.preventDefault();
    let username = form.username.value;
    let email = form.email.value;
    let password = form.password.value
    let number = form.number.value
    let gender = form.gender.value

    let userObj = { username, email, password, number, gender };

    
        try{

            // Fetch existing users from the database
            let res = await fetch(`${baseurl}/users`);
            let data = await res.json();

            let user = data.filter((el) => el.email == email);
            
            
            if (user.length != 0){
                alert("User already registered, Please Login!")
                window.location.href = "login.html"
            }

            else {
                fetch((`${baseurl}/users`), {
                    method: "POST",
                    headers: {
                        "content-type" : "application/json"
                    }, 
                    body: JSON.stringify(userObj)
                })
                .then( ()=> {
                    alert("Sign Up Successful!");
                    window.location.href = "login.html"
                })
            }
        }catch(err){
            alert("Something went wrong, Please try again later...");
            console.log(err);
        }
    
})
    
    

    

            

    
    


