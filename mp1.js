let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let winner = false;
let turnO = true; //playerX
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if (turnO==true){
            box.innerText="X"; 
            turnO=false;  
        }
        else{
            box.innerText="O";
            turnO=true; 
        }
        box.disabled = true;
        checkwinner();
        if (!winner){
            checkdraw();
        }
    });
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""; 
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congraulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const showdraw = () => {
    msg.innerText = "Sorry this is a draw";
    msgcontainer.classList.remove("hide");
}
const checkwinner = () =>{
    for (let pattern of winpatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                winner = true;
                showwinner(pos1val);
            }
        }
    }
};
const checkdraw = () => {
    let draw = true;
    for (let box of boxes){
        if(box.disabled != true){
            draw = false;
        }
    }
    if(draw==true && winner!=true){
        showdraw();
    }
};

const resetGame = () =>{
    turnO = true ;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);