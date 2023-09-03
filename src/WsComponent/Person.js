import React, { Component } from "react";
import './CSS/Style.css'
import Man from "./Man";
import PropTypes from 'prop-types';
import PersonData from './data/PersonData';
import { isVisible } from "@testing-library/user-event/dist/utils";


// this is class component

class Person extends Component {


    constructor(props) {
        super(props);
        this.props = props;

        // way to use state in class compo
        this.state = {
            // name: 'Nadeem',
            age: '21',
            isActive: false,
        }

    }


    // we can also change values of state by setState func
    changeName() {

        this.setState({ name: 'Alpha' });
    }

    render() {

        const Persons = <div> {PersonData.map((item) => (

            <div className="idCards" key={item.id}>
                <h3>My Name is: <span> {item.name}</span></h3>
                <p>I'm from: <i> {item.branch} </i>branch</p>
            </div>
        ))}</div>

        return (

            < div className="PersonBox" >
                <div>{Persons}</div>
                <Man />
            </ div>

        )

    }

}

Person.defaultProps = {
    name: 'Nadeem',
}
Person.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Person;