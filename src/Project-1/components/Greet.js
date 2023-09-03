import React from 'react'

function Greet(props) {
    return (
        <div className="container card p-3 mt-1 register-container">
            <h3>{props.name} </h3>
            <h4>Thanks for joining us</h4>
            <p>Verification sent to <i> {props.email} </i></p>
        </div>
    )
}

export default Greet