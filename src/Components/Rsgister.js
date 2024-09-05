import React from "react";
import { Link } from "react-router-dom";

function Register(props) {

    const messageClass = props.type ? "text-success" : "text-danger";

    return (
        <div className="container-fluid mt-5">
            <div className="col-md-5 m-auto" style={{ background: "white", borderRadius: "10px" }}>
                <div className="mt-3">
                    <div className="card text-left light">
                        <div className="card-body primary m-2">
                            <h1 className="text-center text-primary">Register</h1>

                            <button
                                type="button"
                                className="btn btn-primary btn-lg btn-block"
                                style={{ background: "#1bbedf" }}
                                onClick={props.googlelogin}
                            >
                                Sign up via Google
                            </button>

                            <hr />

                            <form onSubmit={props.Register}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Create Password"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="confirmpassword"
                                        className="form-control"
                                        placeholder="Repeat Password"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <p className={messageClass}>{props.message}</p>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Create Account
                                </button>
                            </form>

                            <div className="text-center mt-3">
                                <span>Already have an account? </span>
                                <Link to="/login" onClick={props.resetMessage}>
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
