import React, { Component } from "react";
class ComponentHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Hello world",
        }
    }
    handleChange = (event) => {
        const name = event.target.value;
        this.setState({ name }, () => {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </form>
            </div >
        )
    }
}
export default ComponentHandler;