let outputScreen  = document.getElementById("output-screen");
function display(num) {
    outputScreen.value += num;
}
function Calculator(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid Input");
    }
    
}

function clr(){
    outputScreen.value = 0;
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-2);
}
