
const input = document.getElementById("nameinput");
const output = document.getElementById("welcomeId");

function welcome()
{
    output.textContent = input.value.toUpperCase();
    
    output.style.color = "blue";
    
}


const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const allboxes = document.getElementById("allboxes");

let clickedBoxes ={
    box1: false,
    box2: false,
    box3: false,
    box4: false

}
box1.addEventListener("click", function() {
    box1.style.backgroundColor = "red";
    clickedBoxes.box1 = true;
});
box2.addEventListener("click", function() {
    box2.style.backgroundColor = "green";
    clickedBoxes.box2 = true;
});
box3.addEventListener("click", function() {
    box3.style.backgroundColor = "blue";
    clickedBoxes.box3 = true;
});     
box4.addEventListener("click", function() {
    box4.style.backgroundColor = "yellow";
    clickedBoxes.box4 = true;
});

allboxes.addEventListener("click", () => {
    const allClicked =
        clickedBoxes.box1 &&
        clickedBoxes.box2 &&
        clickedBoxes.box3 &&
        clickedBoxes.box4;

    if (allClicked) {
       allboxes.style.backgroundColor = "black";
    }
});