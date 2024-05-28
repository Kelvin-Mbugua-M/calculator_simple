const displayInput= document.getElementById('input');
const displayOutPut=document.getElementById('answerBar');
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