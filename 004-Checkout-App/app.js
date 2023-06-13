//**********variables


//**********selector


//const main = document.querySelector(".main__product")4

const main = document.getElementById("products-preview")

const amountOfProducts = document.querySelector(".amount-of-product")

const selectedProducts = document.querySelector(".main__sum-price")

const shipping = document.getElementById("cart-shipping").querySelector(".dollar")
const tax = document.getElementById("cart-tax").querySelector(".dollar")
const total = document.getElementById("cart-total").querySelector(".dollar")
const totalValue = document.getElementById("cart-total").querySelector(".dollar")


window.addEventListener("load",() => {
    selectedProducts.innerHTML = updateAmount();
    finishOrder()
})

main.addEventListener("click", (e) => {

    console.log(e.target.className);

    if(e.target.classList.contains("fa-minus")) {

        const productSubtotal = e.target.closest(".main__product-info");

        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText --;
            
            productSubtotal.querySelector(".main__product-line-price").innerText = (e.target.nextElementSibling.innerText * productSubtotal.querySelector(".dollar").innerText).toFixed(2)
        }
        
    } 

    else if(e.target.classList.contains("fa-plus")) {

        const productSubtotal = e.target.closest(".main__product-info");
        
        if(e.target.previousElementSibling.innerText > 0) {
            e.target.previousElementSibling.innerText ++;

            productSubtotal.querySelector(".main__product-line-price").innerText = (e.target.previousElementSibling.innerText * productSubtotal.querySelector(".dollar").innerText).toFixed(2)

        }
           
    } 

    else if (e.target.classList.contains("fa-trash-can")) {
        const productRow = e.target.closest(".main__product");
        if (confirm("Product removed from cart.") == true) {
          productRow.remove();

          amountOfProducts.innerText --
        }
        else {}
      }

      selectedProducts.innerHTML = updateAmount()

      finishOrder()

   
})

function updateAmount () {
    let totalAmount = document.getElementsByClassName("main__product-line-price");
    
    let sum = 0;

    for(let i of totalAmount){
        sum += +(i.innerText);                
    }
    return sum.toFixed(2);
}

function finishOrder() {
    const selectedProductsValue = Number(selectedProducts.innerText);
    const shippingValue = (selectedProductsValue >= 3000) ? "0" : "25.99";
    const taxValue = (selectedProductsValue * 0.18).toFixed(2);
    const totalValue = (Number(shippingValue) + Number(taxValue) + selectedProductsValue).toFixed(2);
}