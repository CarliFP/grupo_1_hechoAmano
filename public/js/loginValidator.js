window.onload = function(){

let form = document.querySelector(".login-form")
let email = document.querySelector(".email")
let password = document.querySelector(".pass")

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener('focusout',function(){   
    if (re.test(email.value)) {
    var errorDiv = document.querySelector(".emailErrorDiv")
    errorDiv.style.display = "none"
}else{
    var errorDiv = document.querySelector(".emailErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No soy un mail!"
}});


form.addEventListener("submit", e=> {
e.preventDefault();
        if (
            email.value.length > 0 &&
            password.value.length > 0
         //   profileResult === true No pude validar esto :(  
         //   interestsResult === true No pude validar esto :(  
            ){
            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "none";
            form.submit();
        }
        else
        {            
            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Por favor, complete los campos!";
    }
})

}