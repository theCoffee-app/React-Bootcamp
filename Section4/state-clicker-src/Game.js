import React, {Component} from 'react';

class StateGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            isWinner: false
        }
    }
    render() {
        return(
            <div>
                <h1>Your Score is: {this.props.score}</h1>
            </div>
        )
    }
}

export default StateGame; 