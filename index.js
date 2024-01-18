

function getRandomNumberWithin(range) {
   return Math.floor(Math.random() * range).toString() + "px";
}



// Change the CSS variable value every 2 seconds
let nobtn = document.getElementById("nobtn")
nobtn.addEventListener("click", () => {
    nobtn.style.position = 'absolute';
    nobtn.style.top = getRandomNumberWithin(450);
    nobtn.style.left = getRandomNumberWithin(400);
})

let yesBtn = document.getElementById("yesbtn")
yesBtn.addEventListener("click", () => {
    const elements = document.getElementsByClassName("two")
    if(elements.length){ 
        elements[0].style.display = 'flex';
        const firstPageElem = document.getElementsByClassName("one")
        if( firstPageElem.length) firstPageElem[0].style.display = 'none';
    }
})