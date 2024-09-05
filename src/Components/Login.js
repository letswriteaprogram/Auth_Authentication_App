import React from "react";
import { Link } from "react-router-dom";

function Login(props) {

    const messageClass = props.type ? "text-success" : "text-danger";

    return (
        <div className="container-fluid mt-5">
            <div className="col-md-5 m-auto" style={{ background: "white", borderRadius: "10px" }}>
                <div className="mt-3">
                    <div className="card text-left light">
                        <div className="card-body primary m-2">
                            <h1 className="text-center text-primary">Login</h1>

                            <button
                                type="button"
                                className="btn btn-primary btn-lg btn-block"
                                style={{ background: "#1bbedf" }}
                                onClick={props.googlelogin}
                            >
                                Sign in via Google
                            </button>

                            <hr />

                            <form onSubmit={props.logIn}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <p className={messageClass}>{props.message}</p>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Login
                                </button>
                            </form>

                            <div className="text-center mt-3">
                                <Link to="/" onClick={props.resetMessage}>
                                    Create
                                </Link>
                                <span> an account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
