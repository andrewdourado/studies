import React from 'react';
import Row from '../Row';

export default class Board extends React.Component {
    renderRow(indexSquares, row) {
        return <Row
            squares={this.props.squares}
            onClick={(i, col) => this.props.onClick(i, row, col)}
            indexSquares={indexSquares}
        />;
    }

    render() {
        return (
            <>
                {this.renderRow([0, 1, 2], 1)}
                {this.renderRow([3, 4, 5], 2)}
                {this.renderRow([6, 7, 8], 3)}
            </>
        );
    }
}
