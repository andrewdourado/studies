import React from 'react';
import Square from '../Square';

import calculateWinner from '../util/calculateWinner.js';

export default class Row extends React.Component {
    get winnerSquares() {
        // retorna os squares vencedores
        return calculateWinner(this.props.squares).lines;
    }

    renderSquare(index, col) {

        return <Square
            index={index}
            winnerSquares={this.winnerSquares}
            value={this.props.squares[index]}
            onClick={() => this.props.onClick(index, col)}
        />;
    }

    render() {

        return (
            <div className="board-row">
                {this.renderSquare(this.props.indexSquares[0], 1)}
                {this.renderSquare(this.props.indexSquares[1], 2)}
                {this.renderSquare(this.props.indexSquares[2], 3)}
            </div>
        );
    }
}