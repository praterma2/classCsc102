// for the assignment we need a timer to count down from 50 to 0 in 5 second increments and show "blastoff" at 0
// for my example we are going to count down from 20 to 0 in 2 second increments and show "blastoff" at 0
function blastOffTimer(){
    console.log("blastOffTimer() started");
    var currTime = 20;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log("20");
    currTime = currTime -2
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 2000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 4000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 6000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 8000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 10000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 12000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 14000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 16000);
    setTimeout(function(){
        console.log(currTime);
        if(currTime == 2){
            document.getElementById("blastOffText").innerHTML = "almost there, 2 sec left";
        }else if(currTime == 4){
            document.getElementById("blastOffText").innerHTML = "kinda almost there, 2 sec left";
        }else{
            document.getElementById("blastOffText").innerHTML = currTime;
        }
        currTime = currTime -2
    }, 18000);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "blastoff!!";
        currTime = currTime -2
    }, 20000);
}
