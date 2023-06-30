import React,{Component} from "react";
import Login from "./Login";
import Register from "./Rsgister";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,sendEmailVerification,signInWithPopup ,GoogleAuthProvider  } from "firebase/auth";
import Success from "./LoginSuccessfully";
import Apiconfig from "../Apiconfig";


const firebaseConfig = {
    apiKey: Apiconfig.apiKey,
    authDomain: Apiconfig.authDomain,
    databaseURL: Apiconfig.databaseURL,
    projectId: Apiconfig.projectId,
    storageBucket: Apiconfig.storageBucket,
    messagingSenderId: Apiconfig.messagingSenderId,
    appId: Apiconfig.appId,
  };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    class Cont extends Component{
    constructor(props){
        super(props)
        this.state={

          message:"",  
          isResister:"",
          // Message =>   1-success ,0-unsuccess
          type:1,
          LoginSuccess:false, 
        };
    } 
            


    // this functi will call on when user Register from Register page

            //get user data and check password with confirmpassword 
            RsgistrationHandler=(event)=>{
                event.preventDefault();
                const email = event.target.email.value;
                const password = event.target.password.value;
                const confirmpassword = event.target.confirmpassword.value;
                if(password !== confirmpassword){
                    this.setState({message:"Password doesn't match",type:0})
                    return
                }
            // send the data on firebase and get information about data
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    sendEmailVerification(auth.currentUser)
                    // Signed in 
                    this.setState({message:"Resistre Successfully",type:1},()=>{
                        event.target.email.value="";
                        event.target.password.value="";
                        event.target.confirmpassword.value="";  
                })
            })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    let ErrMess;
                    switch (errorCode) {
                        case "auth/weak-password":
                        ErrMess="Password should be at least 6 characters";    
                        break;
                        case "auth/email-already-in-use":
                        ErrMess="user is already resister";    
                        break;
                        default:
                        break;
                    }
                    this.setState({message:ErrMess,type:0})
                }); 
            }

            //this function will call, when user login with Login page
            LogInHand=(event)=>{
                event.preventDefault();
                const email = event.target.email.value;
                const password = event.target.password.value;
        
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user.email)
                if(userCredential.user.emailVerified !== true){
                    this.setState({message:"Emial is not varified yet",type:0})   
                }
                else{
                this.setState({LoginSuccess:true,},()=>{
                    event.target.email.value="";
                    event.target.password.value="";
                })
                console.log(userCredential);
                }

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    let ErrMess;
                    switch (errorCode) {
                        case "auth/user-not-found":
                        ErrMess="User is not found";    
                        break;
                        case "auth/wrong-password":
                        ErrMess="Password is incorrect Please enter correct password";    
                        break;
                        default:
                        break;
                }
                this.setState({message:ErrMess,type:0})   
            });

        }
        //this function will call on when user login with via google
        GoogleLoginHandler=()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            
            const user = result.user;

            if(result.user.emailVerified === true && user.email){
                this.setState({LoginSuccess:true,})   
            }
        }).catch((error) => {
            this.setState({message:error,type:0})
        });
        }

        ResteMessage=()=>{
            this.setState({message:"",});
        }


    render(){

        return (
            <Router >
              <Routes>
                <Route path="/" element={<Register 
                       type={this.state.type}
                       message={this.state.message} 
                       Register={this.RsgistrationHandler}
                       googlelogin={this.GoogleLoginHandler}
                       resetMessage={this.ResteMessage}></Register>}
                /> 
                <Route path="login" 
                element={
                    this.state.LoginSuccess?
                   <Success></Success> :
                <Login 
                         type={this.state.type}
                         message={this.state.message}  
                         logIn={this.LogInHand}
                         googlelogin={this.GoogleLoginHandler} 
                         resetMessage={this.ResteMessage }/>}
                 /> 
              </Routes>
            </Router>
          );
    }
}
export default Cont;