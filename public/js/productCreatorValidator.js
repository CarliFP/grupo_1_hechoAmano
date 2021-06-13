window.onload = function(){

    var form = document.getElementById("form")
    var name = document.getElementById("name")
    var description = document.getElementById("description")
    var imagen = document.getElementById("image")

    name.addEventListener('keyup',function(){               
    
        if (name.value.length > 20) {
        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "¡Tengo que tener al menos 20 caracteres!"
    }
})}