var memory;

function clearOutput(){
    document.getElementById("output").innerHTML="0";
}
function minusOnehar(){
    var text = document.getElementById("output").innerHTML;
    if(text == "0"){
        text = 0;
    }
    text = text.slice(0,-1);
    if(text == " "){
        text = "0";
    }
    document.getElementById("output").innerHTML = text;
}
function removeZero(){
    var value = document.getElementById("output").innerHTML;
    if(value=="0"){
        value = " "
        document.getElementById("output").innerHTML=value;
    }
}
function perc(){
    removeZero()
    var value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML=value;
}
function fordisplay(myvalue){
    removeZero()
    document.getElementById("output").innerHTML += myvalue
}
function solve(){
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML = solved;
}
function memory_c() {
    memory = "0";
}
function memory_p() {
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    memory = solved;
}
function memory_s() {
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    memory = memory - solved;
}
function memory_r() {
    document.getElementById("output").innerHTML = memory;
}  
