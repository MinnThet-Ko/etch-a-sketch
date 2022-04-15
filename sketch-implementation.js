
function reset(){
    gridItems = Array.from(document.getElementsByClassName("grid-item"));
    gridItems.forEach(element => {
        element.style.backgroundColor = "yellow";
    });
    document.getElementById("grid-container").innerHTML = "";
    createGrids(parseInt(prompt("Enter number of rows:")),
    parseInt(prompt("Enter number of columns:")));
}


function createGrids(column = 16, row = 16) {
    //get the grid-container
    let gridContainer = document.getElementById("grid-container");


    //add grid-item in 16x16 format
    for (let i = 0; i < column; i++) {
        //create a grid-row-container
        let gridRowContainer = document.createElement("div");
        gridRowContainer.classList.add("grid-row-container");
        for (let j = 0; j < row; j++) {
            console.log(j);
            //create a grid-item
            let gridItem = document.createElement("div");
            gridItem.style.backgroundColor = "yellow";
            gridItem.style.height = "50px";
            gridItem.style.width = "50px";
            gridItem.style.flexGrow = "auto";
            gridItem.classList.add("grid-item");
            gridItem.addEventListener("mouseleave", function(){
                gridItem.style.backgroundColor = "red";
            });
            gridRowContainer.appendChild(gridItem);
        }
        gridContainer.appendChild(gridRowContainer);
    }
}

//create grid on loading the window
window.onload = createGrids();

//add event to button