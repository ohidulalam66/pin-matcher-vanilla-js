function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('i have a get 3 digit', pin);
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad'),addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    

})

function verifyPin(){
    const generatePin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifySuccess =  document.getElementById('notify-success');
    const notifyFail =  document.getElementById('notify-fail');
    if(generatePin == typedNumbers){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else{
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}