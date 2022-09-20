// const array = [{
//     product:'Gucci',
//     price: '$20',
//     quantity:3,
//     thumbnail: 'https://picsum.photos/id/237/200/300',
// },
// {
//     product:'Ferragamo',
//     price: '$25',
//     quantity:1,
//     thumbnail: 'https://picsum.photos/id/237/200/300',
// },
// {
//     product:'Ashluxe',
//     price: '$30',
//     quantity:2,
//     thumbnail: 'https://picsum.photos/id/237/200/300',
// }
// ];

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
function ready(){

const removeButton = document.querySelectorAll('.delete');
for(let i=0; i < removeButton.length; i++){
    removeButton[i].addEventListener('click',removeCartItem)
}

 document.getElementsByClassName('purchase')[0].addEventListener('click', purchaseclicked)

 let quantity = document.getElementsByClassName('quantity')
 for (let item of quantity ){
    let input =  item.querySelector('.cart-quantity-input')
   input.addEventListener('change', quantityChange)

    item.querySelector('.btnplus').addEventListener('click', function(){
input.value =parseInt(input.value)+ 1
upateCartTotal()
    })
    
    item.querySelector('.btnminus').addEventListener('click', function(){
        input.value =parseInt(input.value)- 1
        if (input.value <= 0 ){
            input.value = 1
        }
        upateCartTotal()
            })
 }
}


 function purchaseclicked(){
    alert('Thank you for checking out')
    var cartitem =document.getElementsByClassName('body')[0]
    while(cartitem.hasChildNodes()){
        cartitem.removeChild(cartitem.firstChild)
    }
    upateCartTotal()
 }

    function removeCartItem(e){
         let removebtn = e.target; 
        removebtn.parentElement.remove();

        upateCartTotal()
    }

    function quantityChange(event){
        let input=event.target
        if(isNaN(input.value) || input.value <= 0){
            input.value = 1
        }

        
        upateCartTotal()

    }

function upateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('body')[0];
    
    let cartRows = cartItemContainer.getElementsByClassName('product')
    let total = 0
    for(let i=0; i < cartRows.length; i++){
    let cartRow = cartRows[i]

    let priceElement = cartRow.getElementsByClassName('amount')[0]
    let originalPriceElement = cartRow.getElementsByClassName('originalamount')[0]



    let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

        let price = parseInt( originalPriceElement.innerHTML)
        let quantity = parseInt( quantityElement.value)
     total= total + ( price * quantity)   
     
     priceElement.innerText = '£' + price * quantity + '.00'



    }
 

    total = Math.round(total * 100)/100
    document.getElementsByClassName('total-price')[0].innerText = '£' + total + '.00'

    // totaltotaltotal = Math.round((total * 100)/100)+ span[i]
    
    totaltotal = document.getElementsByClassName('total-price')[1].innerText =`£${total} .00`
    
    // span = document.getElementsByClassName("span")[0]

// for(i=0; span.length; i++)
// spannumber.innerHTML = parseInt(span[i]) 
//     console.log(spannumber)
// upateCartTotal()
}

