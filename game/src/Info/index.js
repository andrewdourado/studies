import React from 'react';
import StepButton from '../StepButton';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isAscending: false };
    }

    handleEggsChange = () => {
        this.setState({
            isAscending: !this.state.isAscending
        });
    }

    render() {
        const isAcending = this.state.isAscending;
        const history = this.props.history;

        const moves = history.map((step, move) => {
            return (
                <StepButton
                    key={move}
                    move={move}
                    step={step}
                    onClick={(step, move) => this.props.onClick(step, move)}
                />
            )
        });

        if (isAcending) {
            moves.reverse();
        }

        return (
            <>
                <div>{this.props.status}</div>
                <ol reversed={isAcending}> {moves}</ol>
                <label>
                    <Toggle
                        defaultChecked={this.state.isAscending}
                        icons={false}
                        onChange={this.handleEggsChange} />
                    <span>{this.state.isAscending ? 'Ascendente' : 'Descendente'}</span>
                </label>
            </>
        );
    }
}