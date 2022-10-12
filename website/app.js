const pageLimit = 30;
let page = 1;

addEventListener('DOMContentLoaded', main)

function main(){
    allProducts().then(updatePage)
    
    
}

function allProducts (){
    const skip = (page -1)*pageLimit
    return fetch(`https://dummyjson.com/products?limit=${pageLimit}&skip=${skip}`)
        .then (data => data.json())
        .then (result => result)
};

function updatePage(result){
    document.querySelector('.current-page').innerHTML= page
    document.querySelector('.total-pages').innerHTML= result.total

    for(let i=1; i < Math.ceil(result.total/pageLimit; i++){

    }


    for(let product of result.products){
        const clone = productTemplate.content.cloneNode(true)
        clone.querySelector('.product-brand').innerHTML = product.brand

        clone.querySelector('.product-title').innerHTML = product.title

        clone.querySelector('.product-price').innerHTML = product.price

        productList.appendChild(clone)
    }
}
