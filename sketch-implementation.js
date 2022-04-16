//create global variable for hover function
let callCount = 0;

//function for creating random color
function createRandomColor(){

    let hue = 0;
    let saturation = lightness = 100;
    //assign random color
    if(callCount == 1){
        hue = Math.floor(Math.random()*360);
    }

    //decrease saturation and lightness
    for(let i = 0; i < callCount; i++){
        saturation = lightness -= 10; 
    }
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

//fuction for creating a new grid
function reset(){
    callCount = 0;
    gridItems = Array.from(document.getElementsByClassName("grid-item"));
    gridItems.forEach(element => {
        element.style.backgroundColor = "yellow";
    });
    document.getElementById("grid-container").innerHTML = "";
    createGrids(parseInt(prompt("Enter squares per row:")));
}


function createGrids(squarePerRow = 16) {
    //get the grid-container
    let gridContainer = document.getElementById("grid-container");
    let gridSize = 960/squarePerRow;
    console.log(gridSize);

    //add grid-item in 16x16 format
    for (let i = 0; i < squarePerRow; i++) {
        //create a grid-row-container
        let gridRowContainer = document.createElement("div");
        gridRowContainer.classList.add("grid-row-container");
        for (let j = 0; j < squarePerRow; j++) {
            console.log(j);
            //create a grid-item
            let gridItem = document.createElement("div");
            gridItem.style.backgroundColor = "white";
            gridItem.style.height = gridSize+"px";
            gridItem.style.width = gridSize+"px";
            gridItem.style.flexGrow = "auto";
            gridItem.classList.add("grid-item");
            gridItem.addEventListener("mouseleave", function(){
                gridItem.style.backgroundColor = createRandomColor(callCount++);
            });
            gridRowContainer.appendChild(gridItem);
        }
        gridContainer.appendChild(gridRowContainer);
    }
}

//create grid on loading the window
window.onload = createGrids();
