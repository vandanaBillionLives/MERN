import React from "react";
export default class StateVariable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bg: "yellow",
            colourvalue:"",
        }
    }
    handleClick = () => {
        this.setState({
            bg: this.state.colourvalue,

        })
    }
    onChange = (e) => {
        this.setState({
            bg: e.target.value,
            
        });
    }
    onChange1 = (e) => {
        this.setState({
            colourvalue: e.target.value  
        });
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: this.state.bg, height: 100, width: 100 }}>
                </div>
                <input
                    name="myname"
                    id="myid"
                    placeholder="Enter the colour"
                    onChange={this.onChange}
                />
                <br/>
                <input
                    name="myname"
                    id="myid"
                    placeholder="Enter the colour and click"
                    onChange={this.onChange1}

                />
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}
