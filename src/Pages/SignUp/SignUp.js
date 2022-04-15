import React, { useState } from 'react';
import Logo from '../../images/logo2.png'
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import PageLoading from '../PageLoading/PageLoading';

const SignUp = () => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

    const navigate = useNavigate()

    const handleGetName = nameInput => {
        if (nameInput.length > 0) {
            setName({ value: nameInput, error: "" })
        } else {
            setName({ value: "", error: "Please provide your name." })
        }
    }
    const handleGetEmail = emailInput => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" })
        } else {
            setEmail({ value: "", error: "Please provide a valid email." })
        }
    }
    const handleGetPassword = passwordInput => {
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput)) {
            setPassword({ value: passwordInput, error: "" })
        } else {
            setPassword({ value: "", error: "Please provide minimum eight characters, at least one letter and one number:" })
        }
    }
    const handleGetConfirmPassword = confirmPasswordInput => {
        if (confirmPasswordInput === password.value) {
            setConfirmPassword({ value: confirmPasswordInput, error: "" })
        } else {
            setConfirmPassword({ value: "", error: "Password doesn't match." })
        }
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/home')
    }

    if (loading) {
        return <PageLoading></PageLoading>
    }

    let firebaseError;
    if (userError) {
        firebaseError = userError.message
    }

    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email.value, password.value)
    }

    return (
        < div >
            <section className='my-10'>
                <div>
                    <img className='h-[60px] mx-auto' src={Logo} alt="" />
                </div>
                <div className='mt-10'>
                    <form onSubmit={handleSubmit} className='form-container'>
                        <input onBlur={(event) => handleGetName(event.target.value)} type="text" name="name" id="name" placeholder='Name' required />
                        {name.error && <p className='text-rose-500 text-left pl-5 mt-[-15px]'><small>{name.error}</small></p>}
                        <input onBlur={(event) => handleGetEmail(event.target.value)} type="email" name="email" id="email" placeholder='Email' required />
                        {email.error && <p className='text-rose-500 text-left pl-5 mt-[-15px]'><small>{email.error}</small></p>}
                        <input onBlur={(event) => handleGetPassword(event.target.value)} type="password" name="password" id="password" placeholder='Password' required />
                        {password.error && <p className='text-rose-500 text-left pl-5 mt-[-15px]'><small>{password.error}</small></p>}
                        <input onBlur={(event) => handleGetConfirmPassword(event.target.value)} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' required />
                        {confirmPassword.error && <p className='text-rose-500 text-left pl-5 mt-[-15px]'><small>{confirmPassword.error}</small></p>}
                        {firebaseError}
                        <input className='bg-rose-600 w-[400px] text-white cursor-pointer' type="submit" value="Sign up" />
                    </form>
                    <p onClick={() => navigate('/login')} className='text-rose-600 pl-5 font-semibold cursor-pointer hover:underline'>Already have account?</p>
                </div>
                <SocialMediaLogin />
            </section>
        </div >
    );
};

export default SignUp;