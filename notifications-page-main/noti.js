const button = document.querySelector('#mark-all-as-read');   

button.addEventListener('click',function(){

    // const allUnread = document.querySelectorAll('.unread');
    // for(let i= 0; i<allUnread.length; i++){
    //     allUnread[i].classList.remove('unread');
    // }
       
    // using foreach loop
    // allUnread.forEach(a => a.classList.remove('unread'))

    // looping tru body
const body = document.querySelectorAll('.body>div');
    for(let i= 0; i<body.length; i++){
         body[i].classList.remove('unread')
    }

    const spanDot = document.querySelectorAll('.red-dot')
    for(dot of spanDot){
            dot.parentNode.removeChild(dot)

    }
    document.querySelector('.no-of-notification').innerHTML = 0;

})

const eachUnread = document.querySelectorAll('.unread');
for(each of eachUnread){
    each.addEventListener('click', function(){
        let result =0
        for(let i= 0; i >= 3; i--){
                    btn = parseInt( document.querySelector('.no-of-notification' - 1));

        }
        // btn.innerHTML = btn-1;   
        // console.log(btn)  

    const eachbody = document.querySelectorAll('.unread')[0];
    for(let i= 0; i < eachbody.length; i++){
         eachbody.classList.remove('unread')
       }
 }
    )}

