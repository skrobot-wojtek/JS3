const squere = document.querySelector("div");
let grow = true;
let size = 100;
squere.style.width = size + "px";
squere.style.height = size + "px";

window.addEventListener("scroll", function () {
    if (grow==true) {
        size += 10;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }else {
        size-=5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }
    if (size>=window.innerWidth*.5){
        grow=false;
    }else if(size==0){
        grow=true;
    }
})