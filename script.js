var box=document.querySelector("input");
var btn=document.querySelector("button");
var list=document.querySelector("ul");
var msg=document.querySelector("h1");
var err=document.querySelector("h2");

btn.addEventListener("click",function(){
    if (box.value>=18) {
        err.innerHTML=""
        msg.innerHTML="Apone vot dite parben"
        
    }else{
        msg.innerHTML=""
         err.innerHTML="Apone vot dite parben na"
    }
    })

