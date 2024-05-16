

//simon game makeing
let h2= document.querySelector("h2");
let btns=["yel","red","gr","pu"];
let gamesq=[];
let usersq=[];
let started = false;
let level = 0;

// document.addEventListener("click",function(){
//     //game started
   if (started==false) {
    console.log("tada");
    started = true;
    levelup();
   }
});


// //btn flash
// function gameflash(btn){
//     //flashclass add hogaya
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}


// //crimsom
// function userflash(btn){
//     //flashclass add hogaya
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
   
// //button flash & lewvel up
function levelup() {
    usersq = [];
level++;

h2.innerText = `Level ${level}`;
let ranidx = Math.floor(Math.random()*3);
let randcol = btns[ranidx];
let randbtn = document.querySelector(`.${randcol}`);
//console.log(randcol);
//random
gamesq.push(randcol);
console.log(gamesq);
gameflash(randbtn);
}  

// //ans ko check karke verify karne ke liye
function checkans(idx) {
    //console.log("curr level",level);
if(usersq[idx]== gamesq[idx])
{
   if (usersq.length == gamesq.length) {
  
setTimeout(levelup,1000 );
   } 
}
else{
    h2.innerText = `You score ${level}! Game Is Over Press ANy Key To Start `;
reset();
}
}

// //btn ko press karke record 
function btnpress() {
    //detect which btn is pressed      
   let btn =this;
userflash(btn);
//id attribute value yani ki collor'
usercol = btn.getAttribute("id");
usersq.push(usercol);
checkans(usersq.length-1);
}



let allbtns = document.querySelectorAll(".btn");
// //clicked btn
for (btn of allbtns) {
    btn.addEventListener("click",btnpress);
}
function reset() {
     gamesq=[];
     usersq=[];
     started = false; 
    level =0;

}
