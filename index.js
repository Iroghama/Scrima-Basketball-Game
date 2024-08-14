let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");
let hcount = 0
let gcount = 0
let announcer = document.getElementById("announce")
// timing controls
let timer; //variable to link setInterval and clearInterval
let timeLeft = 20; // seconds

//colours for highlight
function color(){
    if (hcount > gcount) {
        document.getElementById("home").style.border = "2px solid #ff073a "
        document.getElementById("guest").style.border = "0"
    }
    else if (hcount < gcount) {
        document.getElementById("home").style.border = "0";
        document.getElementById("guest").style.border = "2px solid #ff073a";
    }
    else {
        document.getElementById("home").style.border = "0";
        document.getElementById("guest").style.border = "0";
    }
}

//increment function begins
function add1H(){
    hcount +=1;
    homeScore.textContent = hcount;
    color();
}
function add1G(){
    gcount +=1;
    guestScore.textContent = gcount;
    color();
}
function add2H(){
    hcount +=2;
    homeScore.textContent = hcount;
    color();
}
function add2G(){
    gcount +=2;
    guestScore.textContent = gcount;
    color();
}
function add3H(){
    hcount +=3;
    homeScore.textContent = hcount
    color();
}
function add3G(){
    gcount +=3;
    guestScore.textContent = gcount;
    color();
}

function newGame(){
    announcer.style.visibility = "hidden"
    announcer.textContent = "WINNER: "
    hcount = 0;
    gcount = 0;
    color(); //this was included here because after the scores revert to zero the outline remains on the winner
    homeScore.textContent=hcount;
    guestScore.textContent = gcount;
    timeLeft = 20;
    document.getElementById("start-game").style.visibility = "visible";
    document.getElementById("timer").style.visibility = "visible"
}
function announce(){
    if (hcount > gcount) {
        announcer.textContent += "HOME"
        announcer.style.visibility = "visible"
    }
    else if (hcount < gcount) {
        announcer.textContent += "GUEST"
        announcer.style.visibility = "visible"
    }
    else {
        announcer.textContent += "None. It's a tie!"
        announcer.style.visibility = "visible"
    }
    setTimeout(newGame, 3000);

}
//increment function ends here

//function to begin the game
function startGame(){
    // console.log("started")
    timer = setInterval(updateTimer, 1000);//calls updateTimer every second
    // console.log("pass")
    document.getElementById("start-game").style.visibility = "hidden";//hides the start game button
    //enables increment buttons. I tried targeting the classes it didn't work
    document.getElementById("on1").disabled = false
    document.getElementById("on2").disabled = false
    document.getElementById("on3").disabled = false
    document.getElementById("on4").disabled = false
    document.getElementById("on5").disabled = false
    document.getElementById("on6").disabled = false
    updateTimer();// calls it as soon as the player begins
}

//function to update count
function updateTimer(){
    timeLeft -= 1;//decrements the timeLeft variable every second 
    if (timeLeft >= 0){
        document.getElementById("timer").textContent = timeLeft
    }
    else{   
        gameOver();
    }
}

//runs when the time is finished
function gameOver(){
    clearInterval(timer);//prevents a loop.
    document.getElementById("on1").disabled = true
    document.getElementById("on2").disabled = true
    document.getElementById("on3").disabled = true
    document.getElementById("on4").disabled = true
    document.getElementById("on5").disabled = true
    document.getElementById("on6").disabled = true
    announce();
    document.getElementById("timer").style.visibility = "hidden"//hides the time
}
    

