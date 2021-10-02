
let coin = document.getElementById("coin");
let gameBtn = document.getElementById("button");
let scoreShow = document.getElementById("score");
let gameGoal = document.getElementById("goal");
let score = 0 ;


gameBtn.addEventListener("click" , ()=>{
gameBtn.style.display = "none" ;
gameGoal.innerText = `${score}/10`
let gameId = setInterval(()=>{
let randomPosition = Math.round(Math.random()*450);
let anotherRandom =  Math.round(Math.random()*450);
coin.style.position = "absolute"
coin.style.marginLeft = `${randomPosition}px`
coin.style.marginTop = `${randomPosition}px`
coin.style.marginBottom = `${anotherRandom}px`
coin.style.marginRight = `${anotherRandom}px`

if (score == 10){
clearInterval(gameId);
coin.style.display = "none";
scoreShow.style.fontSize = "60px"
scoreShow.innerText = "Good job !"
scoreShow.style.marginTop = "40vh" ;
}
} , 700)
})

coin.addEventListener("click" , ()=>{
score++ ;
gameGoal.innerText = `${score}/10`
scoreShow.innerText = `Score : ${score}`
})



