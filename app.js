 const inputs=document.querySelectorAll(".inputNumber")
 const outputbox=document.querySelector("#output")
 const checktriangle=document.querySelector("#checkbtn")

 function calculatesumofangle(Angel1,Angle2,Angle3){
    const sumofangels=Angel1+Angle2+Angle3;
    return sumofangels;
 }
 function istriangle(){
    const sumofangels=calculatesumofangle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumofangels===180){
        outputbox.innerText="Yes,you are right It's a Triangle"
    }else{
        outputbox.innerText="No you are wrong check it again"
    }
 };
 checktriangle.addEventListener("click",istriangle)