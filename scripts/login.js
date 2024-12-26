import { baseurl } from "./baseURL.js";

let form = document.getElementById("form");
form.addEventListener("submit",  async (event) => {

    event.preventDefault();
    
    let email = form.email.value;
    let password = form.password.value;

       try{
            // Fetch existing users from the database
            let res = await fetch(`${baseurl}/users`);
            let data = await res.json();

            let user = data.filter((el) => el.email == email);
            
            
            if (user.length != 0){
                if(user[0].password == password){
                    alert("Login successful!")
                    window.location.href = "todos.html"
                }
                else{
                    alert("Incorrect Password")
                }

            }

            else{
                alert("User not registered, Please Sign up");
                window.location.href = "signup.html"
            }
            
        }catch(err){
            alert("Something went wrong, Please try again later...");
            console.log(err);
        }
    
})
    
    

    
