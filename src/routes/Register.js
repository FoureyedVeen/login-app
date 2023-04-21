import "../Components/Register.css"


function Register() {
    return (
        <>
            <div className="container">
                <div className="login-box">
                    <h2 className="login">SIGN UP</h2>
                    <form className="form">
                        <div className="user-box">
                            <input type="text" placeholder={""} className="input"/>
                            <label>First Name</label>
                        </div>
                        <div className="user-box">
                            <input type="text" placeholder={""} className="input"/>
                            <label>Last Name</label>
                        </div>
                        <div className="user-box">
                            <input type="text" placeholder={""} className="input"/>
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="text" placeholder={""} className="input"/>
                            <label>Password</label>
                        </div>
                        <div>
                            <p className="signup-text">Already a member? <a href={`/`} className="signup-link">Log In</a></p>
                            <button className="button">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;