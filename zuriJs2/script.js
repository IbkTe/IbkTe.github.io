    function getValue() {
    var x, y, z, oper;
    oper = prompt('Please Enter The Operator You Want To Perform (+, -, /, *)');
    x = prompt('Number 1: ');
    y = prompt('Number 2: ');
    if(oper == '+'){
        z = Number(x) + Number(y);
    }
    else if(oper == null){
        z = 'Error'
    }
    else if(x == null){
        z = 'Error'
    }
    else if(y == null){
        z = 'Error'
    }
    else if(oper == '/'){
        z = Number(x) / Number(y)
    }
    else if(oper == '*'){
        z = Number(x) * Number(y)
    }
    else if(oper == '-'){
        z = Number(x) - Number(y)
    }
    return z;
    }
    alert(getValue());


    // const num1 = parseFloat(prompt('enter nr1: ')); 
    // const num2 = parseFloat(prompt('enter nr2: '));

    // const oper = prompt('enter operator ( + , - , / , * )');
    // let result = 0;
    // if(isNaN(num1)|| isNaN(num2)){
    //     alert('Wrong input! Refresh the page again and provide data!');
    // } 
    // else{
    //     if (oper == '+'){
    //         result = num1 + num2;
    //     }else if (oper == '-'){
    //         result = num1 - num2;
    //     }else if (oper == '/'){
    //         result = num1 / num2;
    //     }else if (oper == '*'){
    //         result = num1 * num2;
    //     }
    //     document.write(num1 + oper + num2 + ' = ' + result);
    // }