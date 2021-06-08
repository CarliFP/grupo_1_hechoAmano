window.onload = function(){

    let form = document.querySelector(".login-form")

    let validacion = true;

    form.addEventListener("submit", function(){
        if (validacion == true){
            console.log("Cumple con los campos!");
        }else{
            event.preventDefault();
            
        }


}