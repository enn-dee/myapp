import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            country: null,
            counter: 0,
        };
    }
    nameChange = (event) => {
        console.log("Name: " + event.target.value);
    }
    handleChange = (event) => {
        console.log("Select: ", event.target.value)
    }
    submitHandler = (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({ name, country }, () => {
            console.log(this.state);
        })
    }
    handleClick = () => {
        this.setState({
            color: 'red', brand: 'Ford',
            model: '2022',
        })
    }
    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    handleReset = () => {
        
        this.setState({ brand: "", model: "", color: "" })
        
    }
    resetCount = ()=>{
        this.setState({counter: 0})
    }
    render() {
        return (

            <div className='form'>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <label htmlFor='fname'>Name: </label>
                        <input type='text' name='name' id='fname' />
                    </div>
                    <label htmlFor='country'>Country: </label>

                    <select name='country' id='country'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button type='submit'>Send</button>
                </form>
                {/* practice */}
                <div>
                    <p>It's {this.state.color} {this.state.brand}  model: {this.state.model}</p>
                    <button onClick={this.handleClick}>Click me</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
                <div>
                    <h2>{this.state.counter}</h2>
                    <button onClick={this.handleIncrement}>Increament</button>
                    <button onClick={this.handleDecrement}>Decreament</button>
                    <button onClick={this.resetCount}>Rest</button>

                </div>
            </div>
        )
    }
}
export default Form;