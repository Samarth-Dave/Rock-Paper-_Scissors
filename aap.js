let userscore=0;
let compScore=0;
const msG= document.querySelector("#mes");
const UserScoreTag=document.querySelector("#User-score"); 
const compScoreTag=document.querySelector("#comp-score"); 

const options= document.querySelectorAll(".select");

const compOption=()=>{
    const Option=["rock","paper","scissor"];
    const x =Math.floor(Math.random()*3);
    return Option[x];    
}

const playGame=(selectedOption)=>{
    
    console.log("User Choice ",selectedOption );
    
    const computerChoice=compOption();
    console.log("Computer Choice ",computerChoice );
    
    if(computerChoice==selectedOption){
        console.log("it Was A Draw")
        msG.innerText="Draw";
    }
    else{
        let UserWin=true;
        if(selectedOption==="rock"){
            if(computerChoice==="paper"){
                UserWin=false;
            }
            
        }
        else if(selectedOption==="paper"){
            if(computerChoice==="scissor"){
                UserWin=false;
            }
            
        }else {
            if(computerChoice==="rock"){
                UserWin=false;
            }
        }
        //shoing the winner
        if(UserWin){
            console.log("User Won");
            msG.innerText="User WON";
            userscore++;
            UserScoreTag.innerText=userscore;
    
        }
        else{
            console.log("comptuer won");
            msG.innerText="Computer WON";
            compScore++;
            compScoreTag.innerText=compScore;
        }
    } 
    


}

options.forEach((select)=>{

    
    select.addEventListener("click",()=>{
        const selectedOption= select.getAttribute("id")
        console.log("Choice was cliked" ,selectedOption);

        playGame(selectedOption)
    });
})