class Cell {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 60;
        this.height = 25;
    }
    draw(){
        
            ctx.fillStyle = this.color;
            ctx.beginPath();                   
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(this.x + this.width, this.y);
            ctx.lineTo(this.x + this.width, this.y + this.height);
            ctx.lineTo(this.x, this.y + this.height);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();

        
    }
}