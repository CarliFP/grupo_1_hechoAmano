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

    let resultado = true; //Esto validará si los campos están correctos, en caso de que alguno de los campos NO cumpla con el requisito esto pasará a False.

    name.addEventListener('focusout',function(){    
        if (this.value.length > 2) {
        console.log("Cumple!!")
    }else{
        event.preventDefault();
        this.style.display = "block";
    }});

    form.addEventListener("submit", function(){
        if (resultado === false){
            event.preventDefault();
            alert("Por favor, revise todos los campos.")
        }else{

        }
    })

}