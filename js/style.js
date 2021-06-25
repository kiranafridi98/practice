//h2.addEventListener("click",function(){
  // h2.style.background="orange";
//});

document.getElementById("hd").onclick=bgchange;
function bgchange(){
    document.getElementById("hd").style.background="green";
}


/*var button = document.querySelector("#button");
var isPurple= false;
button.addEventListener("click",function(){
    if(isPurple){
        document.body.style.background="white";
        //isPurple= false;
    } else{
        document.body.style.background="purple";
        //isPurple= true;
    }
    isPurple=!isPurple;
    
});*/
button.addEventListener("click",function(){
        document.body.classList.toggle("purple");
});


///////////////////////////////////////////////////////////////

function hello(){
    document.write("Hello every one ");
}
//hello();
/////////////////////
var lis= document.querySelectorAll("li");
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener("mouseover", function(){
        this.style.color="green";
    });

    lis[i].addEventListener("mouseout", function(){
        this.style.color="black";
    }); 
}
