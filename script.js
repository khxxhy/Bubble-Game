
let score = 10;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    let rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function makeBubble (){
let clutter = " ";

 for(let i = 1; i<=112; i++){
    let rn = Math.floor(Math.random()*10);
 clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

 let timer = 60;
    function runTimer() {
       let timerint = setInterval(function () {
            if (timer>0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;}
            else {
                clearInterval(timerint);
                }
        }, 1000)
        }

        document.querySelector("#pbtm")
        addEventListener("click", function (dets){
            alert("chal rha h");
        })

        runTimer();
        makeBubble();
        getNewHit();
