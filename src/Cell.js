import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super();
        console.log(props)
        this.state = {
            color: props.value,
        }
    }
    
    newColor = () => {
        // const newColor = "#333";
        this.setState({
            color: "#333",
        })
    }
    render() {
        return <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.newColor} > 
            </div>
    }
}

// export default Cell