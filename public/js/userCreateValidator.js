window.onload = function(){

    let form = document.getElementById("form")

    let name = document.querySelector(".name")
    let user = document.querySelector(".user")
    let email = document.querySelector(".email")
    let birthDate = document.querySelector(".birthDate")
    let adress = document.querySelector(".adress")
    let country = document.querySelector(".country")
    //: let user = falta capturar select
    //: let profile = falta capturar radio 
    //: let interesets = falta capturar checkbox
    let avatar =  document.querySelector(".avatar")
    let password = document.querySelector(".password-input")

    let cumple = false; //Esto validará si los campos están correctos, en caso de que alguno de los campos NO cumpla con el requisito esto pasará a False.


    let nameResult = false;

    name.addEventListener('keyup',function(){    
        if (name.value.length > 2) {
        let errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "none";
        let nameResult = true;
    }else{
        let errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tengo que tener al menos dos caracteres!"
        let nameResult = false;

    }});

    let userResult = false;

    user.addEventListener('focusout',function(){    
        if (user.value.length != 0) {
        let errorDiv = document.querySelector(".userErrorDiv")
        errorDiv.style.display = "none";
        let userResult = true;
    }else{
        let errorDiv = document.querySelector(".userErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No puedo estar vacío!"
        let userResult = false;

    }});

    let passwordResult = false;

    password.addEventListener('focusout',function(){   
        if (password.value.length > 8) {
        let errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "none";
        let passwordResult = true;
    }else{
        let errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Tengo que tener al menos 8 caracteres!!"
        let passwordResult = false;

    }});

    password.addEventListener('keyup',function(){               
    
    if (password.value.length > 0) {
    let errorDiv = document.querySelector(".passwordErrorDiv")
    errorDiv.style.display = "none";
    let passwordResult = true;
}else{
    let errorDiv = document.querySelector(".passwordErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacio!!"
    let passwordResult = false;
}
});



email.addEventListener('mouseout',function(){   
    if (email.value.indexOf("@") > 0) {
    let errorDiv = document.querySelector(".emailErrorDiv")
    errorDiv.style.display = "none";
    let emailResult = true;
}else{
    let errorDiv = document.querySelector(".emailErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No soy un mail!"
    let emailResult = false;

}});

let avatarResult = false;

    avatar.addEventListener('mouseout',function(){  
    var fname = avatar.value;
    var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    if (!re.exec(fname) && avatar.value.length != 0) {
        let errorDiv = document.querySelector(".avatarErrorDiv2")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "El formato de imagen no es válido!"
        let avatarResult = false;
    }else{
     let errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "none";
     let avatarResult = true;
    }

    });

    avatar.addEventListener('mouseout',function(){  
        if (avatar.value.length != 0) {
        let errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "none";
        let avatarResult = true;
    }else{
        let errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No has seleccionado una imagen aún!"
        let avatarResult = false;

    }});




form.addEventListener("submit", function(){
    let resultadoFinal = function (parametros){
        let resultado = 0;
        for(let i = 0 ; i < parametros.length ; i++)
        if (parametros == false ) {
            let resultado = resultado++
        }
        return resultado;
    };
    if (resultadoFinal(nameResult,emailResult,passwordResult,avatarResult) == 0){
        console.log("Está ok!");
    }else{
        event.preventDefault();
        alert("Chequea los campos!");
    }
});
}