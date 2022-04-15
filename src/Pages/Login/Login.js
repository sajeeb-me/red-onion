import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo2.png'
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import PageLoading from '../PageLoading/PageLoading';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleGetEmail = emailInput => {
        setEmail(emailInput)
    }
    const handleGetPassword = passwordInput => {
        setPassword(passwordInput)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate('/')
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
        signInWithEmailAndPassword(email, password)
    }
    const hangleForgetPass = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        } else {
            alert('input your email')
        }
    }
    return (
        < div >
            <section className='my-10'>
                <div>
                    <img className='h-[60px] mx-auto' src={Logo} alt="" />
                </div>
                <div className='mt-10'>
                    <form onSubmit={handleSubmit} className='form-container'>
                        <input onBlur={(event) => handleGetEmail(event.target.value)} type="email" name="email" id="email" placeholder='Email' required />
                        <input onBlur={(event) => handleGetPassword(event.target.value)} type="password" name="password" id="password" placeholder='Password' required />
                        <p className='text-rose-500 text-left pl-5'>{firebaseError}</p>
                        <button onClick={hangleForgetPass} className='text-rose-300 pl-5 font-semibold hover:text-rose-500'><small>Forget password?</small></button>
                        <input className='bg-rose-600 w-[400px] text-white cursor-pointer' type="submit" value="Sign up" />
                    </form>
                    <p onClick={() => navigate('/signup')} className='text-rose-600 pl-5 font-semibold cursor-pointer hover:underline'>Don't have account?</p>
                </div>
                <SocialMediaLogin />
            </section>
        </div >
    );
};

export default Login;