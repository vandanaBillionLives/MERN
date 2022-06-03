// JavaScript source code
import React from "react";
import Fetcher from "./Fetcher"
import { TextField, Grid, Button } from "@mui/material";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            IsLoginSuccess: false,
            errorMsg :""
        }
       
    }
    
    
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value);
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(e.target.value);
    }


    handleLogin = () => {
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    errorMsg: resJson.error,
                    IsLoginSuccess: ((typeof(resJson.token)!="undefined") ? true : false)
                })
                
            }) 
    }
    handleLogOut = () => {
        this.setState({ IsLoginSuccess:false})
    }

    render() {
        return (

            <div container>
                <Grid col={12} container item xs={12}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh', minWidth :100,borderWidth:1}}>
                    {this.state.IsLoginSuccess === false &&
                        <Grid item xs={12} md={6} style={{ minheight: 500, minWidth: 500 }}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                class="mb-1"
                                variant="outlined"
                                onChange={this.handleEmail}
                                placeholder="Enter Email" />
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                onChange={this.handlePassword}
                                placeholder="Enter Password"
                                type="password" />
                            <Button style={{ float: "right" }} variant="contained" onClick={this.handleLogin}>Login</Button>

                        </Grid>
                    }
                    <Grid item xs={12} md={6} style={{ minheight: 500, minWidth: 500 }}>
                        <div>
                            {this.state.errorMsg ?
                                <div style={{ color: "red" }}>{this.state.errorMsg}</div>
                                : <div> {this.state.IsLoginSuccess === true && < Fetcher />}</div>}
                        </div>
                        <div> {this.state.IsLoginSuccess === true && <Button style={{ float: "right" }} variant="contained" onClick={this.handleLogOut}>LogOut</Button> }
                        </div>
                        
                    </Grid>
                </Grid>
            </div>
          
        )
    }
}