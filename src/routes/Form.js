import '../Components/Form.css'
import { auth } from '../Firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        
        .then((response)=>{
         navigate('/home')  
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        }).catch((error =>{
            console.log(error);
        }))
    }
    return (
      <>
        <div className="container">
          <div className="login-box">
            <h2 id="login">LOGIN</h2>
            <form className="form" onSubmit={signIn}>
          <div className="user-box">
            <input
              type="email"
              placeholder={""}
              value={email}
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label> Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name={"password"}
              placeholder={""}
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="button-container">
            <button className="button">Login</button>
          </div>
          <div className="signup-box">
            <p className="signup-text">
              Not a member ?{" "}
              <a href={`/register`} className="signup-link">
                Sign up
              </a>
            </p>
          </div>
        </form>
          </div>
        </div>
        
      </>
    );
}
export default Form;