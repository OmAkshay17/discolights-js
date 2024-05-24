let boxes=document.querySelector(".container").children;
let boxes2=document.querySelector(".container2").children;
 
setInterval(()=>{
Array.from(boxes).forEach(e=>{
e.style.backgroundColor=getrandomcolor();
e.style.color=getrandomcolor();
    
 })
 },100)

 setInterval(()=>{
   Array.from(boxes2).forEach(e=>{
   e.style.backgroundColor=getrandomcolor();
   e.style.color=getrandomcolor();
       
    })
    },100)

 function getrandomcolor()
 {
    let val1=0+Math.random()*255
    let val2=0+Math.random()*255
    let val3=0+Math.random()*255

    return `rgb(${val1},${val2},${val3})`;
 }


