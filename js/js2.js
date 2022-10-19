let counterElement = document.getElementById('counterValue');


function onIncrease(){
let previousValue = counterElement.textContent;
let updatedCounterValue = parseInt(previousValue)  + 1;

if(updatedCounterValue > 0){
    counterElement.style.color = "green";
}else if (updatedCounterValue < 0){
    counterElement.style.color = "red";
}else{
    counterElement.style.color = "orange";
}
counterElement.textContent = updatedCounterValue;
}
function onDecrease(){
let previousValue = counterElement.textContent;
let updatedCounterValue = parseInt(previousValue) - 1;

if(updatedCounterValue > 0){
    counterElement.style.color = "green";
}else if (updatedCounterValue < 0){
    counterElement.style.color = "red";
}else{
    counterElement.style.color = "orange";
}
counterElement.textContent = updatedCounterValue;
}

function onReset(){
let counterValue = 0;
counterElement.textContent = counterValue;
counterElement.style.color = "orange";
}