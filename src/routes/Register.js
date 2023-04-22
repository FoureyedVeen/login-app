import "../Components/Register.css";
import { useState} from "react";
import {auth} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"



// src/firebase.js

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
    //     try {
    //       const { user } = await createUserWithEmailAndPassword(email, password);
          
    //       await user.updateProfile({
    //         displayName: `${firstName} ${lastName}`
    //       });
    //       setFirstName('');
    //       setLastName('');
    //       setEmail('');
    //       setPassword('');
    //       console.log(user);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    // const register = e => {
        
    //       // Create a new user with email and password using firebase
    //         createUserWithEmailAndPassword(auth, email, password)
    //         .then((res) => {
    //             console.log(res.user)
    //           })
    //         .catch(err => err.message)
    //     setFirstName('')
    //     setLastName('')
    //     setEmail('')
    //     setPassword('')
        
    // }
    //   console.log(createUserWithEmailAndPassword)
    // const handleSubmit = (user) => {
          
    //     createUserWithEmailAndPassword(auth, firstName,lastName,email,password)
    //         .then((userCredential) => {
    //                 // Signed in 
    //             const user = userCredential.user;
    //             console.log(user)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             // ..
    //         });

          
        
    // }
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