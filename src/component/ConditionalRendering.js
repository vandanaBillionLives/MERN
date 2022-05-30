import React from "react";
import Lifecycle from "./lifecycle";

export default class ConditionalRendering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            startDate: null
        }
    }

    handleclick = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                {this.state.show === true &&
                    <Lifecycle setStartDate={new Date()} />
                }

                <button
                    onClick={this.handleclick} >
                    {this.state.show === false ?'click me' : 'Hide'}
          </button>
            </div>
        )
    }
}
