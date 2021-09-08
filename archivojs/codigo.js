class Board{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.gameOver=false;
        this.bars=[];
        this.ball= null;
          
        };

        board(elements){
            self.Board.prototype={
                get elements(){
                    var elements = this.bars;
                    elements.push(this.ball);
                    return elements;
                }
    
            }
        }

  
};

//Clase vista 

class BoardView{

    constructor(canvas,board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");

    }

}


//Fuccion menu

self.addEventListener("load",main);

function main(){
    var tablero = new Board(800,400);
    var canvas = document.getElementById('canvas');
    var vista = new BoardView(canvas,tablero);
}