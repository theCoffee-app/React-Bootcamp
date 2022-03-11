import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            num: 1
        }
        this.genRandom = this.genRandom.bind(this); //Setting the this context for handleClick
    }
    genRandom(evt) {
        let randNum = Math.floor(Math.random()*10) + 1;
        this.setState({clicked: true, num: randNum});
    }
    render() {
        return(
            <div>                                
                <h1>Your Number: {this.state.num}</h1>
                {this.state.num === 7
                    ? <h1>You Won!!</h1>
                    : <button onClick={this.genRandom}>New Number</button>
                }
            </div>            
        )
    }
}

export default Button; 