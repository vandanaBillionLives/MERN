import React from "react";


export default class Lifecycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Color1: "red",
            Color2: "green",
            Color3: "blue",
            colorValue: "",
            isActive: true,
            endDate: null
        }
    }

    componentDidMount() {
        console.log("from component did Mount");
    }

    componentDidUpdate() {
        console.log("from component did update");
    }

    handleInput = (e) => {
        this.setState({
            colorValue: e.target.value,
            isActive: !this.state.isActive
        });
    }

    clickDivOne = () => {
        this.setState({
            Color1: (this.state.colorValue !== "" ? this.state.colorValue : this.state.Color1)
        });
    }

    clickDivTwo = () => {
        this.setState({
            Color2: (this.state.colorValue !== "" ? this.state.colorValue : this.state.Color2)
        });
    }

    clickDivThree = () => {
        this.setState({
            Color3: (this.state.colorValue !== "" ? this.state.colorValue : this.state.Color3)
        });
    }
    render() {
        return (
            <div>
                <div>
                    <label>Enter Color</label> <input type="text" onChange={this.handleInput} /><br /><br />
                </div>
                <div style={{ display: "flex" }}>
                    <div onClick={this.clickDivOne} style={{ backgroundColor: this.state.Color1, width: 100, height: 75, margin: 5 }}></div>
                    <br />
                    <div onClick={this.clickDivTwo} style={{ backgroundColor: this.state.Color2, width: 100, height: 75, margin: 5 }}></div>
                    <br />
                    <div onClick={this.clickDivThree} style={{ backgroundColor: this.state.Color3, width: 100, height: 75, margin: 5 }}></div>
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        var endaDate = new Date();
        var diff = (endaDate - this.props.setStartDate) / 1000;
        console.log("from component will unmount, Duration=" + diff);
    }
}
