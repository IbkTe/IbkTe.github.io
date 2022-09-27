function addToCart(){

let items = 

[{
product:'Gucci',
price: '20',
quantity:3,
image: 'ferragamo.png',
},
{
product:'Ferragamo',
price: '25',
quantity:1,
image: 'images.png',
},
{
product:'Ashluxe',
price: '30',
quantity:2,
image: 'ashluxe.png',
}
];
for(i = 0 ; i < items.length; i++){
     let wholeBody = document.getElementsByClassName('body')
    let title = document.getElementsByClassName("name-of-shirt")[1];
    title.innerHTML = items[1].product
console.log(title)
}

   
    
}
addToCart()
let contentHtml = `

          <div class="product first">
            <div class="shirt"></div>
            <div class="name-of-shirt">
              <p>shirt</p>
              <h4>GUCCI</h4>
            </div>
            <div class="quantity">
              <button id="mi" class="btnminus">-</button>
              <input type="number" id="num" inputmode="numeric" value="3" class="cart-quantity-input">
              <button id="pi" class="btnplus">+</button>
            </div>
            <h4 class="originalamount">20</h4>
            <h4 id="amount" class="amount">£20.00</h4>
            <p id="cancel" class="delete">x</p>
          </div>
`
    // function run(){
    //     var main = document.getElementById('body');

    //     // all elements to be add
    //     for(i = 0; i < items.length; i++){

    //     var ele = document.createElement('product');
    //     var pic = document.createElement('img');
    //     var name = document.createElement('h3');
    //     var  minusBtn = document.createElement('button');
    //     var typeBox = document.createElement('input');
    //     var  plusBtn = document.createElement('button');
    //     var price = document.createElement('h3');
    //     var close = document.createElement('p');

    //     // push element into HTML
    //     main.appendChild(ele);
    //     ele.appendChild(pic);
    //     ele.appendChild(name);
    //     ele.appendChild(minusBtn);
    //     ele.appendChild(typeBox);
    //     ele.appendChild(plusBtn);
    //     ele.appendChild(price);
    //     ele.appendChild(close);

    //     // edit pushed elements info from array

    //     pic.src = items[i].image;
    //     name.innerHTML = items[i].product;
    //     minusBtn.innerHTML = '&minus;';
    //     typeBox.type = 'number'
    //     plusBtn.innerHTML = `&plus;`;
    //     price.innerHTML = items[i].price;
    //     close.innerHTML = `&times;`
    //     }}


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

