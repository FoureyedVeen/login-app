import './Form.css'

export default function Form () {
    return (
        <>
        <form className='form'>
            <div className='user-box'>
                <input type={"text"} placeholder={""}></input>
                <label>Username</label>
            </div>
            <div className='user-box'>
                <input type={"text"} name = {"password"} for={""} placeholder={""}></input>
                <label>Password</label>
            </div>
            <div>
                <button className='button'>Sign in</button>
            </div>
            <div></div>
        </form>
        </>
    )
}