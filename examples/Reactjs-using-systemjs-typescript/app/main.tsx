import React from 'react';
import ReactDOM from 'react-dom'

setTimeout(() => {
    console.log(React, ReactDOM);
}, 1500);


export default class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }


    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    };

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}


ReactDOM.render(
    <Counter />,
    document.getElementById('app')
)
