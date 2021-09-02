let outputScreen  = document.getElementById("output-screen");
function display(num) {
    outputScreen.value += num;
}
function Calculator(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(e){
        alert("Invalid Input");
    }
    function clear_(){
        outputScreen.value = "";
    }
    function del_(){
        outputScreen.value =outputScreen.value.slice(0,-2);
    }
    
}
