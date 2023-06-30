import React from "react";
import { Link } from "react-router-dom";

function Login(props) {

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
                    <h1 className="text-center text-primary">Login</h1>
                    <br/> 

                    <button type="button" className="btn btn-primary btn-lg btn-block" style={{background:"#1bbedf"}} onClick={props.googlelogin}>SignUp via Google</button>
                    <br/> 
                        <hr/>
                    <br/> 
                        <form onSubmit={props.logIn}>
                            <div className="form-group">
                                <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                required
                                />
                            </div>
                    <br/>         
                            <div className="form-group">
                                <input
                                type="text"
                                name="password"
                                className="form-control"
                                placeholder="password"
                                required
                                />
                            </div>
                    <br/>         
                            <p className={classes.join(" ")}>{props.message}</p>
                            <button type="submit" className="btn btn-primary btn-lg btn-block" >Login</button>
                            
                            
                        </form>
                        <br/>
                        <center>
                            <Link to={"/"}  onClick={props.resetMessage}>Create</Link>
                            <span> an account</span>
                        </center>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
export default Login;