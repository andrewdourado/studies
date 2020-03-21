import React from 'react';

export default class Square extends React.Component {
    getWinner() {
        const { index, winnerSquares } = this.props;
        if (winnerSquares)
            return winnerSquares.find(indexSquare => index === indexSquare);
        return null;
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
                style={this.getWinner() != null ? 
                    { background: 'rgba(0, 0, 0, .5)' } : null}
            >
                {this.props.value}
            </button>
        );
    }

}