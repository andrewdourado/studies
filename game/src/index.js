import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import calculateWinner from './util/calculateWinner.js';

import Info from './Info';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                row: 0,
                col: 0,
                isSelected: true
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    // Verifica se todos os squares estão preenchidos.
    _checkSquares(squares) {
        const ret = squares.find(square => square == null);
        if(ret === null) return false;
        else return true;
    }

    handleClick(i, row = 0, col = 0) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        
        const { lines } = calculateWinner(squares);
        if (lines || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        
        // altera o ultimo item do history
        const aux = history.pop();
        aux.isSelected = false;
        history.push(aux);

        this.setState({
            history: history.concat([{
                squares,
                row,
                col,
                isSelected: true
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step, move) {
        const { history } = this.state;
        history.forEach(item => {
            item.isSelected = false
        });
        step.isSelected = true;

        this.setState({
            stepNumber: move,
            xIsNext: (move % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const {square: winner} = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else if(this._checkSquares(current.squares)){
            status = 'Break even';
        } else {
            status = 'Next player? ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i, row, col) => this.handleClick(i, row, col)}
                    />
                </div>
                <div className="game-info">
                    <Info
                        history={history}
                        stepNumber={this.state.stepNumber}
                        status={status}
                        onClick={(step, move) => this.jumpTo(step, move)}
                    />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

