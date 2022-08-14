const input=document.querySelectorAll(".enterdata");
const output=document.querySelector("#outputtext");
const sumbmitbtn=document.querySelector("#checkarea");

function calculateproductofinputs(Base,Height){
    const prodofinputs=Base*Height;
    return prodofinputs;
}

function calculateareaoftriangle(){
    const prodofinputs=calculateproductofinputs(Number(input[0].value),Number(input[1].value));
    const areaoftriangle=(prodofinputs/2);
    output.innerText="The Area of Tringle is "+ areaoftriangle

}

sumbmitbtn.addEventListener("click",calculateareaoftriangle)