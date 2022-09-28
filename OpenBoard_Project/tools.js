let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencil = document.querySelector(".fa-pencil");
let eraser = document.querySelector(".fa-eraser");
let pencilFlag = false;
let eraserFlag = false;
// true= means tool present & vice-varse
optionsCont.addEventListener('click' , (e) => {
    optionsFlag = !optionsFlag;
    if(optionsFlag) openTools();
    else closeTools();
})
function openTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display = "flex";

}
function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display = "none";
     pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none"; 


}
pencil.addEventListener("click" , (e) => {
    //true = show penciltools & vice-versa
    pencilFlag = !pencilFlag;
    if (pencilFlag) pencilToolCont.style.display = "block";   //by default block
    else pencilToolCont.style.display = "none"
})

eraser.addEventListener("click" , (e) => {
    //true = show erasertools & vice-versa
    eraserFlag = !eraserFlag;
    if (eraserFlag) eraserToolCont.style.display = "block";   //by default block
    else eraserToolCont.style.display = "none"
})