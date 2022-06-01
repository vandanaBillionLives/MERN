// JavaScript source code
import React from "react";
import Fetcher from "./Fetcher"
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

    handleLogin = (e) => {
        this.setState({
            IsLoginSuccess: true
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

    render() {
        return (
          
            <div type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <div>
                    {this.state.IsLoginSuccess === false && 
                        <div>
                        <input onChange={this.handleEmail} placeholder="Enter Email" ></input> <br />
                        <input type="password" onChange={this.handlePassword} placeholder="Enter Password"></input> <br />
                        <button onClick={this.handleLogin}>Login</button></div>}
                </div>
                <div>
                    {this.state.errorMsg ?
                        <div style={{ color: "red" }}>{this.state.errorMsg}</div>
                        : <div> {this.state.IsLoginSuccess === true && < Fetcher />}</div>}
                </div>
                </div>
          
        )
    }
}