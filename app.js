let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let add = document.querySelector("#add");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let display_result = document.querySelector("#display_result");

//ADDING PART

add.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);

    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = AddTwoNumbers(num_1, num_2);
})

function AddTwoNumbers(a, b){
    let sum = a + b;
    return sum;
}

//SUBTRACTING PART

minus.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);

    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = SubtractTwoNumbers(num_1, num_2);
})

function SubtractTwoNumbers(a, b){
    let diff = a - b;
    return diff;
}

//MULTIPLICATION PART

multiply.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);

    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = MultiplyTwoNumbers(num_1, num_2);
})

function MultiplyTwoNumbers(a, b){
    let product = a * b;
    return product;
}

//DIVISION PART

divide.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);

    let num_2 = parseInt(num2.value);
    
    display_result.innerHTML = DivideTwoNumbers(num_1, num_2);
})

function DivideTwoNumbers(a, b){
    let quotient = a / b;
    return quotient;
}

//NOTE: INTERGER = WHOLE NUMBERS; FLOAT = DECIMAL NUMBERS