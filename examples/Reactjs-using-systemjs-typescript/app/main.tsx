import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button-Hook';

console.log(React, useState, Component);

export default class Counter extends React.Component<any, any> {
    public state: any;

    constructor(props: any) {
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
<Button/>
            </div>
        );
    }
}


ReactDOM.render(
    <Counter />,
    document.getElementById('app')
)
