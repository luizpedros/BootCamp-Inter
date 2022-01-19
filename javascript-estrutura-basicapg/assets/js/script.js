alert("Welcome!!!");

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber =  0;

function increment() {
    if(currentNumber<= 9){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        }else{
        currentNumberWrapper.innerHTML = currentNumber;
        }
}

function decrement() {
    if(currentNumber>= 1){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }else{
    currentNumberWrapper.innerHTML = currentNumber;
    }
    
}