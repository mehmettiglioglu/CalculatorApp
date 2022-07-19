let inputDOM=document.querySelector(".input");
let dotDOM=document.querySelector("#dot")
let btnDOM=document.querySelectorAll(".btn");
let equalButtonDOM=document.querySelector(".equal")
let plusButtonDOM=document.querySelector("#additionButton")
let results;

for(i of btnDOM){
    i.addEventListener("click",(e)=>
    inputDOM.value+=e.target.textContent
    )
}

dotDOM.addEventListener("click",()=>{
    console.log(inputDOM.value)
    inputDOM.value=inputDOM.value + dotDOM.innerText;

})

plusButtonDOM.addEventListener("click",(e)=>{
    inputDOM.value+=e.target.textContent;
    results=parseInt(e.target.value)
    console.log(results)
})

equalButtonDOM.addEventListener("click",()=>{
   
})


