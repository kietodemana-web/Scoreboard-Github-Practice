let guestScore = 0
let homeScore = 0
let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")
let guestScoreEl = document.getElementById("guestScore-El")
let homeScoreEl =document.getElementById("homeScore-El")
function plus1(){
    guestScore += 1
    guestScoreEl.innerText = guestScore
    updateWinner()
}
function plus2(){
    guestScore += 2
    guestScoreEl.innerText = guestScore
    updateWinner()
}
function plus3(){
    guestScore += 3
    guestScoreEl.innerText = guestScore
    updateWinner()
}
function plus1home(){
    homeScore += 1
    homeScoreEl.innerText = homeScore
    updateWinner()
}
function plus2home(){
    homeScore += 2
    homeScoreEl.innerText = homeScore
    updateWinner()
}
function plus3home(){
    homeScore += 3
    homeScoreEl.innerText = homeScore
    updateWinner()
}
function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
    updateWinner()
}
function updateWinner(){
    if(homeScore > guestScore){
        homeTitle.style.color = "yellow"
        guestTitle.style.color= "black"
    }
    else if(homeScore < guestScore){
        homeTitle.style.color = "black"
        guestTitle.style.color= "yellow"
    }
    else{
        homeTitle.style.color = "black"
        guestTitle.style.color= "black"
    }
}
