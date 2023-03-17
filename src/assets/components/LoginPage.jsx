import { red } from '@mui/material/colors'
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import "../../login.css"
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput'
import { Input } from '@mui/material';
import Button from '@mui/material/Button';


function LoginPage(props) {
    // const [name, setname] = useState("")
    // const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const nameRef = useRef()
    const passwordRef = useRef()

    function Submit() {
        // let obj = { nam, password }
        // console.log("login obj", obj)
        console.log("login props", props)
        if (props.user.name == nameRef.current.value) {
            if (props.user.password == passwordRef.current.value) {
                navigate("/details")
            } else {
                alert("Invalid Password")
            }
        } else {
            alert("Invalid Name")
        }

    }
    return (
        <Box>
            {/* <div class="screen"> */}
            {/* <div class="screen__content"> */}
            <form class="login">
                {/* <div class="login__field"> */}
                <i class="login__icon fas fa-user"></i>
                <input type="text" class="login__input" placeholder="User name" ref={nameRef} style={{ color: "red", backgroundColor: "black" }} />
                {/* </div> */}
                {/* <div class="login__field"> */}
                <i class="login__icon fas fa-lock"></i>
                <input type="password" class="login__input" placeholder="Password" ref={passwordRef} />
                <Input />
                <Button >text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>

                {/* </div> */}
                <button class="button login__submit" onClick={Submit}>
                    <span class="button__text">Log In Now</span>
                    <i class="button__icon fas fa-chevron-right"></i>
                </button>
            </form>
            {/* <div class="social-login"> */}
            {/* <h3>log in via</h3> */}
            {/* <div class="social-icons"> */}
            <a href="#" class="social-login__icon fab fa-instagram"></a>
            <a href="#" class="social-login__icon fab fa-facebook"></a>
            <a href="#" class="social-login__icon fab fa-twitter"></a>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div class="screen__background"> */}
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
            {/* </div> */}
            {/* </div> */}
        </Box>
    )
}

export default LoginPage
