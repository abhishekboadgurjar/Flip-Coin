let heads=0;
let tails=0;
let coin=document.querySelector(".coin");
let flipBtn=document.querySelector("#flip-button");
let resetBtn=document.querySelector("#reset-button");
let flipSound = document.querySelector("#flip-sound");

flipBtn.addEventListener("click", ()=>{
    flipSound.currentTime = 0; 
    flipSound.play();

    let i=Math.floor(Math.random()*2);
    coin.style.animation="none";

if(i){
    setTimeout(function(){
        coin.style.animation="spin-heads 3s forwards";
    },100)
    heads++;
}
else{
setTimeout(function(){
    coin.style.animation="spin-tails 3s forwards";
},100);
tails++;
}
setTimeout(updateStatus,3000);
disableButton();
});
function updateStatus(){
    document.querySelector("#heads-count").textContent=`Heads: ${heads}`;
    document.querySelector("#tails-count").textContent=`Tails: ${tails}`;
}
function disableButton(){
    flipBtn.disabled=true;
    setTimeout(function(){
        flipBtn.disabled=false;
    },3000);
}
resetBtn.addEventListener("click",()=>{
    coin.style.aniamtion="none";
    heads=0;
    tails=0;
    updateStatus();
})
