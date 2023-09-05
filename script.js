function makebubble(){
    var clutter = "" ;

for(var i=1; i<=160; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#panel-btm").innerHTML = clutter;
}

var initial_time = 60;
function timer(){
    var time_change = setInterval(function mytimer(){
        if(initial_time>0){
            initial_time--;
            document.querySelector("#timer").textContent = initial_time;
        }
        else{
            clearInterval(time_change);
            document.querySelector("#panel-btm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

var hitval;
function hit(){
    hitval = Math.floor(Math.random()*10);
    document.querySelector("#hitbox").textContent = hitval;
}

var score = 0;
function myscore(){
    score += 10;
    document.querySelector("#scorebox").textContent = score;
}

document.querySelector("#panel-btm").addEventListener("click",function(details){
    var clickedval=Number(details.target.textContent);
    if(hitval === clickedval){
        myscore();
        makebubble();
        hit();
    }
});
makebubble();
timer()
hit();