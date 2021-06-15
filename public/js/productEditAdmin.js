window.onload = function(){

    let email = document.querySelector(".email")
    let comment = document.querySelector(".questionBox")
    let adminOnly = document.getElementById("adminOnly")
    let eraseButton = document.querySelector(".submit-button")

    let form = document.querySelector(".questionField-form")


    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    email.addEventListener('focusout',function(){   
        if (re.test(email.value)) {
        var errorDiv = document.querySelector(".emailErrorDiv")
        errorDiv.style.display = "none"
    }else{
        var errorDiv = document.querySelector(".emailErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.style.color = "tomato";
        errorDiv.innerHTML = "No soy un mail!"
    }});

    comment.addEventListener('focusout',function(){               
        if (comment.value.length > 0) {
        var errorDiv = document.querySelector(".commentErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".commentErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.style.color = "tomato";
        errorDiv.innerHTML = "No puedo estar vacio!!"
    }
    })

    form.addEventListener('submit', e=>{
        e.preventDefault();
        if (re.test(email.value) && comment.value.length > 0){
            form.submit();

            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "none"
        }else{
            var errorDiv = document.querySelector(".formErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.style.color = "tomato";
            errorDiv.innerHTML = "Por favor, complete los campos."
        }
    })

    eraseButton.addEventListener('click', function(){
        email.value = "";
        comment.value = "";
        var errorDiv1 = document.querySelector(".emailErrorDiv")
        var errorDiv2 = document.querySelector(".commentErrorDiv")
        var errorDiv3 = document.querySelector(".formErrorDiv")

        errorDiv1.style.display = "none"
        errorDiv2.style.display = "none"
        errorDiv3.style.display = "none"

    })

    
    let estadoSecreto = 0;
    window.addEventListener('keypress',function(e){
        switch (estadoSecreto) {
            case 0:
                e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 1:
                e.key == "o" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 2:
                e.key == "y" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 3:
                e.key == "a" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 4:
                e.key == "d" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 5:
                e.key == "m" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 6:
                e.key == "i" ? estadoSecreto++ : (estadoSecreto = 0) ;
                break;
            case 7:
                e.key == "n" ? adminOnly.style.display = "block" : (estadoSecreto = 0) ;
                break;
            default:
                break;
        }
    console.log(e.key,estadoSecreto, adminOnly);
   })
    
    
}