import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate()
    const [showError, setShowError] = useState(false)
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    const handleButton = (e) => {
        e.preventDefault();
        if (inputValue.email === 'admin123@gmail.com' && inputValue.password === 'admin') {
            localStorage.setItem('auth', JSON.stringify(true))
            setShowError(false)
            Navigate('/')
            window.location.reload();
        }
        setShowError(true)
    }
    
    const changEvent = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    return (
        <form onSubmit={handleButton}>
            <div>
                <h2>Login</h2>
                <div>
                    <input onChange={changEvent} name='email' type='email' placeholder='Email' />
                    <input onChange={changEvent} name='password' type='password' placeholder='Password' />
                </div>
                <p hidden={!showError} >!Invalid email and password</p>
                <span>Forgot password</span>
                <button type='submit' >Login</button>
            </div>

        </form>
    )
}

export default Login