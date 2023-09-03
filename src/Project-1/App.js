import React, { Component } from "react";
import Greet from './components/Greet'
import Register from './components/Register'
import './CSS/App.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            name: null,
            email: null,
            password: null,
        };
    }
    registrationHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.Email.value
        const password = event.target.password.value
        this.setState({ name, email, password, isRegistered: true })
    }

    render() {

        return (
            <div>
                <div>{this.state.isRegistered ? <Greet name={this.state.name} email ={this.state.email}/> : <Register submit={this.registrationHandler} />}</div>
            </div>
        )
    }
}
export default App;