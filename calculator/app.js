//get consoles
const former = document.querySelector(".former")
const latter = document.querySelector(".latter")

const currOperator = document.querySelector('.currOperator');
var savedOperator = this.innerHTML;

former.innerHTML = '';
latter.innerHTML = '';

//get buttons
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll('.operator');
const c = document.querySelector('.c');
const ce = document.querySelector('.ce');
const dot = document.querySelector('.dot');
const enter = document.querySelector('.enter');

//function number buttons
numbers.forEach((number,index) => {
    number.addEventListener('click', addNumber)
});

function addNumber(){
    if(latter.innerHTML == '0')
        latter.innerHTML = '';
    if(!savedOperator)
        former.innerHTML = '';
    latter.innerHTML += this.innerHTML;
}

//function operator buttons
operators.forEach(operator => operator.addEventListener('click', addOperator));

function addOperator(){
    //display operator
    currOperator.innerHTML = this.innerHTML;
    
    //first time - give former a number
    if(latter.innerHTML != '' && former.innerHTML == ''){
        former.innerHTML = latter.innerHTML;
        latter.innerHTML = '';
        savedOperator = this.innerHTML;
    }

    if(former.innerHTML != '' && latter.innerHTML == '')
        savedOperator = this.innerHTML;

    if(latter.innerHTML != '' && former.innerHTML != ''){
        if(savedOperator == '+')
            former.innerHTML = parseFloat(former.innerHTML) + parseFloat(latter.innerHTML);
        else if(savedOperator == '-')
            former.innerHTML = parseFloat(former.innerHTML) - parseFloat(latter.innerHTML);
        else if(savedOperator == 'x')
            former.innerHTML = parseFloat(former.innerHTML) * parseFloat(latter.innerHTML);
        else if(savedOperator == '/')
            former.innerHTML = parseFloat(former.innerHTML) / parseFloat(latter.innerHTML);
        
        latter.innerHTML = '';
        savedOperator = this.innerHTML;
    }

}

//function enter button
enter.addEventListener('click',()=>{
    if (former.innerHTML != '' && latter.innerHTML != ''){
        if(savedOperator == '+')
            former.innerHTML = parseFloat(former.innerHTML) + parseFloat(latter.innerHTML);
        else if(savedOperator == '-')
            former.innerHTML = parseFloat(former.innerHTML) - parseFloat(latter.innerHTML);
        else if(savedOperator == 'x')
            former.innerHTML = parseFloat(former.innerHTML) * parseFloat(latter.innerHTML);
        else if(savedOperator == '/')
            former.innerHTML = parseFloat(former.innerHTML) / parseFloat(latter.innerHTML);
        latter.innerHTML = '';
        savedOperator = null;
    }
    if(former.innerHTML != '' && latter.innerHTML == ''){
        currOperator.innerHTML = '';
    }
})

//function ce button
ce.addEventListener('click',() => latter.innerHTML = '');

//function c button
c.addEventListener('click', () => {
    former.innerHTML = '';
    latter.innerHTML = ''; 
})

//function dot button
dot.addEventListener('click', addDot);

function addDot(){
    var temp = latter.innerHTML;
    var existed = false;
    for(var i = 0; i < temp.length; i++){
        if (temp.charAt(i) == '.'){
            existed = true;
        }
    }
    if(!existed){
        latter.innerHTML += '.';
    }
}
