import React from "react";

export default class Fetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    users: resJson.data
                })
            })
    }
    showUsers = (user, index) => {
        return (
            <div style={{ display: "flex" }} key={index}>
                <div style={{ width: 150 }}>{index + 1} {user.first_name} {user.last_name}</div>
                <div style={{ marginLeft: 5, float: "right" }}><button key={index} onClick={() => this.handleClick(index)}>X</button></div>
            </div>
        )
    }

    handleClick = (index) => {
        console.log("B" + index);
        var lstUser = this.state.users;
        lstUser.splice(index, 1);
        this.setState({ user: lstUser });
    }

    render() {
        return (
            <div>
                {this.state.users.map(this.showUsers)}
            </div>
            
        )
    }
}
