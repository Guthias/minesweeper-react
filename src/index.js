import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{  
  render() {
    if(this.props.state === 0){
      return(
        <div className="square" onClick={() => this.props.onClick()} onContextMenu={() => this.props.onContextMenu()}></div>
      );
    } else if(this.props.state === 2){
      return(
      <div className="square flag" onClick={() => this.props.onClick()} onContextMenu={() => this.props.onContextMenu()}>🚩</div>);
    }else{
      return(
        <div className="square active" onClick={() => this.props.onClick()} onContextMenu={() => this.props.onContextMenu()}>
          {this.props.value}
        </div> 
       );
    }
    
  }
}

class Board extends React.Component{
  renderSquare(i, c, y, x){
    return <Square value={i} state={c} onClick={() => this.props.onClick(0, x, y)} 
    onContextMenu={() => this.props.onClick(1, x, y)}/>
  }
  render() {
    return(
      <div className="board">
        <div className="board-row">
          {this.renderSquare(this.props.bombTable[0][0], this.props.clickTable[0][0], 0, 0)}
          {this.renderSquare(this.props.bombTable[0][1], this.props.clickTable[0][1], 0, 1)}
          {this.renderSquare(this.props.bombTable[0][2], this.props.clickTable[0][2], 0, 2)}
          {this.renderSquare(this.props.bombTable[0][3], this.props.clickTable[0][3], 0, 3)}
          {this.renderSquare(this.props.bombTable[0][4], this.props.clickTable[0][4], 0, 4)}
          {this.renderSquare(this.props.bombTable[0][5], this.props.clickTable[0][5], 0, 5)}
          {this.renderSquare(this.props.bombTable[0][6], this.props.clickTable[0][6], 0, 6)}
          {this.renderSquare(this.props.bombTable[0][7], this.props.clickTable[0][7], 0, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.props.bombTable[1][0], this.props.clickTable[1][0], 1, 0)}
          {this.renderSquare(this.props.bombTable[1][1], this.props.clickTable[1][1], 1, 1)}
          {this.renderSquare(this.props.bombTable[1][2], this.props.clickTable[1][2], 1, 2)}
          {this.renderSquare(this.props.bombTable[1][3], this.props.clickTable[1][3], 1, 3)}
          {this.renderSquare(this.props.bombTable[1][4], this.props.clickTable[1][4], 1, 4)}
          {this.renderSquare(this.props.bombTable[1][5], this.props.clickTable[1][5], 1, 5)}
          {this.renderSquare(this.props.bombTable[1][6], this.props.clickTable[1][6], 1, 6)}
          {this.renderSquare(this.props.bombTable[1][7], this.props.clickTable[1][7], 1, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.props.bombTable[2][0], this.props.clickTable[2][0], 2, 0)}
          {this.renderSquare(this.props.bombTable[2][1], this.props.clickTable[2][1], 2, 1)}
          {this.renderSquare(this.props.bombTable[2][2], this.props.clickTable[2][2], 2, 2)}
          {this.renderSquare(this.props.bombTable[2][3], this.props.clickTable[2][3], 2, 3)}
          {this.renderSquare(this.props.bombTable[2][4], this.props.clickTable[2][4], 2, 4)}
          {this.renderSquare(this.props.bombTable[2][5], this.props.clickTable[2][5], 2, 5)}
          {this.renderSquare(this.props.bombTable[2][6], this.props.clickTable[2][6], 2, 6)}
          {this.renderSquare(this.props.bombTable[2][7], this.props.clickTable[2][7], 2, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.props.bombTable[3][0], this.props.clickTable[3][0], 3, 0)}
          {this.renderSquare(this.props.bombTable[3][1], this.props.clickTable[3][1], 3, 1)}
          {this.renderSquare(this.props.bombTable[3][2], this.props.clickTable[3][2], 3, 2)}
          {this.renderSquare(this.props.bombTable[3][3], this.props.clickTable[3][3], 3, 3)}
          {this.renderSquare(this.props.bombTable[3][4], this.props.clickTable[3][4], 3, 4)}
          {this.renderSquare(this.props.bombTable[3][5], this.props.clickTable[3][5], 3, 5)}
          {this.renderSquare(this.props.bombTable[3][6], this.props.clickTable[3][6], 3, 6)}
          {this.renderSquare(this.props.bombTable[3][7], this.props.clickTable[3][7], 3, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.props.bombTable[4][0], this.props.clickTable[4][0], 4, 0)}
          {this.renderSquare(this.props.bombTable[4][1], this.props.clickTable[4][1], 4, 1)}
          {this.renderSquare(this.props.bombTable[4][2], this.props.clickTable[4][2], 4, 2)}
          {this.renderSquare(this.props.bombTable[4][3], this.props.clickTable[4][3], 4, 3)}
          {this.renderSquare(this.props.bombTable[4][4], this.props.clickTable[4][4], 4, 4)}
          {this.renderSquare(this.props.bombTable[4][5], this.props.clickTable[4][5], 4, 5)}
          {this.renderSquare(this.props.bombTable[4][6], this.props.clickTable[4][6], 4, 6)}
          {this.renderSquare(this.props.bombTable[4][7], this.props.clickTable[4][7], 4, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.props.bombTable[5][0], this.props.clickTable[5][0], 5, 0)}
          {this.renderSquare(this.props.bombTable[5][1], this.props.clickTable[5][1], 5, 1)}
          {this.renderSquare(this.props.bombTable[5][2], this.props.clickTable[5][2], 5, 2)}
          {this.renderSquare(this.props.bombTable[5][3], this.props.clickTable[5][3], 5, 3)}
          {this.renderSquare(this.props.bombTable[5][4], this.props.clickTable[5][4], 5, 4)}
          {this.renderSquare(this.props.bombTable[5][5], this.props.clickTable[5][5], 5, 5)}
          {this.renderSquare(this.props.bombTable[5][6], this.props.clickTable[5][6], 5, 6)}
          {this.renderSquare(this.props.bombTable[5][7], this.props.clickTable[5][7], 5, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.props.bombTable[6][0], this.props.clickTable[6][0], 6, 0)}
          {this.renderSquare(this.props.bombTable[6][1], this.props.clickTable[6][1], 6, 1)}
          {this.renderSquare(this.props.bombTable[6][2], this.props.clickTable[6][2], 6, 2)}
          {this.renderSquare(this.props.bombTable[6][3], this.props.clickTable[6][3], 6, 3)}
          {this.renderSquare(this.props.bombTable[6][4], this.props.clickTable[6][4], 6, 4)}
          {this.renderSquare(this.props.bombTable[6][5], this.props.clickTable[6][5], 6, 5)}
          {this.renderSquare(this.props.bombTable[6][6], this.props.clickTable[6][6], 6, 6)}
          {this.renderSquare(this.props.bombTable[6][7], this.props.clickTable[6][7], 6, 7)}
        </div>

        <div className="board-row">
          {this.renderSquare(this.props.bombTable[7][0], this.props.clickTable[7][0], 7, 0)}
          {this.renderSquare(this.props.bombTable[7][1], this.props.clickTable[7][1], 7, 1)}
          {this.renderSquare(this.props.bombTable[7][2], this.props.clickTable[7][2], 7, 2)}
          {this.renderSquare(this.props.bombTable[7][3], this.props.clickTable[7][3], 7, 3)}
          {this.renderSquare(this.props.bombTable[7][4], this.props.clickTable[7][4], 7, 4)}
          {this.renderSquare(this.props.bombTable[7][5], this.props.clickTable[7][5], 7, 5)}
          {this.renderSquare(this.props.bombTable[7][6], this.props.clickTable[7][6], 7, 6)}
          {this.renderSquare(this.props.bombTable[7][7], this.props.clickTable[7][7], 7, 7)}
        </div>
      </div>
    );
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bombTable: this.createBoard(8, 8, 1),
      clickTable: this.emptyBoard(8, 8),
      countOff: true,
      remainingBombs: 10,
      timer: 0,
      lose: true,
      firstTimer: true,
    }
  }

  async gameOver(){
    const clickTable = this.state.clickTable.slice();
    this.setState({
      countOff: true,
    });
    for(let y = 0; y < clickTable.length; y++){
      for(let x = 0; x < clickTable[y].length; x++){
        if(this.state.bombTable[y][x] === "💣"){
          await sleep(100);
          clickTable[y][x] = 1;
          this.setState({
            clickTable: clickTable,
          });      
        }
      }
        
    }
    setTimeout(() =>{
      this.setState({
        lose: true,
      });
    }, 2500)
    
  }
  newGame(){
    this.setState({
      bombTable: this.createBoard(8, 8, 1),
      clickTable: this.emptyBoard(8, 8),
      timer: 0,
      lose: false,
      countOff: false,
    })
  }

  disableSecondTimer(){
    this.setState({
      firstTimer: false,
    });
  }
  countTime(){    
    setInterval(() => {
      let timer = this.state.timer
      if(!this.state.countOff){
        timer += 1;
        this.setState({
          timer: timer,
          countOff: false,
        });
      }
    }, 1000)
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
  
  revealEmpty(x, y){
    let clickTable = this.state.clickTable.slice();

    clickTable[y][x] = 1;
    //Left Top
    if(this.state.bombTable[y - 1][x -1] !== "💣" && x > 0 && y > 0){
      clickTable[y - 1][x - 1] = 1;
    }
    //Top
    if(this.state.bombTable[y - 1][x] !== "💣" && y > 0){
      clickTable[y - 1][x] = 1;
    }
    //Right Top
    if(this.state.bombTable[y - 1][x + 1] !== "💣" && x < clickTable[y].length - 1 && y > 0){
      clickTable[y - 1][x + 1] = 1;
    }
    //Right
    if(this.state.bombTable[y][x - 1] !== "💣" && x < clickTable[y].length - 1){
      clickTable[y][x + 1] = 1;
    }
    //Bottom Right
    if(this.state.bombTable[y + 1][x + 1] !== "💣"  && x < clickTable[y].length - 1 && y < clickTable.length - 1){
      clickTable[y + 1][x + 1] = 1;
    }
    //Bottom
    if(this.state.bombTable[y + 1][x] !== "💣"  && y < clickTable.length - 1){
      clickTable[y + 1][x] = 1;
    }
    //Bottom Left
    if(this.state.bombTable[y + 1][x -1] !== "💣" && x > 0 && y < clickTable.length - 1){
      clickTable[y + 1][x - 1] = 1;
    }
    //Left
    if(this.state.bombTable[y - 1][x -1] !== "💣" && x > 0){
      clickTable[y][x - 1] = 1;
    }

    this.setState({
      clickTable: clickTable.length,
    })
  }

  squareClick(click, x, y){
    const clickTable = this.state.clickTable.slice();
    let remainingBombs = this.state.remainingBombs;

    if(this.state.countOff){
      return
    }

    if(click === 0 && this.state.bombTable[y][x] === null){
      this.revealEmpty(x, y);
    } else if(click === 0 && clickTable[y][x] === 0 && this.state.bombTable[y][x] !== ("💣" || null)){
      clickTable[y][x] = 1;
    } else if(click === 0 && this.state.bombTable[y][x] === "💣"){
      clickTable[y][x] = 1;
      this.gameOver();
    } else if(click === 1 && clickTable[y][x] === 0){
      clickTable[y][x] = 2;
      remainingBombs -= 1;
    } else if(click === 1 && clickTable[y][x] === 2){
      clickTable[y][x] = 0;
      remainingBombs += 1;
    }
    this.setState({
      clickTable: clickTable,
      remainingBombs: remainingBombs,
    });
  }

  componentDidMount(){
    if(this.state.firstTimer){
      this.countTime();
      this.disableSecondTimer();     
    }
  }
  render() {
    if(this.state.lose){
      return(
        <div className="game">
          <div className="game-status-area">
            <div className="game-status">
              Bombs: {this.state.remainingBombs}
            </div>
            <div className="game-status">
              Time: {this.state.timer}
            </div>
          </div>
          <div className="board-area">
            <Board
              bombTable={this.state.bombTable}
              clickTable={this.state.clickTable}
              onClick={(click, x, y) => this.squareClick(click, x, y)}
            />

            <div className="lose-area">
              <div className="lose-game-title">
                GAME<br></br>OVER
              </div>
              <button className="lose-game-button"  onClick={() => this.newGame()}>
                New Game
              </button>
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <div className="game">
          <div className="game-status-area">
            <div className="game-status">
              Bombs: {this.state.remainingBombs}
            </div>
            <div className="game-status">
              Time: {this.state.timer}
            </div>
          </div>
          <Board
            bombTable={this.state.bombTable}
            clickTable={this.state.clickTable}
            onClick={(click, x, y) => this.squareClick(click, x, y)}
          />
        </div>
      ); 
    }
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);