const sides=document.querySelectorAll(".angel-side")
const calculatebtn=document.querySelector("#calculateHype")
const outputBox=document.querySelector("#output")

function calculatesumofsquare(A,B){
    const sumofsquares=A*A + B*B;
    return sumofsquares;
}

function calculatehypotenuse(){
    const sumofsquares=calculatesumofsquare(Number(sides[0].value),Number(sides[1].value))
    const lengthofhypotenuse=Math.sqrt(sumofsquares);
    outputBox.innerText="The length of Hypotenuse is "+ lengthofhypotenuse;
}

calculatebtn.addEventListener("click",calculatehypotenuse)