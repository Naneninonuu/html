function play(){
    var num = Math.floor(Math.random()*6)+1;
    console.log(num);
    document.getElementById("source").src = `mp3/B${num}.mp3`;
    document.getElementById("Bsound").load();
    document.getElementById("Bsound").play();
}
function scrollToEdu(){
    document.getElementById("education").scrollIntoView({behavior:"smooth"});
}
function scrollToExp(){
    document.getElementById("experience").scrollIntoView({behavior:"smooth"});
}
function scrollToAbg(){
    document.getElementById("autobiography").scrollIntoView({behavior:"smooth"});
}

function scrollToWorkSet(){
    document.getElementById("workSet").scrollIntoView({behavior:"smooth"});
}
function scrollToTop(){
    document.getElementById("title").scrollIntoView({behavior:"smooth"});
}
function hiddenCode(){
    let code = document.getElementById("Code").value;
    document.getElementById("Code").value = "";
    if (code === "bear"){
        document.getElementById("hidden").innerHTML = "BBBB";
    }
}