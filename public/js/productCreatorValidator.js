window.onload = function(){

    var form = document.getElementById("form")
    var name = document.getElementById("name")
    var description = document.getElementById("description")
    var image = document.getElementById("image")
    var seller = document.getElementById("seller")
    var price = document.getElementById("price")
    var stock = document.getElementById("stock")
    var shipping = document.getElementById("shipping")
    var payment = document.getElementById("payment")
    var category = document.querySelectorAll(".category")
    var categoryDiv = document.querySelector(".categoryDiv")
    var section = document.querySelectorAll(".section")
    var sectionDiv = document.querySelector(".sectionDiv")

    name.addEventListener('keyup',function(){               
    
        if (name.value.length > 5) {
        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".nameErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "¡Tengo que tener al menos 5 caracteres!"
    }
}),

description.addEventListener('focusout',function(){               
    
    if (name.value.length > 19) {
    var errorDiv = document.querySelector(".descriptionErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".descriptionErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "¡Tengo que tener al menos 20 caracteres!"}
}),

image.addEventListener('focusout',function(){  
    var fname = image.value;
    var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    if (!re.exec(fname) && image.value.length != 0) {
        var errorDiv = document.querySelector(".imageErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "El formato de imagen no es válido!"
    }else{
     var errorDiv = document.querySelector(".imageErrorDiv")
        errorDiv.style.display = "none";
    }
}),

seller.addEventListener('keyup',function(){  
    if (seller.value.length != 0) {
    var errorDiv = document.querySelector(".sellerErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".sellerErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacío!"

}}),

price.addEventListener('focusout',function(){  
    if (seller.value.length != 0) {
    var errorDiv = document.querySelector(".priceErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".priceErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacío!"

}}),

stock.addEventListener('keyup',function(){  
    if (stock.value.length != 0) {
    var errorDiv = document.querySelector(".stockErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".stockErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacío!"

}}),

shipping.addEventListener('focusout',function(){  
    if (shipping.value.length != 0) {
    var errorDiv = document.querySelector(".shippingErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".shippingErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacío!"

}}),

payment.addEventListener('focusout',function(){  
    if (payment.value.length != 0) {
    var errorDiv = document.querySelector(".paymentErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".paymentErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacío!"

}}),

categoryDiv.addEventListener('keyup',function(){  
    if (categoryDiv.value != 0) {
    var errorDiv = document.querySelector(".categoryErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".categoryErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacío!"

}}),

sectionDiv.addEventListener('focusout',function(){  
    if (sectionDiv.value != 0) {
    var errorDiv = document.querySelector(".sectionErrorDiv")
    errorDiv.style.display = "none";
}else{
    var errorDiv = document.querySelector(".sectionErrorDiv")
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "No puedo estar vacío!"

}}),

form.addEventListener("submit", e=>{
    e.preventDefault();
    if (
                name.value.length > 0 &&
                image.value.length > 0 &&
                seller.value.length > 0 &&
                price.value.length > 0 &&
                shipping.value.length > 0 &&
                description.value.length > 19        
                ){
                var errorDiv = document.querySelector(".formErrorDiv")
                errorDiv.style.display = "none";
                form.submit();
            }else{            
                var errorDiv = document.querySelector(".formErrorDiv")
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "Por favor, revise los campos!";
        }
    }

)}
    