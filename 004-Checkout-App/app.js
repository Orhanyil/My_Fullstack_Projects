//**********variables


//**********selector

//const main = document.querySelector(".main__product")4

const main = document.getElementById("products-preview")

main.addEventListener("click", (e) => {

    console.log(e.target.className);

    if(e.target.classList.contains("fa-minus")) {

        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText --
        }
        
    } 

    
    else if(e.target.classList.contains("fa-plus")) {

         if(e.target.previousElementSibling.innerText > 0) {
             e.target.previousElementSibling.innerText ++;
             e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".main__product-line-price").innerText = e.target.previousElementSibling.innerText * e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".dollar").innerText
         }
        
    } 

    else if(e.target.classList.contains("fa-trash-can")) {

       e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        
    } 
})
