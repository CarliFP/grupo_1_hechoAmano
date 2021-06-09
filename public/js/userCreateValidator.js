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


    var cumple = false; //Esto validará si los campos están correctos, en caso de que alguno de los campos NO cumpla con el requisito esto pasará a False.


    var nameResult = false;

    name.addEventListener('keyup',function(){    
        if (name.value.length > 1) {
        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "none";
        var nameResult = true;
    }else{
        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tengo que tener al menos dos caracteres!"

    }
});
    name.addEventListener('focusout', function(){
        console.log(nameResult);
    })

    var userResult = false;

    user.addEventListener('keyup',function(){    
        if (user.value.length != 0) {
        var errorDiv = document.querySelector(".userErrorDiv")
        errorDiv.style.display = "none";
        var userResult = true;
    }else{
        var errorDiv = document.querySelector(".userErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No puedo estar vacío!"
        var userResult = false;

    }});

    var passwordResult = false;

    password.addEventListener('focusout',function(){   
        if (password.value.length > 7) {
        var errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "none";
        var passwordResult = true;
    }else{
        var errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tengo que tener al menos 8 caracteres!!"
        var passwordResult = false;

    }});

    password.addEventListener('keyup',function(){               
    
    if (password.value.length > 0) {
    var errorDiv = document.querySelector(".passwordErrorDiv")
    errorDiv.style.display = "none";
    var passwordResult = true;
}else{
    var errorDiv = document.querySelector(".passwordErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacio!!"
    var passwordResult = false;
}
});

    var passwordVerifyResult = false;

    passwordVerify.addEventListener('keyup',function(){   
        if (passwordVerify.value === password.value) {
        var errorDiv = document.querySelector(".passwordVerifyErrorDiv")
        errorDiv.style.display = "none";
        var passwordVerifyResult = true;
    }else{
        var errorDiv = document.querySelector(".passwordVerifyErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tenemos que ser iguales!!"
        var passwordVerifyResult = false;

    }});

var emailResult = false;

email.addEventListener('keyup',function(){   
    if (email.value.indexOf("@") > 0) {
    var errorDiv = document.querySelector(".emailErrorDiv")
    errorDiv.style.display = "none";
    var emailResult = true;
}else{
    var errorDiv = document.querySelector(".emailErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No soy un mail!"
    var emailResult = false;

}});

var avatarResult = false;

    avatar.addEventListener('focusout',function(){  
    var fname = avatar.value;
    var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    if (!re.exec(fname) && avatar.value.length != 0) {
        var errorDiv = document.querySelector(".avatarErrorDiv2")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "El formato de imagen no es válido!"
        var avatarResult = false;
    }else{
     var errorDiv = document.querySelector(".avatarErrorDiv2")
        errorDiv.style.display = "none";
     var avatarResult = true;
    }

    });

    avatar.addEventListener('focusout',function(){  
        if (avatar.value.length != 0) {
        var errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "none";
        var avatarResult = true;
    }else{
        var errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No has seleccionado una imagen aún!"
        var avatarResult = false;

    }});


    var birthDateResult = false;

        birthDate.addEventListener('focusout',function(){  
        if (birthDate.value.length != 0) {
        var errorDiv = document.querySelector(".birthDateErrorDiv")
        errorDiv.style.display = "none";
        var birthDateResult = true;
    }else{
        var errorDiv = document.querySelector(".birthDateErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No puedo estar incompvaro!"
        var birthDateResult = false;

    }});


    var adressResult = false;

        adress.addEventListener('keyup',function(){  
        if (adress.value.length != 0) {
        var errorDiv = document.querySelector(".adressErrorDiv")
        errorDiv.style.display = "none";
        var adressResult = true;
    }else{
        var errorDiv = document.querySelector(".adressErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No puedo estar vacío!"
        var adressResult = false;

    }});

        var countryResult = false;

    country.addEventListener('keyup',function(){  
    if (country.value.length != 0) {
    var errorDiv = document.querySelector(".countryErrorDiv")
    errorDiv.style.display = "none";
    var countryResult = true;
}else{
    var errorDiv = document.querySelector(".countryErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo quedar sin elegir!"
    var countryResult = false;

}});

    var profileResult = false;
    var profile1 = document.querySelector(".profile1")
    var profile2 = document.querySelector(".profile2")

    profile1.addEventListener('click',function(){ 
        var profileResult = true;

});

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

submitButton.addEventListener("mouseout", function(){

        if (nameResult === true 
          //  userResult === true &&
          //  emailResult === true &&
          //  birthDateResult === true &&
          //  adressResult === true &&
          //  countryResult === true &&
          //  avatarDateResult === true &&
          //  passwordResult === true &&            
          //  profileDateResult === true &&
         //   interestsResult === true
        ){
            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "none";

            console.log("Pudimos!!")
        }
        else
        {            
            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Por favor, revise los campos!"
    }
})};