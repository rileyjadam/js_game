const resetButton = document.querySelector('#reset-button')
const resetNum = document.querySelector('#num-resets')
const teamOneButton = document.querySelector('#teamone-shoot-button')
const teamTwoButton = document.querySelector('#teamtwo-shoot-button')
const teamonenumshots = document.querySelector('#teamone-numshots')
const teamonegoals = document.querySelector('#teamone-numgoals')
const teamtwonumshots = document.querySelector('#teamtwo-numshots')
const teamtwogoals = document.querySelector('#teamtwo-numgoals')
let T2shots = 0
let T2goals = 0
let T1shots = 0
let T1goals = 0
let NR = 0
teamOneButton.addEventListener('click', function(){
    let random = Math.random()
    teamonenumshots.innerHTML = T1shots += 1
    if (random <0.5){
        teamonegoals.innerHTML = T1goals += 1

    }
})
teamTwoButton.addEventListener('click',function(){
    let random = Math.random()
teamtwonumshots.innerHTML = T2shots += 1
if (random <0.5){
    teamtwogoals.innerHTML = T2goals += 1
}
})
resetButton.addEventListener('click', function(){
    teamonegoals.innerHTML = T1goals= 0
    teamonenumshots.innerHTML = T1shots = 0
    teamtwogoals.innerHTML = T2goals = 0
    teamtwonumshots.innerHTML = T2shots = 0
    resetNum.innerHTML = NR += 1
})