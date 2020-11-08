const startButton = document.getElementById('start-button');
const p = document.getElementById('result');

var first = 192;
var second = 168;
var third = 41;
var fourth = 0;


async function request() {
    try{
        plusOne();
        var response = await fetch(`http://${first}.${second}.${third}.${fourth}`);
        //let data = await response.json();
        if(response){
            p.textContent += `${first}.${second}.${third}.${fourth}`;
        }
    } catch (error) {
    }
}

function plusOne() {
    if(fourth < 255){
        fourth++;
    } else if(third < 255){
            third++;
            fourth = 0;
    } else if(second < 255){
        second++;
        third = 0;
        fourth = 0;
    } else if(first < 255){
        first++;
        second = 0;
        third = 0;
        fourth = 0;
    }
    
}

async function start() {
    setInterval(request, 80);
}


startButton.addEventListener('click', start);