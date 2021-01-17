import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
  render() {
    return(
     <div className="square"></div> 
    );
  }
}

class Board extends React.Component{
  render() {
    return(
      <div className="board">
        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>

        <div className="board-row">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
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