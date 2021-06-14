window.onload = function(){

    let adminCheck = document.querySelector(".adminCheck")
    let adminOnly = document.getElementById("adminOnly")

    let estadoSecreto = 0;

    adminCheck.addEventListener('mouseout', () => {
        adminOnly.classList.add("display:block");
    })

    adminCheck.addEventListener('keypress',function(e){
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