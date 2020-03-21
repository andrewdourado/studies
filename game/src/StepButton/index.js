import React from 'react';

export default class StepButton extends React.Component {

    render() {
        const { move, step } = this.props;

        const desc = move ?
            `Go to move #${move} (col${step.col}, row${step.row})` :
            'Go to game start';

        return (
            <li>
                <button
                    style={step.isSelected ? { fontWeight: 'bold' } : null}
                    onClick={() => this.props.onClick(step, move)}>
                    {desc}
                </button>
            </li>
        );
    }
}
