import React from "react";
import { Link } from "react-router-dom";

function Register(props) {

    let classes=[];
    if(props.type){
        classes.push("text-success")
    }
    else{
        classes.push("text-danger")
    }

    return(
    <div className="container-fluid mt-5"  >
        <div className="col-md-5 m-auto" style={{background:"white" ,borderRadius:"10px"}}>
            <div className="mt-3">
                <div className="cart text-left light">
                    <div className="card-body primarey m-2 ">
                    <br/>
                    <h1 className="text-center text-primary">Register</h1>
                    
                    <br/>
                    <button type="button" className="btn btn-primary btn-lg btn-block" style={{background:"#1bbedf"}} onClick={props.googlelogin}>SignUp via Google</button>
                    <br/>

                        <hr/>

                        <form onSubmit={props.Register}>
                        <br/>
                            <div className="form-group">
                                <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email address" 
                                required
                                />
                            </div>
                        <br/>
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
                        <br/>   
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
                            <br/> 
                            <p className={classes.join(" ")}>{props.message}</p>
                            <button type="submit" className="btn btn-primary btn-lg btn-block" >Create Account</button>
                        </form>
                        <br/>
                        <center>
                        <span>have an account?</span>
                         <Link to={"/login"} onClick={props.resetMessage}>Log in</Link>
                            
                        </center>
                    </div>
                </div>
            </div>
        </div>


    </div>
    )
}
export default Register;