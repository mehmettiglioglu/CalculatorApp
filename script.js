let inputDOM=document.querySelector(".input");
let numberButtons=document.querySelectorAll(".btn")
let operatorDOM=document.querySelectorAll(".operator");
let equalDOM=document.querySelector(".equal")
let clearDOM=document.querySelector("#clearButton");



document.body.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        calculate();
    }
    else{
        inputDOM.value+=e.key;
    }    
})

for(i of numberButtons)
{
    i.addEventListener("click",(e)=>{
        if(inputDOM.value==0)
        {
            inputDOM.value="";
        }
        inputDOM.value +=e.target.value;
    })
}

for(i of operatorDOM)
{
    i.addEventListener("click",(e)=>{
        inputDOM.value += e.target.value;       
    })
}

equalDOM.addEventListener("click",()=>{
   inputDOM.value = eval(inputDOM.value)

})

clearDOM.addEventListener("click",()=>{
    inputDOM.value= " "  
})

function calculate(){
    inputDOM.value=eval(inputDOM.value)
}