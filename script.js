var timer = 60;
var score = 10;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble (){
let clutter = " ";

 for(let i = 1; i<=112; i++){
    let rn = Math.floor(Math.random()*10);
 clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

 var timer = 60;
    function runTimer() {
       let timerint = setInterval(function () {
            if (timer>0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;}
            else {
                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER!</h1>";
                }
        }, 1000)
        }

        document.querySelector("#pbtm")
        addEventListener("click", function (dets){
            var clickedNum = (Number(dets.target.textContent));
            if (clickedNum === hitrn) {
                increaseScore();
                makeBubble();
                getNewHit();
            }
        });

        runTimer();
        makeBubble();
        getNewHit();
        
