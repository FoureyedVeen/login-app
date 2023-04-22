import "../Components/Register.css";
import { useState} from "react";
import {auth} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"



// Firebase authentication for a Sign up/Register page

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error =>{
            console.log(error);
        }))
    }
   
    
   
    return (
        <>
            <div className="container">
                <div className="login-box">
                    <h2 className="login">SIGN UP</h2>
                    <form className="form" onSubmit={signUp}>
                        <div className="user-box">
                            <input type="text" placeholder={""} 
                                className="input" id="firstName"
                                value={firstName || ''} onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label>First Name</label>
                        </div>
                        <div className="user-box">
                            <input type="text" placeholder={""} 
                                className="input" id="lastName"
                                value={lastName || ''} onChange={(e) => setLastName(e.target.value)}
                            />
                            <label>Last Name</label>
                        </div>
                        <div className="user-box">
                            <input type="email" placeholder={""} 
                                className="input" id="email"
                                value={email || ''} onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="password" placeholder={""} 
                                className="input" id="password"
                                value={password || ''} onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Password</label>
                        </div>
                        <div>
                            <p className="signup-text">Already a member? <a href={`/`} className="signup-link">Log In</a></p>
                            <button className="button" >Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;