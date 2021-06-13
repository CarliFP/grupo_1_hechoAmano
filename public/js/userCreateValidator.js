window.onload = function(){

    var form = document.getElementById("form")

    var name = document.querySelector(".name")
    var user = document.querySelector(".user")
    var email = document.querySelector(".email")
    var birthDate = document.querySelector(".birthDate")
    var adress = document.querySelector(".adress")
    var country = document.querySelector(".country")
    var profile = document.querySelectorAll(".profilecb"); var profileDiv = document.querySelector(".profile")
    var interests = document.querySelector(".interests");
    var tienda = document.querySelector(".tienda")
    var avatar =  document.querySelector(".avatar")
    var password = document.querySelector(".password-input")
    var passwordVerify = document.querySelector(".passwordVerify-input")



    name.addEventListener('keyup',function(){    
        if (name.value.length > 1) {

        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "none";

    }else{
        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tengo que tener al menos dos caracteres!"
}
})


    user.addEventListener('keyup',function(){    
        if (user.value.length != 0) {
        var errorDiv = document.querySelector(".userErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".userErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No puedo estar vacío!"

    }});

    password.addEventListener('focusout',function(){   
        if (password.value.length > 7) {
        var errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tengo que tener al menos 8 caracteres!!"
    }});

    password.addEventListener('keyup',function(){               
    
    if (password.value.length > 0) {
    var errorDiv = document.querySelector(".passwordErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".passwordErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacio!!"
}
});

    passwordVerify.addEventListener('keyup',function(){   
        if (passwordVerify.value === password.value) {
        var errorDiv = document.querySelector(".passwordVerifyErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".passwordVerifyErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tenemos que ser iguales!!"

    }});

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

    avatar.addEventListener('focusout',function(){  
    var fname = avatar.value;
    var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    if (!re.exec(fname) && avatar.value.length != 0) {
        var errorDiv = document.querySelector(".avatarErrorDiv2")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "El formato de imagen no es válido!"
    }else{
     var errorDiv = document.querySelector(".avatarErrorDiv2")
        errorDiv.style.display = "none";
    }
})

    avatar.addEventListener('focusout',function(){  
        if (avatar.value.length != 0) {
        var errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No has seleccionado una imagen aún!"
    }});

        birthDate.addEventListener('focusout',function(){  
        if (birthDate.value.length != 0) {
        var errorDiv = document.querySelector(".birthDateErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".birthDateErrorDiv")
        errorDiv.style.display = "block"
        errorDiv.innerHTML = "No puedo estar incompleto!!"
    }});


        adress.addEventListener('focusout',function(){  
        if (adress.value.length != 0) {
        var errorDiv = document.querySelector(".adressErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".adressErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No puedo estar vacío!"

    }});

    country.addEventListener('focusout',function(){  
    if (country.value.length != 0) {
    var errorDiv = document.querySelector(".countryErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".countryErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo quedar sin elegir!"

}})
tienda.addEventListener('focusout',function(){  
    if (tienda.value.length != 0) {
    var errorDiv = document.querySelector(".tiendaErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".tiendaErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo quedar sin elegir!"

}})
profileDiv.addEventListener('focusout', function(){
    console.log(profile[0].checked, profile[1].checked)
    if(profile[0].checked === false && profile[1] === false){
        let errorDiv = document.querySelector(".profileErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Tenemos que ser iguales!!";
  }else{
      var errorDiv = document.querySelector(".profileErrorDiv")
          errorDiv.style.display = "none";
  };
})

form.addEventListener("submit", e=> {
    e.preventDefault();
            if (
            name.value.length > 0 &&
            user.value.length > 0 &&
            re.test(email.value) &&
            birthDate.value.length > 0 &&
            adress.value.length > 0 &&
            country.value.length > 0 &&
            avatar.value.length > 0 &&
            password.value.length > 7 &&  
            passwordVerify.value == password.value
            ){
            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "none";
            form.submit();
        }else{            
            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Por favor, revise los campos!";
    }
})
}
