import "../Components/Register.css";
import { useState} from "react";
import {auth} from "../firebase"


// src/firebase.js

function Register() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    
    const handleSubmit = (userId,firstName,lastName,email,password) => {
           
    
          
        
    }
    return (
        <>
            <div className="container">
                <div className="login-box">
                    <h2 className="login">SIGN UP</h2>
                    <form className="form">
                        <div className="user-box">
                            <input type="text" placeholder={""} 
                                className="input" id="firstName"
                                value={firstName || ''} onChange={(e)=> handleInputChange(e)}
                            />
                            <label>First Name</label>
                        </div>
                        <div className="user-box">
                            <input type="text" placeholder={""} 
                                className="input" id="lastName"
                                value={lastName || ''} onChange={(e)=> handleInputChange(e)}
                            />
                            <label>Last Name</label>
                        </div>
                        <div className="user-box">
                            <input type="email" placeholder={""} 
                                className="input" id="email"
                                value={email || ''} onChange={(e)=> handleInputChange(e)}
                            />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="password" placeholder={""} 
                                className="input" id="password"
                                value={password || ''} onChange={(e)=> handleInputChange(e)}
                            />
                            <label>Password</label>
                        </div>
                        <div>
                            <p className="signup-text">Already a member? <a href={`/`} className="signup-link">Log In</a></p>
                            <button className="button" onClick={()=> handleSubmit()}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;