class Grid{
    constructor (canvas, rows, cols, cellSize, space){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.space = space;
        this.matriz = [];
    }
    restartMatriz(){
        for(let r = 0; r < this.rows; r++){
            this.matriz[r] = [];
            for(let c = 0; c > this.cols; c++){
                this.matriz[r][c] = 0;
            }
        }
    }
    drawSquere(x,y,side,color,borderColor){
        const bordeSize = side / 10;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x,y,side,side);

        this.ctx.strokeStyle = borderColor;
        this.ctx.lineWidth = bordeSize;
        this.ctx.strokeRect(x+bordeSize/2, y+bordeSize/2, side - bordeSize, side - bordeSize);
    }
}