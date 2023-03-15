import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SignUpComponent(props) {
    // const [name, setname] = useState("")
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState("")
    // const [phonenumber, setphonenumber] = useState("")
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const phnRef = useRef()
    const navigate = useNavigate()

    function submit() {
        // console.log(name, email, password, phonenumber)
        let obj = { name: nameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value, phonenumber: phnRef.current.value }
        props.setuser(obj)
        navigate("/loginpage")
    }
    return (
        <div>
            <input type="text" placeholder='Enter Your Name' ref={nameRef} /><br />
            <input type="text" placeholder='Enter Your Email' ref={emailRef} /><br />
            <input type="text" placeholder='Enter Your password' ref={passwordRef} /><br />
            <input type="number" placeholder='Enter Your PhoneNumber' ref={phnRef} />
            <br /><br />
            <button onClick={submit}>Submit</button>
            <Link to="/loginpage">
                <button>Login</button>
            </Link>
        </div>
    )
}

export default SignUpComponent