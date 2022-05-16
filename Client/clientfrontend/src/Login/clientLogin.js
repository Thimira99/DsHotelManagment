import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { NavLink, useHistory } from "react-router-dom"
import './clientLoginStyles.css'
//import login_bg from '../images/login_bg.jpg'
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:8000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid credentials")
            window.alert("Login unsuccessful!")
        } else {

            window.alert("Login successful!")
            history.push("/home")
            document.location.reload()
            sessionStorage.setItem('LogStatus', true);
            sessionStorage.setItem('Loguser', data.data.Title + ". " + data.data.customerSecondName);


        }

    }

    useEffect(() => {


        sessionStorage.setItem('LogStatus', false);

    });

    return (
        <>
            <div>
                <div className='container'>

                    <div className='card' style={{ marginTop: '100px', backgroundColor: 'rgba(125, 131, 194 , 0.8)' }}>

                        <div className='login'>

                            <h1 className='h1'>Login To Your Account</h1>

                        </div>
                        <br /><br />
                        <div class="mt-8" style={{ marginTop: '-60px' }}>
                            <form method="POST" action="/home" autoComplete="off" className='login-wrapper'>
                                <div class="flex flex-col mb-2">
                                    <div class="flex relative ">

                                        <label style={{ color: "Black", fontSize: "20px" }}>Email</label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" id="sign-in-email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" style={{ backgroundColor: "rgba(180, 181, 187, 0.5)", color: "white", border: 'none' }} />
                                    </div>
                                </div>
                                <div class="flex flex-col mb-6">
                                    <div class="flex relative ">
                                        <label style={{ color: "Black", fontSize: "20px" }}>Password</label>
                                        &nbsp;&nbsp; <input type="password" id="sign-in-email" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" style={{ backgroundColor: "rgba(180, 181, 187, 0.5)", color: "white", border: 'none' }} />
                                    </div>
                                </div>
                                <br />
                                <div className="login-btn">
                                    <button className="btn btn-outline-dark" type="submit" onClick={loginUser} >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <br />
                        <div className='register'>
                            <a href="/JoinNow" target="_blank" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white" style={{ textDecoration: 'none' }}>
                                <span class="ml-2">
                                    You don't have an account?
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
