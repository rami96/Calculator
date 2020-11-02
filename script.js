let entering = "";
let screen = document.getElementById('maintext');
screen.innerText = entering;

//operations
addition=(a,b)=>{
    return a + b;
}

substraction=(a,b)=>{
    return a - b;
}

multiplication=(a,b)=>{
    return a * b;
}

division=(a,b)=>{
    return a / b;
}

//Assign Numbers then show in screen when pressed
let numbers = document.querySelectorAll(".btnnum");
for (let num = 0; num < numbers.length; num++){
    numbers[num].addEventListener('click',function(){
        entering+=this.id;
        screen.innerText = entering;
    })
}

//Assign operators then show in screen when pressed
let operators = document.querySelectorAll(".btnoperator");
for (let op = 0; op < operators.length; op++){
    operators[op].addEventListener('click',function(){
        //alert("The pressed button is: " + this.id)
        entering+=this.id;
        screen.innerText = entering;
    })
}

//Assign "=" sign and calculate then show in screen
let equals = document.getElementById("enter");
equals.addEventListener('click',function(){//evel blast operate
    entering === "" ? ("") : entering = operate(entering);
    //screen.innerText = entering;
})

//Assign "AC" and make it reset the screen
let reset = document.getElementById("clear");
reset.addEventListener('click',function(){
    entering = "";
    screen.innerText = entering;
})

operate=(operation)=>{
    //operation = "\""+operation+"\"";
    console.log(operation)
    let sign = "";
    for(let oper = 0; oper < operation.length; oper++){
        if(operation[oper] === "/" || operation[oper] === "*"|| 
        operation[oper] === "-"|| operation[oper] === "+"){
            sign = operation[oper];
        }
    }
    let index = operation.indexOf(sign);
    let a = operation.slice(0,index);
    let b = operation.slice(index+1,operation.length)
    if(sign === '/') entering = division(a,b);
    else if(sign === '*') entering = multiplication(a,b);
    else if(sign === '-') entering = substraction(a,b);
    else entering = addition(a,b);
    screen.innerText = entering;
    console.log(b)
}