window.onload = function(){

let form = document.querySelector(".login-form")
let email = document.querySelector(".email")
let password = document.querySelector(".pass")




var submitButton = document.querySelector(".submit-button")

submitButton.addEventListener("moseout", function(){
event.preventDefault();
        if (
            email.value.length > 1 &&
            password.value.length > 1
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
            errorDiv.innerHTML = "Por favor, revise los campos!";
    }
})

}