let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;


const cellSize = 25;
const cellGap = 3;
const gameGrid = [];








//bucles para crearcasillas
function createGrid(){ //casillas blancas al lado de azul
    for (let y = 425; y < 600; y += cellSize){
            gameGrid.push(new Cell(340, y, "white"));
        
    }
}
function createGrid1(){ //casillas blancas al lado de azul
    for (let y = 400; y < 600; y += cellSize){
            gameGrid.push(new Cell(280, y, "green"));
        
    }
}

console.log(gameGrid);



function createGrid8(){ //casillas blancas al lado de azul
    for (let y = 1; y < 160; y += cellSize){
            gameGrid.push(new Cell(340, y, "white"));
        
    }
}


function createGrid9(){ //casillas blancas al lado de azul
    for (let y = 1; y < 195; y += cellSize){
            gameGrid.push(new Cell(280, y, "red"));
        
    }
}
function createGrid10(){ //casillas blancas al lado de azul
    for (let y = 1; y < 160; y += cellSize){
            gameGrid.push(new Cell(220, y, "white"));
        
    }
}


function createGrid16(){ //casillas blancas al lado de azul
    for (let y = 425; y < 600; y += cellSize){
            gameGrid.push(new Cell(220, y, "white"));
        
    }
}

createGrid();
createGrid1();
createGrid8();
createGrid9();
createGrid10();
createGrid16();
  //dibujamos las casillas
function handleGameGrid(){
    for (let i = 0; i < gameGrid.length; i++){
        gameGrid[i].draw();
    }
}
handleGameGrid();


