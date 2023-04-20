import './Form.css'

function Form () {
    return (
        <>
        <form className='form'>
            <div className='user-box'>
                <input type={"text"} placeholder={""}></input>
                <label>Username / Email</label>
            </div>
            <div className='user-box'>
                <input type={"text"} name = {"password"} for={""} placeholder={""}></input>
                <label>Password</label>
            </div>
            <div className='button-container'>
                <button className='button'>Login</button>
            </div>
            <div className='signup-box'>
                <p className='signup-text'>Not a member ? <a href="/signup" className='signup-link'>Sign up</a></p>
            </div>
        </form>
        </>
    )
}
export default Form;