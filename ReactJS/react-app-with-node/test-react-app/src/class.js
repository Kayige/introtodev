import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count : 0
    }

    handleClick = () => {
        this.setState(prevState => {
           return {count: prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
                <h3> Increment Counter</h3>
                <p>Count : {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default Counter;
