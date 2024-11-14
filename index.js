let homeCounter = 0 
let guestCounter = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let newGameBtn = document.getElementById("newGame-btn")

function add1PointHome() {
    homeCounter += 1 
    homeScoreEl.textContent = homeCounter
}

function add2PointHome() {
    homeCounter += 2 
    homeScoreEl.textContent = homeCounter
}

function add3PointHome() {
    homeCounter += 3 
    homeScoreEl.textContent = homeCounter
}

function add1PointGuest() {
    guestCounter += 1 
    guestScoreEl.textContent = guestCounter
}

function add2PointGuest() {
    guestCounter += 2 
    guestScoreEl.textContent = guestCounter
}

function add3PointGuest() {
    guestCounter += 3 
    guestScoreEl.textContent = guestCounter
}

function newGame() {
    homeCounter = 0 
    guestCounter = 0
    homeScoreEl.textContent = homeCounter
    guestScoreEl.textContent = guestCounter
}