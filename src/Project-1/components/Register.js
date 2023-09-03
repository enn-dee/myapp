import React from "react";

function Register(props) {

    return (

        <div className="container card p-3 mt-1 register-container">
            <form onSubmit={props.submit}>
                <h1 className="text-center">Registration Form</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="mail" name="Email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" required />

                </div>
                <button className="btn btn-primary mt-3">Register</button>
            </form>
        </div>
    )
}
export default Register;