import React from "react";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Icon } from "@mui/material";
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
            //<div style={{ display: "flex" }} key={index}>
            //    <div style={{ width: 150 }}>{index + 1} {user.first_name} {user.last_name}</div>
            //    <div style={{ marginLeft: 5, float: "right" }}><button key={index} onClick={() => this.handleClick(index)}>X</button></div>
            //</div>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => this.handleClick(index)}>
                        <Icon>
                            delete_forever
            </Icon>
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar
                        src={user.avatar}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={user.first_name}
                    secondary={user.email}
                />
            </ListItem>
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
                <List>
                    {this.state.users.map(this.showUsers)}
                </List>
            </div>
            
        )
    }
}
