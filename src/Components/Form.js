import './Form.css'

export default function Form () {
    return (
        <>
        <form className='form'>
            <div className='user-box'>
                <input type={"text"} name = {"username"} for={""}></input>
                <label>Username</label>
            </div>
            <div className='user-box'>
                <input type={"text"} name = {"password"} for={""}></input>
                <label>Password</label>
            </div>
            <div></div>
            <div></div>
        </form>
        </>
    )
}