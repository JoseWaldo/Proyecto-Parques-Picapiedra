let canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = '#f7e5e1';
    ctx.fillRect(0, 0, 700, 700);
    ctx.strokeStle="black";


const cellSize = 100; //tamaño de las casillas
const gameGrid = []; //casillas del tablero



//bucle para crearcasillas
function createGrid(){
    for (let y = cellSize; y < canvas.height; y += cellSize){
        for (let x = 0; x < canvas.width; x += cellSize){
            gameGrid.push(new Cell(x, y));
        }
    }
}
createGrid();                           //dibujamos las casillas
function handleGameGrid(){
    for (let i = 0; i < gameGrid.length; i++){
        gameGrid[i].draw();
    }
}

console.log(gameGrid);