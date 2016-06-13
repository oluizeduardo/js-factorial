var Logic = (function () {
    
    
    function calculateFactorial(number) {
        
        if(number < 0){
            alert('Deu erro mano!');        
        }else if(number === 0){
            return 1;
        }else{
            return number * calculateFactorial(number - 1);
        }  
    }
    
    
    
    function getNumber() {
        var inputNumber = document.getElementById('number');
        var number = parseInt(inputNumber.value);
        return number;
    }
    
    
    
    function showResult(result) {
        var span = document.getElementById('result');
        span.innerHTML = result || 0;
    }
  
    
    
    function eventClickButton(event) {
        var result = calculateFactorial(getNumber());
        showResult(result);
    }
    
    
    
    function setButton() {               
        var button = document.getElementById('btn');
        button.addEventListener('click',eventClickButton);
    }
    
    
    
    setButton();
})();