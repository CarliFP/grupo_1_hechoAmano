window.onload = function(){

    var form = document.getElementById("form")

    var name = document.querySelector(".name")
    var user = document.querySelector(".user")
    var email = document.querySelector(".email")
    var birthDate = document.querySelector(".birthDate")
    var adress = document.querySelector(".adress")
    var country = document.querySelector(".country")
    // Dentro de la validación definimos los Porfile e Interests!!
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

email.addEventListener('keyup',function(){   
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
        errorDiv.innerHTML = "No puedo estar incompvaro!"
    }});


        adress.addEventListener('keyup',function(){  
        if (adress.value.length != 0) {
        var errorDiv = document.querySelector(".adressErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".adressErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No puedo estar vacío!"

    }});

    country.addEventListener('keyup',function(){  
    if (country.value.length != 0) {
    var errorDiv = document.querySelector(".countryErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".countryErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo quedar sin elegir!"

}});
// Las validaciones de profile e interests no están terminadas :(
    var profile1 = document.querySelector(".profile1")
    var profile2 = document.querySelector(".profile2")

    // profile1.addEventListener('click',function(){ 
    //    var profileResult = true;
//});
//Esto no lo pude resolver :(


    profile2.addEventListener('click',function(){ 
        var profileResult = true;        
});


    var interestsResult = false;
    var interests1 = document.querySelector(".interests1");
    var interests2 = document.querySelector(".interests2");
    var interests3 = document.querySelector(".interests3");
    var interests4 = document.querySelector(".interests4");
    var interests5 = document.querySelector(".interests5");


    interests1.addEventListener('click',function(){ 
        var interestsResult = true;     
});

    interests2.addEventListener('click',function(){ 
        var interestsResult = true;        
});

    interests3.addEventListener('click',function(){ 
        var interestsResult = true;        
});

    interests4.addEventListener('click',function(){ 
        var interestsResult = true;

});

    interests5.addEventListener('click',function(){ 
        var interestsResult = true;        
});

/////////////////////Como recordatorio, estos son todos los campos/////////////////////
// name
// user
// email
// birthDate
// adress
// country
// avatar
// password
// passwordVerify
// profile
// interests
////////////////////////////////////////////////////////////////////////////////////


var submitButton = document.querySelector(".submit-button")

submitButton.addEventListener("click", function(){
event.preventDefault();
        if (
            name.value.length > 1 &&
            user.value.length > 1 &&
            re.test(email) &&
            birthDate.value.length > 1 &&
            adress.value.length > 1 &&
            country.value.length > 1 &&
            avatar.value.length > 1 &&
            password.value.length > 7 &&  
            passwordVerify.value === password.value  
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
})};