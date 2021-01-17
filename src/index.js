import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
  render() {
    return(
     <div className="square">
       {this.props.value}
     </div> 
    );
  }
}

class Board extends React.Component{
  createBoard(lengthX, lengthY, numBomb){
    const boardTable = Array(lengthY);
    for(let i = 0; i < boardTable.length; i++){
      boardTable[i] = new Array(lengthX).fill(0);
    }   

    let bombX;
    let bombY;

    for(let b = 0; b < numBomb; b++){
      bombX = Math.floor(Math.random()*lengthX);
      bombY = Math.floor(Math.random()*lengthY);
      
      if(!isNaN(boardTable[bombY][bombX])){
        boardTable[bombY][bombX] = "💣";
        //Top
        if(bombY !== 0 && !isNaN(boardTable[bombY - 1][bombX])){
          boardTable[bombY - 1][bombX] += 1;
        }
        //Left Top
        if(bombY !== 0 && bombX !== 0 && !isNaN(boardTable[bombY - 1][bombX - 1])){
          boardTable[bombY - 1][bombX - 1] +=1;
        }
        //Right Top
        if(bombY !== 0 && bombX < lengthX - 1 && !isNaN(boardTable[bombY - 1][bombX + 1])){
          boardTable[bombY - 1][bombX + 1] +=1;
        }
        //Left
        if(bombX !== 0 && !isNaN(boardTable[bombY][bombX - 1])){
          boardTable[bombY][bombX - 1] += 1;
        }
        //Right
        if(bombX < lengthX - 1 && !isNaN(boardTable[bombY][bombX + 1])){
          boardTable[bombY][bombX + 1] +=1;
        }
        //Bottom Left
        if(bombY < lengthY - 1 && bombX !== 0 && !isNaN(boardTable[bombY + 1][bombX - 1])){
          boardTable[bombY + 1][bombX - 1] +=1;
        }
        //Bottom
        if(bombY < lengthY - 1 && !isNaN(boardTable[bombY + 1][bombX])){
          boardTable[bombY + 1][bombX] +=1;
        }
        //Bottom Right
        if(bombY < lengthY - 1 && bombX < lengthX - 1 && !isNaN(boardTable[bombY + 1][bombX + 1])){
          boardTable[bombY + 1][bombX + 1] +=1;
        }
  
      }else{
        b--
      }
    }

    for(let y = 0; y < lengthY; y++){
      for(let x = 0; x < lengthX; x++){
        boardTable[y][x] == 0 ? boardTable[y][x] = null: boardTable[y][x] = boardTable[y][x];
      }
    }


    return boardTable;
  }

  renderSquare(i){
    return <Square value={i}/>
  }
  render() {
    const boardTable = this.createBoard(8, 8, 10);

    return(
      <div className="board">
        <div className="board-row">
          {this.renderSquare(boardTable[0][0])}
          {this.renderSquare(boardTable[0][1])}
          {this.renderSquare(boardTable[0][2])}
          {this.renderSquare(boardTable[0][3])}
          {this.renderSquare(boardTable[0][4])}
          {this.renderSquare(boardTable[0][5])}
          {this.renderSquare(boardTable[0][6])}
          {this.renderSquare(boardTable[0][7])}
        </div>

        <div className="board-row">
          {this.renderSquare(boardTable[1][0])}
          {this.renderSquare(boardTable[1][1])}
          {this.renderSquare(boardTable[1][2])}
          {this.renderSquare(boardTable[1][3])}
          {this.renderSquare(boardTable[1][4])}
          {this.renderSquare(boardTable[1][5])}
          {this.renderSquare(boardTable[1][6])}
          {this.renderSquare(boardTable[1][7])}
        </div>

        <div className="board-row">
          {this.renderSquare(boardTable[2][0])}
          {this.renderSquare(boardTable[2][1])}
          {this.renderSquare(boardTable[2][2])}
          {this.renderSquare(boardTable[2][3])}
          {this.renderSquare(boardTable[2][4])}
          {this.renderSquare(boardTable[2][5])}
          {this.renderSquare(boardTable[2][6])}
          {this.renderSquare(boardTable[2][7])}
        </div>

        <div className="board-row">
          {this.renderSquare(boardTable[3][0])}
          {this.renderSquare(boardTable[3][1])}
          {this.renderSquare(boardTable[3][2])}
          {this.renderSquare(boardTable[3][3])}
          {this.renderSquare(boardTable[3][4])}
          {this.renderSquare(boardTable[3][5])}
          {this.renderSquare(boardTable[3][6])}
          {this.renderSquare(boardTable[3][7])}
        </div>

        <div className="board-row">
          {this.renderSquare(boardTable[4][0])}
          {this.renderSquare(boardTable[4][1])}
          {this.renderSquare(boardTable[4][2])}
          {this.renderSquare(boardTable[4][3])}
          {this.renderSquare(boardTable[4][4])}
          {this.renderSquare(boardTable[4][5])}
          {this.renderSquare(boardTable[4][6])}
          {this.renderSquare(boardTable[4][7])}
        </div>

        <div className="board-row">
          {this.renderSquare(boardTable[5][0])}
          {this.renderSquare(boardTable[5][1])}
          {this.renderSquare(boardTable[5][2])}
          {this.renderSquare(boardTable[5][3])}
          {this.renderSquare(boardTable[5][4])}
          {this.renderSquare(boardTable[5][5])}
          {this.renderSquare(boardTable[5][6])}
          {this.renderSquare(boardTable[5][7])}
        </div>

        <div className="board-row">
          {this.renderSquare(boardTable[6][0])}
          {this.renderSquare(boardTable[6][1])}
          {this.renderSquare(boardTable[6][2])}
          {this.renderSquare(boardTable[6][3])}
          {this.renderSquare(boardTable[6][4])}
          {this.renderSquare(boardTable[6][5])}
          {this.renderSquare(boardTable[6][6])}
          {this.renderSquare(boardTable[6][7])}
        </div>

        <div className="board-row">
          {this.renderSquare(boardTable[7][0])}
          {this.renderSquare(boardTable[7][1])}
          {this.renderSquare(boardTable[7][2])}
          {this.renderSquare(boardTable[7][3])}
          {this.renderSquare(boardTable[7][4])}
          {this.renderSquare(boardTable[7][5])}
          {this.renderSquare(boardTable[7][6])}
          {this.renderSquare(boardTable[7][7])}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-status-area">
          <div className="game-status">
            Bombs: 00
          </div>
          <div className="game-status">
            Time: 000
          </div>
        </div>
        <Board/>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);