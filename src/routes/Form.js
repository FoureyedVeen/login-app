import '../Components/Form.css'
import { auth } from '../firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Form () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error =>{
            console.log(error);
        }))
    }
    return (
        <>
        <form className='form' onSubmit={signIn}>
            <div className='user-box'>
                <input type="email" placeholder={""} value={email}
                    className='input' onChange={(e) => setEmail(e.target.value)}
                />
                <label> Email</label>
            </div>
            <div className='user-box'>
                <input type="password" name = {"password"} 
                     placeholder={""} className='input'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
            </div>
            <div className='button-container'>
                <button className='button'>Login</button>
            </div>
            <div className='signup-box'>
                <p className='signup-text'>Not a member ? <a href= {`/register`} className='signup-link'>Sign up</a></p>
            </div>
        </form>
        </>
    )
}
export default Form;