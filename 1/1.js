let ans = document.getElementById("answer");
let ansSet = [];
let symbol = 1;
let count = 0;
let temp = 0;
let justAns = false;
let SaveSet = "";
let SaveAns = [];
function beep(){
    document.getElementById("beep").play();
}
function pop(){
    document.getElementById("pop").play();
}
function ding(){
    document.getElementById("ding").play();
}
function clear(){
    document.getElementById("clear").play();
}
function erase(){
    document.getElementById("erase").play();
}
function sum(){
    document.getElementById("sum").play();
}
function goAns(x){
    beep();
    if (justAns == true){
        ans.innerHTML = "";
        justAns = false;
    }
    ans.innerHTML += x;
    ansSet.push(x);
    symbol = 0;
    count += 1;
}
function dot(){
    pop();
    if (justAns){
        ans.innerHTML = "";
        justAns = false;
    }
    if (symbol!= 1){
        ans.innerHTML += ".";
        for (let i = 0; i<count ; i++){
            temp = temp + Number(ansSet.slice(-1)[0]) * Math.pow(10,i);
            ansSet.pop();
        }
        ansSet.push(temp);
        temp = 0;
        count = 0;
        ansSet.push(".");
        symbol = 1;
    }
}
function plus(){
    pop();
    if (justAns){
        ans.innerHTML = "";
        justAns = false;
    }
    if (symbol!= 1){
        ans.innerHTML += "+";
        for (let i = 0; i<count ; i++){
            temp = temp + Number(ansSet.slice(-1)[0]) * Math.pow(10,i);
            ansSet.pop();
        }
        ansSet.push(temp);
        temp = 0;
        count = 0;
        ansSet.push("+");
        symbol = 1;
    }
}
function minus(){
    pop();
    if (justAns){
        ans.innerHTML = "";
        justAns = false;
    }
    if (symbol!= 1){
        ans.innerHTML += "-";
        for (let i = 0; i<count ; i++){
            temp = temp + Number(ansSet.slice(-1)[0]) * Math.pow(10,i);
            ansSet.pop();
        }
        ansSet.push(temp);
        temp = 0;
        count = 0;
        ansSet.push("-");
        symbol = 1;
    }
}
function mutliply(){
    pop();
    if (justAns){
        ans.innerHTML = "";
        justAns = false;
    }
    if (symbol!= 1){
        ans.innerHTML += "x";
        for (let i = 0; i<count ; i++){
            temp = temp + Number(ansSet.slice(-1)[0]) * Math.pow(10,i);
            ansSet.pop();
        }
        ansSet.push(temp);
        temp = 0;
        count = 0;
        ansSet.push("x");
        symbol = 1;
    }
}
function divide(){
    pop();
    if (justAns){
        ans.innerHTML = "";
        justAns = false;
    }
    if (symbol!= 1){
        ans.innerHTML += "÷";
        for (let i = 0; i<count ; i++){
            temp = temp + Number(ansSet.slice(-1)[0]) * Math.pow(10,i);
            ansSet.pop();
        }
        ansSet.push(temp);
        temp = 0;
        count = 0;
        ansSet.push("÷");
        symbol = 1;
    }
}
function clearAll(){
    clear();
    ans.innerHTML = "";
    temp = 0;
    count = 0;
    ansSet = [];
    symbol = 1;
}
function equal(){
    ding()
    if (justAns){
        ans.innerHTML = "";
        justAns = false;
    }
    for (let i = 0; i<count ; i++){
        temp = temp + Number(ansSet.slice(-1)[0]) * Math.pow(10,i);
        ansSet.pop();
    }
    ansSet.push(temp);
    temp = 0;
    count = 0;
    for (let i = 0 ; i < ansSet.length ; i++){
        SaveSet += ansSet[i].toString();
    }
    while (ansSet.length > 1){
        point = ansSet.findIndex(x => x === ".");
        div = ansSet.findIndex(x => x === "÷");
        mut = ansSet.findIndex(x => x === "x");
        min = ansSet.findIndex(x => x === "-");
        plu = ansSet.findIndex(x => x === "+");

        if (point != -1){
            ansSet[point-1] = ansSet[point-1]+ ansSet[point+1] * Math.pow(10,Number(ansSet[point+1].toString().length)*-1);
            ansSet.splice(ansSet.findIndex(x => x === ansSet[point]),2);
        }
        else if (div != -1 || mut != -1){
            if ((div < mut && div != -1) || (div != -1 && mut == -1)){
                ansSet[div-1] = ansSet[div-1] / ansSet[div+1];
                ansSet.splice(ansSet.findIndex(x => x === ansSet[div]),2);
            }
            else if ((mut < div && mut != -1) || (mut != -1 && div == -1)){
                ansSet[mut-1] = ansSet[mut-1] * ansSet[mut+1];
                ansSet.splice(ansSet.findIndex(x => x === ansSet[mut]),2);
            }
        }
        else if (min != -1 || plu != -1){
            if ((min < plu && min != -1) || (min != -1 && plu == -1)){
                ansSet[min-1] = ansSet[min-1] - ansSet[min+1];
                ansSet.splice(ansSet.findIndex(x => x === ansSet[min]),2);
                console.log("in");
            }
            else if ((plu < min && plu!= -1) || (plu != -1 && min == -1)){
                ansSet[plu-1] = ansSet[plu-1] + ansSet[plu+1];
                ansSet.splice(ansSet.findIndex(x => x === ansSet[plu]),2);
            }
        }        
    }   
    ans.innerHTML = ansSet[0];
    document.getElementById("olAns").innerHTML += "<li onclick = remove(this)>" + SaveSet + " = " + ansSet[0] + "</li>";
    SaveAns.push(ansSet[0]);
    SaveSet = [];
    ansSet = [];
    justAns = true;
}
function remove(x){
    erase();
    var element = x;
    element.remove();
}
function clearAllAns(){
    clear();
    SaveAns = [];
    document.getElementById("olAns").innerHTML = "";
}
function sumAll(){
    sum();
    let inCount = 0;
    for(let i = 0; i < SaveAns.length ; i++){
        inCount += SaveAns[i]
    }
    document.getElementById("olAns").innerHTML += "<h1 onclick = remove(this)> "+"Sum = " + inCount + "</h1>";
}
/*let ans.innerHTML.*/