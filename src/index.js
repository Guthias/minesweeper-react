import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{  
  render() {
    if(this.props.state === 0){
      return(
        <div className="square" onClick={() => this.props.onClick()}></div>
      );
    } else{
      return(
        <div className="square active">
          {this.props.value}
        </div> 
       );
    }
    
  }
}

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bombTable: this.createBoard(8, 8, 10),
      clickTable: this.emptyBoard(8, 8, 10),
    }
    
  }
  emptyBoard(lengthX, lengthY){
    const emptyTable = Array(lengthY);
    for(let i = 0; i < emptyTable.length; i++){
      emptyTable[i] = new Array(lengthX).fill(0);
    }
    return emptyTable;
  }

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
        if(boardTable[y][x] === 0){ boardTable[y][x] = null};
      }
    }
    return boardTable;
  }

  squareClick(x, y){
    const clickTable = this.state.clickTable.slice();
    clickTable[y][x] = 1
    console.log("x: ", x, "y: ", y)
    this.setState({
      clickTable: clickTable,
    });
  }
  renderSquare(i, c, y, x){
    return <Square value={i} state={c} onClick={() => this.squareClick(x, y)}/>
  }
  render() {
    
    return(
      <div className="board">
        <div className="board-row">
          {this.renderSquare(this.state.bombTable[0][0], this.state.clickTable[0][0], 0, 0)}
          {this.renderSquare(this.state.bombTable[0][1], this.state.clickTable[0][1], 0, 1)}
          {this.renderSquare(this.state.bombTable[0][2], this.state.clickTable[0][2], 0, 2)}
          {this.renderSquare(this.state.bombTable[0][3], this.state.clickTable[0][3], 0, 3)}
          {this.renderSquare(this.state.bombTable[0][4], this.state.clickTable[0][4], 0, 4)}
          {this.renderSquare(this.state.bombTable[0][5], this.state.clickTable[0][5], 0, 5)}
          {this.renderSquare(this.state.bombTable[0][6], this.state.clickTable[0][6], 0, 6)}
          {this.renderSquare(this.state.bombTable[0][7], this.state.clickTable[0][7], 0, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.state.bombTable[1][0], this.state.clickTable[1][0], 1, 0)}
          {this.renderSquare(this.state.bombTable[1][1], this.state.clickTable[1][1], 1, 1)}
          {this.renderSquare(this.state.bombTable[1][2], this.state.clickTable[1][2], 1, 2)}
          {this.renderSquare(this.state.bombTable[1][3], this.state.clickTable[1][3], 1, 3)}
          {this.renderSquare(this.state.bombTable[1][4], this.state.clickTable[1][4], 1, 4)}
          {this.renderSquare(this.state.bombTable[1][5], this.state.clickTable[1][5], 1, 5)}
          {this.renderSquare(this.state.bombTable[1][6], this.state.clickTable[1][6], 1, 6)}
          {this.renderSquare(this.state.bombTable[1][7], this.state.clickTable[1][7], 1, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.state.bombTable[2][0], this.state.clickTable[2][0], 2, 0)}
          {this.renderSquare(this.state.bombTable[2][1], this.state.clickTable[2][1], 2, 1)}
          {this.renderSquare(this.state.bombTable[2][2], this.state.clickTable[2][2], 2, 2)}
          {this.renderSquare(this.state.bombTable[2][3], this.state.clickTable[2][3], 2, 3)}
          {this.renderSquare(this.state.bombTable[2][4], this.state.clickTable[2][4], 2, 4)}
          {this.renderSquare(this.state.bombTable[2][5], this.state.clickTable[2][5], 2, 5)}
          {this.renderSquare(this.state.bombTable[2][6], this.state.clickTable[2][6], 2, 6)}
          {this.renderSquare(this.state.bombTable[2][7], this.state.clickTable[2][7], 2, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.state.bombTable[3][0], this.state.clickTable[3][0], 3, 0)}
          {this.renderSquare(this.state.bombTable[3][1], this.state.clickTable[3][1], 3, 1)}
          {this.renderSquare(this.state.bombTable[3][2], this.state.clickTable[3][2], 3, 2)}
          {this.renderSquare(this.state.bombTable[3][3], this.state.clickTable[3][3], 3, 3)}
          {this.renderSquare(this.state.bombTable[3][4], this.state.clickTable[3][4], 3, 4)}
          {this.renderSquare(this.state.bombTable[3][5], this.state.clickTable[3][5], 3, 5)}
          {this.renderSquare(this.state.bombTable[3][6], this.state.clickTable[3][6], 3, 6)}
          {this.renderSquare(this.state.bombTable[3][7], this.state.clickTable[3][7], 3, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.state.bombTable[4][0], this.state.clickTable[4][0], 4, 0)}
          {this.renderSquare(this.state.bombTable[4][1], this.state.clickTable[4][1], 4, 1)}
          {this.renderSquare(this.state.bombTable[4][2], this.state.clickTable[4][2], 4, 2)}
          {this.renderSquare(this.state.bombTable[4][3], this.state.clickTable[4][3], 4, 3)}
          {this.renderSquare(this.state.bombTable[4][4], this.state.clickTable[4][4], 4, 4)}
          {this.renderSquare(this.state.bombTable[4][5], this.state.clickTable[4][5], 4, 5)}
          {this.renderSquare(this.state.bombTable[4][6], this.state.clickTable[4][6], 4, 6)}
          {this.renderSquare(this.state.bombTable[4][7], this.state.clickTable[4][7], 4, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.state.bombTable[5][0], this.state.clickTable[5][0], 5, 0)}
          {this.renderSquare(this.state.bombTable[5][1], this.state.clickTable[5][1], 5, 1)}
          {this.renderSquare(this.state.bombTable[5][2], this.state.clickTable[5][2], 5, 2)}
          {this.renderSquare(this.state.bombTable[5][3], this.state.clickTable[5][3], 5, 3)}
          {this.renderSquare(this.state.bombTable[5][4], this.state.clickTable[5][4], 5, 4)}
          {this.renderSquare(this.state.bombTable[5][5], this.state.clickTable[5][5], 5, 5)}
          {this.renderSquare(this.state.bombTable[5][6], this.state.clickTable[5][6], 5, 6)}
          {this.renderSquare(this.state.bombTable[5][7], this.state.clickTable[5][7], 5, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.state.bombTable[6][0], this.state.clickTable[6][0], 6, 0)}
          {this.renderSquare(this.state.bombTable[6][1], this.state.clickTable[6][1], 6, 1)}
          {this.renderSquare(this.state.bombTable[6][2], this.state.clickTable[6][2], 6, 2)}
          {this.renderSquare(this.state.bombTable[6][3], this.state.clickTable[6][3], 6, 3)}
          {this.renderSquare(this.state.bombTable[6][4], this.state.clickTable[6][4], 6, 4)}
          {this.renderSquare(this.state.bombTable[6][5], this.state.clickTable[6][5], 6, 5)}
          {this.renderSquare(this.state.bombTable[6][6], this.state.clickTable[6][6], 6, 6)}
          {this.renderSquare(this.state.bombTable[6][7], this.state.clickTable[6][7], 6, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.state.bombTable[7][0], this.state.clickTable[7][0], 7, 0)}
          {this.renderSquare(this.state.bombTable[7][1], this.state.clickTable[7][1], 7, 1)}
          {this.renderSquare(this.state.bombTable[7][2], this.state.clickTable[7][2], 7, 2)}
          {this.renderSquare(this.state.bombTable[7][3], this.state.clickTable[7][3], 7, 3)}
          {this.renderSquare(this.state.bombTable[7][4], this.state.clickTable[7][4], 7, 4)}
          {this.renderSquare(this.state.bombTable[7][5], this.state.clickTable[7][5], 7, 5)}
          {this.renderSquare(this.state.bombTable[7][6], this.state.clickTable[7][6], 7, 6)}
          {this.renderSquare(this.state.bombTable[7][7], this.state.clickTable[7][7], 7, 7)}
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