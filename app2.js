let addtodobtn= document.getElementById("addabtn");
// var para= document.getElementById("para");
let todocontainer= document.getElementById("middl");
let inputfield= document.getElementById("addanote");

addtodobtn.addEventListener("click",function() {
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value= "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration= "line-through";
    })   
    
    paragraph.addEventListener("dblclick", function(){
        todocontainer.removeChild(paragraph);
    }) 

})

function clearall()
{
    // paragraph.value = "";
    
    inputfield.value ="";
}
