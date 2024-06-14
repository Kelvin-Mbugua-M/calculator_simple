const displayInput= document.getElementById('input');
const displayOutPut=document.getElementById('answerBar');
console.log( typeof displayInput);
function clearScreen(){
    displayInput.value="";
    displayOutPut.value="";
}

function executeValues(){
    try{
        displayOutPut.value=eval((displayInput.value));  
    }
    catch(e){
        displayOutPut.value="Error";
    }
}
function addValueToDisplay(points){
    displayInput.value+=points;
    return executeValues();
}
document.addEventListener('keypress',function(e){
    for(let i=0;i<=9;i++){
        if(e.key==i){
            addValueToDisplay(i)
        }
}  
})
